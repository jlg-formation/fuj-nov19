import { Injectable } from '@angular/core';
import { Reference } from '../interface/reference';

@Injectable({
  providedIn: 'root'
})
export class ReferenceService {
  refSet = this.getRefSet();
  constructor() {}

  add(reference: Reference) {
    console.log('reference: ', reference);
    this.refSet.add(reference);
    this.saveRefSet();
  }

  saveRefSet() {
    localStorage.setItem('refset', JSON.stringify([...this.refSet]));
  }

  getRefSet() {
    const str = localStorage.getItem('refset');
    if (!str) {
      return new Set<Reference>();
    }
    return new Set(JSON.parse(str));
  }
}
