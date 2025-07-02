import { Component, Inject, OnInit } from '@angular/core';
import { Noticia } from '../../interfaces/noticia.interface';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmar',
  templateUrl: './confirmar.component.html',
  styleUrls: ['./confirmar.component.scss']
})
export class ConfirmarComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<ConfirmarComponent>,
               @Inject(MAT_DIALOG_DATA) public data: Noticia ) { }

  ngOnInit(): void {
  }

  borrar() {
    this.dialogRef.close(true);
  }

  cerrar(){
    this.dialogRef.close();
  }

}
