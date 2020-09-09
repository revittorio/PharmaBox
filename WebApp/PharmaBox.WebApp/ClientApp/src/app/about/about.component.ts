import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from '../services/configuration.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  version: string = "loading...";

  constructor(
    private configService: ConfigurationService
    ) {
      configService.getVersion().then(version => {
        this.version = version;
      })
  }

  ngOnInit(): void {
  }

}
