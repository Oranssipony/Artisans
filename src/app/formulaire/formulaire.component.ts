import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrl: './formulaire.component.scss',
})
export class FormulaireComponent implements OnInit {
  form: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
      object: new FormControl(null, Validators.required),
      message: new FormControl(null, [
        Validators.required,
        Validators.minLength(10),
      ]),
    });
  }

  clicksub() {
    console.log(this.form.value);
    alert('le message a bien été envoyé');
    this.form.reset();
  }
}
