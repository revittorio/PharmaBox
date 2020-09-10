import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { PharmaEditComponent } from '../modals/pharma-edit/pharma-edit.component';
import { MatDialog } from '@angular/material/dialog';
import { faSave } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-pharmabox',
  templateUrl: './pharmabox.component.html',
  styleUrls: ['./pharmabox.component.scss']
})
export class PharmaboxComponent implements OnInit {

  items = [{
      key: 1,
      codice: '44868038',
      nome: 'ABERIPRA 28x1 cpr 10 mg',
      quantita: 28,
      uom: 'nr',
      scadenza: new Date('10/10/2021'),
      rimanenza: 16
    },{
      key: 2,
      codice: '44868038',
      nome: 'ACIDO TRANEXAMICO*5 fiale EV OS 500 mg 5 ml',
      quantita: 5,
      uom: 'nr',
      scadenza: new Date('10/10/2021'),
      rimanenza: 2
    },{
      key: 3,
      codice: '44868038',
      nome: 'ACICLOVIR*os sosp 100 ml 8% flacone',
      quantita: 100,
      uom: 'ml',
      scadenza: new Date('10/10/2021'),
      rimanenza: 75
    }
  ]

  constructor(
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.add();
  }

  edit(model){
    const dialogRef = this.dialog.open(PharmaEditComponent, {
      width: '600px',
      panelClass: 'custom-dialog-container',
      data: {
        title: 'Modifica confezione',
        actionName: 'Modifica',
        model: model,
        
        save: (model) : void => {
          console.log(JSON.stringify(model));
        }
      }
    });
  }

  add(){
    const dialogRef = this.dialog.open(PharmaEditComponent, {
      width: '600px',
      panelClass: 'custom-dialog-container',
      data: {
        title: 'Aggiungi confezione',
        actionName: 'Aggiungi',

        save: (model) : void => {
          console.log(JSON.stringify(model));
        }
      }
    });
  }
}
