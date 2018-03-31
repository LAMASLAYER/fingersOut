import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor() { }

  public img: number;
  public node: any;

  ngOnInit() {
    this.loadImages();
  }

  public loadImages() {
    this.img = 2;
    while (this.img.toString() !== '26') {
     this.node = document.createElement('img');
     this.node.setAttribute('src', '../../../assets/Photo 1 (' + this.img.toString() + ').jpg');
     this.node.setAttribute('width', '20%');
     this.node.setAttribute('class', 'col-md-3 col-12');
     this.node.setAttribute('style', 'margin-bottom:2%;');
      document.getElementById('gallery').appendChild(this.node);
     console.log(this.node);
     this.img++;
    }
  }
}
