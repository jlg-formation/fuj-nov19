import { Injectable } from '@angular/core';
import { Reference } from '../interface/reference';

@Injectable({
  providedIn: 'root'
})
export class ReferenceService {
  refSet = new Set<Reference>();
  constructor() {}

  add(reference: Reference) {
    console.log('reference: ', reference);
    this.refSet.add(reference);
    this.saveRefSet();
  }

  saveRefSet() {
    localStorage.setItem('refset', JSON.stringify([...this.refSet]));
  }


}
