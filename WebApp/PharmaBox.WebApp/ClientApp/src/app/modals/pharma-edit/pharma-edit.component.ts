import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';

interface PharmaEditData {
  title: string;
  actionName: string;
  model: PharmaEditModel;

  save: (model: PharmaEditModel) => void;
}

interface PharmaEditModel {
  key: string;
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
  
  codiceValidator: FormControl =  new FormControl('', [Validators.required]);
  nomeValidator: FormControl =  new FormControl('', [Validators.required]);
  quantitaValidator: FormControl =  new FormControl('', [Validators.required, Validators.min(1)]);
  scadenzaValidator: FormControl =  new FormControl('', [Validators.required]);
  rimanenzaValidator: FormControl =  new FormControl('', [Validators.required, Validators.min(1)]);

  constructor(
    public dialogRef: MatDialogRef<PharmaEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PharmaEditData) {

      this.model = data.model || {
        key: null,
        codice: '',
        nome: '',
        quantita: null,
        scadenza: null,
        rimanenza: null
      };
  }

  invalid() {
    return (this.codiceValidator.invalid ||
      this.nomeValidator.invalid ||
      this.quantitaValidator.invalid ||
      this.scadenzaValidator.invalid ||
      this.rimanenzaValidator.invalid);
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    if(!this.invalid()) {
      this.dialogRef.close();
      this.data.save(this.model);
    }
  }

  ngOnInit(): void {
  }

}
