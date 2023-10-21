import { Component, OnInit } from '@angular/core';
import { NsasTaskDto } from 'src/app/core/models/NsasTask/nsasTaskDto';
import { NsasTaskService } from 'src/app/core/services/nsasTask.service';

@Component({
  selector: 'app-nsas-task-listing',
  templateUrl: './nsas-task-listing.component.html',
  styleUrls: ['./nsas-task-listing.component.scss']
})
export class NsasTaskListingComponent implements OnInit {
  tasks: NsasTaskDto[] = [];
  constructor(private taskService : NsasTaskService) { }
  ngOnInit(): void {

  this.taskService.filterNsasTasks().subscribe(data => {
    this.tasks = data;
    console.log("data",data)
  })
  }
}
