import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';

import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  ngOnInit(): void {
  }

  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;
  


  constructor(private storage: AngularFireStorage) {}

  userMessage='rien à dire';


  uploadFile(event) {
    const file = event.target.files[0];
    const filePath = 'test02';
    const fileRef = this.storage.ref(filePath);
    // Without Metadata
    // const task = this.storage.upload(filePath, file);
    
    // With Metadata
    const task = fileRef.put(file, { customMetadata: { message: this.userMessage } });

    // observe percentage changes
    this.uploadPercent = task.percentageChanges();
    // get notified when the download URL is available
    task.snapshotChanges().pipe(
        finalize(() => this.downloadURL = fileRef.getDownloadURL() )
     )
    .subscribe()
  }
}