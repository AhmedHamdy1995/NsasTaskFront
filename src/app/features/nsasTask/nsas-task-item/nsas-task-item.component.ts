import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NsasTaskDto } from 'src/app/core/models/NsasTask/nsasTaskDto';
import { NsasTaskService } from 'src/app/core/services/nsasTask.service';

@Component({
  selector: 'app-nsas-task-item',
  templateUrl: './nsas-task-item.component.html',
  styleUrls: ['./nsas-task-item.component.scss']
})
export class NsasTaskItemComponent implements OnInit {
  @Input() task : NsasTaskDto | undefined;
  @Output() deleteTask = new EventEmitter<number>();
  constructor(private nasTaskService: NsasTaskService){
  }
  ngOnInit(): void {
  }
  onPrint(){
    console.log(this.task);
  }
  onDelete(){
    this.nasTaskService.deleteNsasTask(this.task?.id!).subscribe(() => {
      this.deleteTask.emit(this.task?.id!);
    });
  }
}

