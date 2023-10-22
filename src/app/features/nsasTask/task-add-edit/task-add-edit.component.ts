import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NsasTaskDto } from 'src/app/core/models/NsasTask/nsasTaskDto';
import { CountryService } from 'src/app/core/services/country.service';
import { NsasTaskService } from 'src/app/core/services/nsasTask.service';

@Component({
  selector: 'app-task-add-edit',
  templateUrl: './task-add-edit.component.html',
  styleUrls: ['./task-add-edit.component.scss']
})
export class TaskAddEditComponent implements OnInit {
  taskForm!: FormGroup;
  @Input() personAddEdit: NsasTaskDto | undefined;
  @Input() statuses: any[] = [];

  @Output() add = new EventEmitter<NsasTaskDto>();
  @Output() edit = new EventEmitter<NsasTaskDto>();
  @Output() cancel = new EventEmitter<void>();

  taskId: number | undefined;
  title: string ="";
  url: any ;
  selectedCountry?: any;

  constructor(private taskService: NsasTaskService, public datePipe: DatePipe, private countryService: CountryService,
    private activatedRoute: ActivatedRoute, private router:Router
    ) {
    this.taskForm = new FormGroup(
      {
        id: new FormControl(),
        title: new FormControl(null, [Validators.required]),
        description: new FormControl(null, [Validators.required]),
        dueDate: new FormControl('', [Validators.required]),
        status:  new FormControl(),
      },

    );
    this.statuses = [
      {id: 1 , name: 'ToDo'},
      {id: 2 , name: 'InProgress'},
      {id: 3 , name: 'Complated'},
    ]
   }

  ngOnInit() {
    this.taskId = this.activatedRoute.snapshot.params?.['id'];
    if (this.taskId !== undefined) {
      this.title = 'Edit Task';
      this.taskService.getNsasTaskById(this.taskId).subscribe((res) =>{
        this.personAddEdit = res;

        this.taskForm.patchValue({
          id: this.personAddEdit!.id,
          status: this.personAddEdit!.status,
          title: this.personAddEdit!.title,
          description: this.personAddEdit!.description,
          dueDate: this.datePipe.transform(this.personAddEdit!.dueDate, 'yyyy-MM-dd'),
        });
      });

    } else{
      this.title = 'Add Task';
    }

  }

  onReset() {
    this.cancel.emit();
    this.taskForm.reset();
  }
  onSubmit() {
    if (this.taskForm.valid) {
      this.personAddEdit = this.taskForm.getRawValue();
      this.personAddEdit = {
        title : this.taskForm.value['title'],
        description : this.taskForm.value['description'],
        dueDate : this.taskForm.value['dueDate'],
        status : this.taskForm.value['status'],
      }
      console.log("item",this.taskForm.getRawValue());
      if (this.taskId == undefined) {
        this.taskService.addNsasTask(this.taskForm.getRawValue())
          .subscribe(() => {
            this.router.navigate(['./tasks']);
            this.add.emit(this.personAddEdit);
          });
      }
      else {
        this.taskService.editNsasTask(this.personAddEdit!)
          .subscribe({
            next: () => {
              this.router.navigate(['./tasks']);
              this.edit.emit(this.personAddEdit);
            }
          })
      }
    }
  }

   onSelected(value:any){
    this.taskForm.patchValue({status: Number(value.value)});
 }
}
