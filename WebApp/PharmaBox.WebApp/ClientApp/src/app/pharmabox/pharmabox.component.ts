import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { PharmaEditComponent } from '../modals/pharma-edit/pharma-edit.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-pharmabox',
  templateUrl: './pharmabox.component.html',
  styleUrls: ['./pharmabox.component.scss']
})
export class PharmaboxComponent implements OnInit {

  constructor(
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.add();
  }

  add(){
    const dialogRef = this.dialog.open(PharmaEditComponent, {
      width: '600px',
      panelClass: 'custom-dialog-container',
      data: {
        title: 'Aggiungi confezione',
        model: {
          codice: '123'
        }
      }
    });
    
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        console.log(JSON.stringify(result));
      }
    });
    }
}
