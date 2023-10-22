import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NsasTaskDto } from 'src/app/core/models/NsasTask/nsasTaskDto';
import { NsasTaskService } from 'src/app/core/services/nsasTask.service';

@Component({
  selector: 'app-task-add-edit',
  templateUrl: './task-add-edit.component.html',
  styleUrls: ['./task-add-edit.component.scss']
})
export class TaskAddEditComponent implements OnInit {
  taskForm!: FormGroup;
  @Input() taskAddEdit: NsasTaskDto | undefined;
  @Input() statuses: any[] = [];

  @Output() add = new EventEmitter<NsasTaskDto>();
  @Output() edit = new EventEmitter<NsasTaskDto>();
  @Output() cancel = new EventEmitter<void>();

  taskId: number | undefined;
  title: string ="";
  url: any ;

  constructor(private taskService: NsasTaskService, public datePipe: DatePipe,
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
        this.taskAddEdit = res;
       console.log("item",res)
        this.taskForm.patchValue({
          id: this.taskAddEdit!.id,
          status: this.taskAddEdit!.status,
          title: this.taskAddEdit!.title,
          description: this.taskAddEdit!.description,
          dueDate: this.datePipe.transform(this.taskAddEdit!.dueDate, 'yyyy-MM-dd'),
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
      this.taskAddEdit = this.taskForm.getRawValue();

      console.log("item",this.taskForm.getRawValue());
      if (this.taskId == undefined) {
        this.taskService.addNsasTask(this.taskForm.getRawValue())
          .subscribe(() => {
            this.router.navigate(['./tasks']);
            this.add.emit(this.taskAddEdit);
          });
      }
      else {
        this.taskService.editNsasTask(this.taskAddEdit!)
          .subscribe({
            next: () => {
              this.router.navigate(['./tasks']);
              this.edit.emit(this.taskAddEdit);
            }
          })
      }
    }
  }

   onSelected(value:any){
    this.taskForm.patchValue({status: Number(value.value)});
 }
}
