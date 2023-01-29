import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-photo-show',
  templateUrl: './photo-show.component.html',
  styleUrls: ['./photo-show.component.css'],
})
export class PhotoShowComponent implements OnInit {
  imgsrc = '';
  constructor(private photoService: PhotoService) {
    this.fetchPhoto();
  }

  ngOnInit(): void {}

  fetchPhoto() {
    this.photoService.getPhoto().subscribe((Response) => {
      this.imgsrc = Response.urls.regular;
    });
  }

  getPhoto() {
    this.fetchPhoto();
  }
}
