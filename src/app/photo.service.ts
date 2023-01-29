import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface unsplashResponse {
  urls: {
    regular: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  constructor(private http: HttpClient) {}

  getPhoto() {
    return this.http.get<unsplashResponse>(
      'https://api.unsplash.com/photos/random',
      {
        headers: {
          Authorization:
            'Client-ID hWtxLaqnHO0byTKC9jbpS2BMZcwaOjhPF5gDWc6XvWU',
        },
      }
    );
  }
}
