import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReferenceService } from 'src/app/service/reference.service';
import { Reference } from 'src/app/interface/reference';

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
    quantity: new FormControl(100, Validators.required)
  });

  constructor(private router: Router, private reference: ReferenceService) {}

  ngOnInit() {}

  submit() {
    console.log('submit');
    this.reference.add(this.f.value as Reference);
    this.router.navigateByUrl('/success');
  }
}
