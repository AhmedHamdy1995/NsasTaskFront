import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() width: string | undefined;
  @Input() height: string | undefined;
  @Input() showPopup: boolean;

  constructor() {
    this.showPopup = false;
  }
}
