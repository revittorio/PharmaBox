import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

interface PharmaEditData {
  title: string;
  model: PharmaEditModel;
}

interface PharmaEditModel {
  codice: string;
  nome: string;
  quantita: number;
  scadenza: Date;
  rimanenza: number;
}

@Component({
  selector: 'app-pharma-edit',
  templateUrl: './pharma-edit.component.html',
  styleUrls: ['./pharma-edit.component.scss']
})
export class PharmaEditComponent implements OnInit {

  model: PharmaEditModel;

  constructor(
    public dialogRef: MatDialogRef<PharmaEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PharmaEditData) {

      this.model = data.model;
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
