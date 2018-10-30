import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.scss']
})
export class AddDialogComponent implements OnInit {
  userGroup: FormGroup;
  constructor(@Inject(MAT_DIALOG_DATA) private data: any, public dialogRef: MatDialogRef < AddDialogComponent > ) {}

  ngOnInit() {
    this.userGroup = new FormGroup({
      name: new FormControl('', Validators.required),
      weight: new FormControl('', Validators.required),
      symbol: new FormControl('', Validators.required)
    });
  }
  onSubmit() {
    if (this.userGroup.valid) {
      this.userGroup.value.weight = parseFloat(this.userGroup.value.weight);
      this.dialogRef.close(this.userGroup.value);
    }
  }

  cancle() {
    this.dialogRef.close();
  }
}