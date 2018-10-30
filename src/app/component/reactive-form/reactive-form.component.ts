import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  myGroup: FormGroup;
  constructor() {}

  ngOnInit() {
    this.myGroup = new FormGroup({
      name: new FormControl('Dream', Validators.required),
      location: new FormControl('SiChuan', Validators.required),
      birthday: new FormControl('1996-03-22', Validators.required)
    });
  }

  onSubmit() {
    console.log(this.myGroup.value);
    console.log(this.myGroup.valid);
  }

}