import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReferenceService } from './reference.service';
import { Reference } from '../interface/reference';

@Injectable({
  providedIn: 'root'
})
export class HttpReferenceService extends ReferenceService {
  constructor(private http: HttpClient) {
    super();
    console.log('http service');
  }

  add(reference: Reference) {
    super.add(reference);
    this.http.post<Reference>('http://localhost:3000/ws/reference', reference).subscribe({
      next: ref => {
        console.log('reference: ', ref);
      },
      error: err => {
        console.error('err: ', err);
      },
      complete: () => {
        console.log('complete');
      }
    });
  }
}
