import {Component, OnInit} from '@angular/core';
import {ErrorExtend} from '../../services/data.model';

@Component({
  selector: 'app-message-dialog',
  templateUrl: './message-dialog.component.html',
  styleUrls: ['./message-dialog.component.scss']
})
export class MessageDialogComponent implements OnInit {

  public message: ErrorExtend = new ErrorExtend();
  opened = false;

  constructor() {
  }

  ngOnInit() {
  }

  public openDialog(message: ErrorExtend) {
    this.message = message;
    this.opened = true;
  }

  public closeDialog() {
    this.opened = false;
  }

  onDialogClick(event) {
    event.stopPropagation();
  }
}
