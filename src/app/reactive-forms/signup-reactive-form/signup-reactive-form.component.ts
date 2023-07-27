import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signup-reactive-form.component.html',
  styleUrls: ['./signup-reactive-form.component.css']
})
export class SignupReactiveFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
