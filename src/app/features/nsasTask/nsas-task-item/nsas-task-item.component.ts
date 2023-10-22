import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NsasTaskDto } from 'src/app/core/models/NsasTask/nsasTaskDto';

@Component({
  selector: 'app-nsas-task-item',
  templateUrl: './nsas-task-item.component.html',
  styleUrls: ['./nsas-task-item.component.scss']
})
export class NsasTaskItemComponent{
  @Input() task : NsasTaskDto | undefined;
  @Output() deleteTask = new EventEmitter<number>();
  @Output() readTask = new EventEmitter<number>();

  constructor(){}

  onPrint(){
    this.readTask.emit(this.task?.id)
  }
  onDelete(){
    this.deleteTask.emit(this.task?.id)
  }

}

