import {Component, OnInit} from '@angular/core';
import {MusicsService} from '../../services/musics.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  private musicsService: MusicsService;
  public musics;

  constructor(musicsService: MusicsService) {
    this.musicsService = musicsService;
  }

  ngOnInit() {
    this.getMusics();
  }

  public getMusics() {
    return this.musicsService.getMusics().subscribe(
      data => this.musics = data
    );
  }
}
