import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-prompet',
  templateUrl: './prompet.component.html',
  styleUrls: ['./prompet.component.scss']
})
export class PrompetComponent implements OnChanges{
  @Input() title : string | undefined;
  @Input() width: string | undefined;
  @Input() height: string | undefined;
  @Input() showPopup: boolean;

  @Output() closing: EventEmitter<void>;

  constructor() {
    this.showPopup = false;
    this.closing = new EventEmitter<void>();
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  onClose() {
    this.closing.emit();
  }
}
