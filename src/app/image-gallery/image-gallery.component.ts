import {Component, Inject, OnInit, Optional} from '@angular/core';
import {GalleryConfig} from './token';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.scss']
})
export class ImageGalleryComponent implements OnInit {
  listImage = [
    'https://www.peacefuldumpling.com/wp-content/uploads/2017/08/charlize-theron-workout.jpg',
    'https://znews-photo.zadn.vn/w660/Uploaded/oqivovbt/2019_05_08/elizabeth_olsen_10.jpg',
    // tslint:disable-next-line:max-line-length
    'https://mondrian.mashable.com/2014%252F05%252F05%252F3d%252Fgwen.stacy.bfdc2.png%252F950x534__filters%253Aquality%252880%2529.png?signature=KwsjmWVAtJydqwgB83sivyHnEQE=',
    'https://live.staticflickr.com/4017/4668004311_4160dee73c_b.jpg'
  ];
  itemWidth: number;
  config = 4;
  constructor(
    @Inject(GalleryConfig)
    @Optional()
      config: number
  ) {
    if (config) {
      this.config = config;
    }
  }

  ngOnInit() {
    this.itemWidth = 100 / this.config;
  }

}
