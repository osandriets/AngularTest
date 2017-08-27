import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {DataLoaderService} from '../../services/data-loader.service';
import {EnquiryTypes} from '../../services/data.model';
import {MessageDialogComponent} from '../../components/message-dialog/message-dialog.component';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Params} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-support-not-loggined',
  templateUrl: './support-not-loggined.component.html',
  styleUrls: ['./support-not-loggined.component.scss']
})
export class SupportNotLogginedComponent implements OnInit {

  types: EnquiryTypes[] = [];
  supportFG: FormGroup = null;
  file: any = null;
  fileToShow: string;
  department_id = null;
  @ViewChild(MessageDialogComponent) messageDlg: MessageDialogComponent;
  @ViewChild('fileUpload') fileInput: ElementRef;
  descLength:number = 0;

  constructor(private service: DataLoaderService,
              private activatedRoute: ActivatedRoute,
              public domSanitizer: DomSanitizer) {

    this.supportFG = new FormGroup(
      {
        type: new FormControl('Advertising', Validators.required),
        otherType: new FormControl(null),
        name: new FormControl(null, Validators.required),
        email: new FormControl(null, [Validators.required, Validators.email]),
        subject: new FormControl(null, Validators.required),
        description: new FormControl(null, [Validators.required, Validators.maxLength(1000)]),
        imageFile: new FormControl(null),
        imageFile2: new FormControl(null)
      });

    this.supportFG.get('description').valueChanges.subscribe(
      (changedValue) => {
        if (changedValue) {
          this.descLength = changedValue.length;
        } else {
          this.descLength = 0;
        }
      }
    );
    this.supportFG.get('type').valueChanges.subscribe(
      (valueChanged) => {

        if (valueChanged === 'Other') {
          if (!this.supportFG.get('otherType').validator) {
            this.supportFG.get('otherType').clearValidators();
            this.supportFG.get('otherType').setValidators(Validators.required);
          }
        } else if (this.supportFG.get('otherType').validator != null) {
          this.supportFG.get('otherType').clearValidators();
          this.supportFG.get('otherType').updateValueAndValidity();
        }
      }
    );
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.department_id = params['id'];

        this.service.getData(this.service._getEnquiryTypes.bind(this.service)).subscribe(
          (data) => {
            this.types = data;
          },
          (error) => {
            this.messageDlg.openDialog(error);
          }
        );
      });
  }

  onFileUpload() {
    this.fileInput.nativeElement.click();
  }

  onFileChange(e) {

    const upFile = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];

    if (!upFile) {
      return;
    }

    const pattern = /image-*/;
    const reader = new FileReader();

    if (!upFile.type.match(pattern)) {
      alert('invalid format');
      this.clearImageChoose();
      return;
    }

    if ((upFile.size / 1024 / 1024 ) > 5) {
      alert('invalid size, image should not be more then 5Mb');
      this.clearImageChoose();
      return;
    }

    reader.onload = this._handleReaderLoaded.bind(this);

    reader.readAsDataURL(upFile);
    this.file = upFile;
  }

  _handleReaderLoaded(e) {
    const reader = e.target;

    const image = new Image();
    image.addEventListener('load', () => {

      console.log('imageSize' + image.width + '×' + image.height);

      if (image.width > 300 || image.height > 300) {
        alert('invalid size, image should not be more then 300x300');
        this.clearImageChoose();
      } else {
        this.fileToShow = reader.result;
      }
    });
    image.src = reader.result;
  }

  clearImageChoose() {
    this.supportFG.get('imageFile').setValue('');
    this.supportFG.get('imageFile2').setValue('');
  }

  onSubmit() {

    let e_type = this.supportFG.value['type'];
    if (e_type === 'Other') {
      e_type = this.supportFG.value['otherType'];
    }

    const dataToSend = {
      department: this.department_id,
      file: this.file,
      description: this.supportFG.value['description'],
      email: this.supportFG.value['email'],
      enquiry_type: e_type,
      subject: this.supportFG.value['subject'],
      user_name: this.supportFG.value['name'],
    };

    this.service.sendData(dataToSend).subscribe(
      (data) => {
        this.clearForm();
      },
      (error) => {
        console.error(error);
        this.messageDlg.openDialog(error);
      }
    );
  }

  clearForm() {
    this.file = null;
    this.fileToShow = '';

    this.supportFG.setValue(
      {
        type: 'Advertising',
        otherType: null,
        name: null,
        email: null,
        subject: null,
        description: null,
        imageFile: null,
        imageFile2: null
      });

    for (const control in this.supportFG.controls) {
      this.supportFG.get(control).markAsUntouched();
    }
  }
}
