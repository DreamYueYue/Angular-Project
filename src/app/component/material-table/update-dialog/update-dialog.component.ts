import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-dialog',
  templateUrl: './update-dialog.component.html',
  styleUrls: ['./update-dialog.component.scss']
})
export class UpdateDialogComponent implements OnInit {
  userGroup: FormGroup;
  confirmFlag: boolean = true;
  constructor(@Inject(MAT_DIALOG_DATA) private data: any, public dialogRef: MatDialogRef < UpdateDialogComponent > ) {}

  ngOnInit() {
    this.userGroup = new FormGroup({
      name: new FormControl('', Validators.required),
      weight: new FormControl('', Validators.required),
      symbol: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    // console.log(this.userGroup.value);
    // console.log(this.userGroup.valid);
    if (this.userGroup.valid) {
      this.userGroup.value.position = this.data.user.position;
      this.userGroup.value.weight = parseFloat(this.userGroup.value.weight);
      this.dialogRef.close(this.userGroup.value);
    }
  }

  cancle() {
    this.dialogRef.close();
  }

  flagChange() {
    this.confirmFlag = false;
  }
}