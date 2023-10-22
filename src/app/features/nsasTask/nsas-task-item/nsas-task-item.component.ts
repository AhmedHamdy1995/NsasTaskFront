import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Statuses } from 'src/app/core/enums/statuses';
import { NsasTaskDto } from 'src/app/core/models/NsasTask/nsasTaskDto';

@Component({
  selector: 'app-nsas-task-item',
  templateUrl: './nsas-task-item.component.html',
  styleUrls: ['./nsas-task-item.component.scss']
})
export class NsasTaskItemComponent implements OnInit{
  @Input() task : NsasTaskDto | undefined;

  @Output() editTask = new EventEmitter<number>();
  @Output() deleteTask = new EventEmitter<number>();
  @Output() readTask = new EventEmitter<number>();

  status : string ='' ;
  constructor(){}
  ngOnInit(){
  this.status = Statuses[this.task!.status]
  }

  onRead(){
    this.readTask.emit(this.task?.id)
  }
  onDelete(){
    this.deleteTask.emit(this.task?.id)
  }
  onEdit(){
    this.editTask.emit(this.task?.id)
  }

}

