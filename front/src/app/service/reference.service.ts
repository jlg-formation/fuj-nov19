import { Injectable } from '@angular/core';
import { Reference } from '../interface/reference';

@Injectable({
  providedIn: 'root'
})
export class ReferenceService {
  constructor() {}

  add(reference: Reference) {
    console.log('reference: ', reference);
  }
}
