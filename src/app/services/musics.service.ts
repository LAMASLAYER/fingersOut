import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class MusicsService {

  private http: HttpClient;
  public musics: any;

  constructor(http: HttpClient) {
    this.http = http;
  }

  public getMusics(): Observable<Array<any>> {
    return this.http
      .get('http://localhost:3000/musics')
      .map((res: Array<any>) => {
        this.musics = res;
        return this.musics;
      });
  }
}
