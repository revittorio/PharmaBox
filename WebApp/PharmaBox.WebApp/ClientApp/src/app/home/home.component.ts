import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from '../services/configuration.service';
import { SectionColor } from '../model/model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  PharmaBoxColor: string = SectionColor.PharmaBox;
  TheraphyColor: string = SectionColor.Theraphy;
  SSNColor: string = SectionColor.SSN;

  constructor(
    private router: Router
    ) {

  }

  ngOnInit() {
  }

  pharmaBoxOpen() {
    this.router.navigateByUrl('/pharmabox');
  }

  therapyOpen() {
    this.router.navigateByUrl('/therapy');
  }
}
