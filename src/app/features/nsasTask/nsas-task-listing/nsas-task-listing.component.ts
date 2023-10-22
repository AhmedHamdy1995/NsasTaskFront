import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NsasTaskDto } from 'src/app/core/models/NsasTask/nsasTaskDto';
import { NsasTaskService } from 'src/app/core/services/nsasTask.service';

@Component({
  selector: 'app-nsas-task-listing',
  templateUrl: './nsas-task-listing.component.html',
  styleUrls: ['./nsas-task-listing.component.scss']
})
export class NsasTaskListingComponent implements OnInit {
  tasks: NsasTaskDto[] = [];
  createPopup: boolean = false;

  constructor(private taskService : NsasTaskService , private router: Router) { }
  ngOnInit(): void {
    this.getTasks();

  }
  openCreating(){
    this.router.navigate(['/task-add-edit']);
    this.createPopup = true;
  }
  cancelCreating(){
    this.createPopup = false;
  }
  deleteTask(id:number){
    this.taskService.deleteNsasTask(id).subscribe(res => {
      if(res){
        this.getTasks();
      }
    })
  }
  readTask(id:number){
    this.router.navigate(['/task-details/'+id]);
  }
  getTasks(){
    this.taskService.filterNsasTasks().subscribe(data => {
      this.tasks = data;
      console.log("data",data)
    })
  }
}
