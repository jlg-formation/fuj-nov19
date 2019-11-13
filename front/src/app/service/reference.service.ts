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

  getRefSet(): Set<Reference> {
    const str = localStorage.getItem('refset');
    if (!str) {
      return new Set<Reference>();
    }
    try {
      const obj = JSON.parse(str);
      return new Set<Reference>(obj);
    } catch (err) {
      return new Set<Reference>();
    }
  }
}
