import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

/**
 * @title Dialog with header, scrollable content and actions
 */

@Component({
  selector: 'app-dialog-write',
  templateUrl: './dialog-write.component.html',
  styleUrls: ['./dialog-write.component.css']
})
export class DialogWriteComponent {

  constructor(public dialog: MatDialog) {}


  openDialog() {
    const dialogRef = this.dialog.open(DialogContent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

@Component({
  selector: 'dialog-content',
  templateUrl: 'dialog-content.html',
})

export class DialogContent {}
