import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NsasTaskDto } from 'src/app/core/models/NsasTask/nsasTaskDto';
import { NsasTaskFilters } from 'src/app/core/models/NsasTask/nsasTaskFilters';
import { NsasTaskService } from 'src/app/core/services/nsasTask.service';

@Component({
  selector: 'app-nsas-task-listing',
  templateUrl: './nsas-task-listing.component.html',
  styleUrls: ['./nsas-task-listing.component.scss']
})
export class NsasTaskListingComponent implements OnInit {
  tasks: NsasTaskDto[] = [];
  statuses: any[] = [];
  createPopup: boolean = false;
  tasksFilters: NsasTaskFilters = {};
  filter : string = "";

  constructor(private taskService : NsasTaskService , private router: Router) { }
  ngOnInit(): void {
    this.tasksFilters = {status:1 ,stringfilters:""};
    this.getTasks();
    this.statuses = [
      {id: 1 , name: 'ToDo'},
      {id: 2 , name: 'InProgress'},
      {id: 3 , name: 'Complated'},
    ]

  }

  openCreating(){
    this.router.navigate(['/task-add-edit']);
  }
  editTask(id:number){
    this.router.navigate(['/task-add-edit/' + id]);
  }
  deleteTask(id:number){
    this.taskService.deleteNsasTask(id).subscribe(res => {
      if(res){
        this.getTasks();
      }
    })
  }
  readTask(id:number){
    this.router.navigate(['/task-details/' + id]);
  }
  onSelectStatus(value:any){
    this.tasksFilters.status = Number(value.value);
    this.taskService.filterNsasTasks(this.tasksFilters).subscribe(data => {
      this.tasks = data;
    })
  }
  getTasks(){
    this.taskService.getAllNsasTasks().subscribe(data => {
      this.tasks = data;
    })
  }

  search(filter:any){
   this.tasksFilters.stringfilters = filter.target.value ;
   this.taskService.filterNsasTasks(this.tasksFilters).subscribe(data => {
    this.tasks = data;
  })
  }
}
