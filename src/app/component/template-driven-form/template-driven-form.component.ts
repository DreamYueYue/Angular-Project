import { Component, OnInit } from '@angular/core';
interface User {
  username: string,
    password: string
}

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent implements OnInit {
  user: User = {
    username: 'dreamwang',
    password: '123456'
  }

  constructor() {}

  ngOnInit() {}

  onSubmit({ value, valid }: { value: User, valid: boolean }) {
    console.log(valid);
    console.log(value);
  }

}