import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';

@Injectable()
export class StorageProvider {

constructor(private transfer: FileTransfer, private file: File) { }

  public saveFile(file){
    const fileTransfer: FileTransferObject = this.transfer.create();
  fileTransfer.download(file, this.file.dataDirectory + 'captureDownload.gif').then((entry) => {
    console.log('download complete: ' + entry.toURL());
  }, (error) => {
    // handle error
  });
  }
}
