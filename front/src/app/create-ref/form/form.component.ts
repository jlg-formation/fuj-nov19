import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  f = new FormGroup({
    label: new FormControl('Tournevis cruciforme taille 3 Facom', Validators.required),
    category: new FormControl('Outils - Quincaillerie', Validators.required),
    price: new FormControl('', Validators.required),
    quantity: new FormControl('100', Validators.required)
  });

  constructor(private router: Router) {}

  ngOnInit() {}

  submit() {
    console.log('submit');
    this.router.navigateByUrl('/success');
  }
}
