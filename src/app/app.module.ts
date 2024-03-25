import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {FileUploaderComponent} from './file-uploader/file-uploader.component';
import {NgxImagePreviewModule} from "ngx-image-preview/src/lib/ngx-image-preview.module";
import {NgxSpinnerModule} from "ngx-spinner";
import {NgxFileDropModule} from "ngx-file-drop";
import {ComboBoxComponent} from "combobox-custom";

@NgModule({
  declarations: [
    AppComponent,
    FileUploaderComponent,
    ComboBoxComponent
  ],
  imports: [
    BrowserModule,
    NgxImagePreviewModule,
    NgxSpinnerModule,
    NgxFileDropModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [ComboBoxComponent]
})
export class AppModule {
}
