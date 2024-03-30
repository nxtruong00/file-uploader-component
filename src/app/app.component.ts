import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'file-uploader-component';
  files: File[] = [];
  listColumns: string[] = ["name", "lastModified"]
  headerColumns: string[] = ["Item Name", "Last Modified"];

  receiveData(data: File[]) {
    this.files = data;
  }
}
