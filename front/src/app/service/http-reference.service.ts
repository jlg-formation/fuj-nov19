import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReferenceService } from './reference.service';
import { Reference } from '../interface/reference';
import { environment } from 'src/environments/environment';

const url = environment.url;

@Injectable({
  providedIn: 'root'
})
export class HttpReferenceService extends ReferenceService {
  constructor(private http: HttpClient) {
    super();
    console.log('http service');
    this.fetch();
  }

  add(reference: Reference) {
    super.add(reference);
    this.http.post<Reference>(url, reference).subscribe({
      next: ref => {
        console.log('reference: ', ref);
      },
      error: err => {
        console.error('err: ', err);
      },
      complete: () => {
        console.log('complete post');
      }
    });
  }

  fetch() {
    console.log('fetch');
    this.http.get<Reference[]>(url).subscribe({
      next: references => {
        console.log('references: ', references);
        this.refSet = new Set<Reference>(references);
        this.saveRefSet();
      },
      error: err => {
        console.error('err: ', err);
      },
      complete: () => {
        console.log('complete get');
      }
    });
  }
}
