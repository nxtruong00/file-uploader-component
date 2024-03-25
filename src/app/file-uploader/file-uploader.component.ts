import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.css']
})
export class FileUploaderComponent implements OnInit {
  @Output() dataEvent = new EventEmitter<File[]>();

  sendData() {
    this.dataEvent.emit(this.files);
  }
  files: File[] = [];
  uploading: boolean = false;
  uploadProgress: number = 0;

  constructor(private toastr: ToastrService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
  }

  onFileDropped({item, length}: FileList) {
    for (let i = 0; i < length; i++) {
      this.files.push(item(i));
    }
    this.sendData();
  }

  isImage(file: File): boolean {
    return file.type.startsWith('image');
  }

  async uploadFiles() {
    this.uploading = true;
    await this.spinner.show();
    for (let i = 0; i < this.files.length; i++) {
      // Simulate upload progress
      await this.delay(500);
      this.uploadProgress = ((i + 1) / this.files.length) * 100;
    }
    this.uploadProgress = 0;
    this.uploading = false;
    this.files = [];
    await this.spinner.hide();
    this.toastr.success('Files uploaded successfully');
    this.sendData();
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
