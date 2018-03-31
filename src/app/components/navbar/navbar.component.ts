import {Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public router: Router;

  constructor(router: Router) {
    this.router = router;
  }

  ngOnInit() {
  }

  public gallery() {
    this.router.navigate(['gallery']);
  }

  public about() {
    this.router.navigate(['about']);
  }

  public contact() {
    this.router.navigate(['contact']);
  }
}
