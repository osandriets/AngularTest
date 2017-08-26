import {Component, OnInit, ViewChild} from '@angular/core';
import {DataLoaderService} from '../../services/data-loader.service';
import {Category} from '../../services/data.model';
import {MessageDialogComponent} from '../../components/message-dialog/message-dialog.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  @ViewChild(MessageDialogComponent) messageDlg: MessageDialogComponent;
  servicesList: Category[] = [];

  constructor(private service: DataLoaderService) {
  }

  ngOnInit() {
    this.service.getData(this.service._getCategories.bind(this.service)).subscribe(
      (data) => {
        this.servicesList = data;
      },
      (error) => {
        this.messageDlg.openDialog(error);
      }
    );
  }
}
