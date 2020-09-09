import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from 'rxjs';
import { Router, NavigationEnd, ActivationEnd } from '@angular/router';
import { BreadcrumbItem, SectionColor } from './model/model';
import { ConfigurationService } from './services/configuration.service';
import { FaConfig } from '@fortawesome/angular-fontawesome';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit, OnDestroy {
  rSub: Subscription;

  titleBarColor: string = SectionColor.PharmaBox;

  breadcrumbItems: BreadcrumbItem[] = [];

  constructor(
    private router: Router,
    private configurationService: ConfigurationService,
    faConfig: FaConfig) {

    faConfig.defaultPrefix = 'far';

    this.rSub = this.router.events.subscribe((routeEvent: any) => {
      if(routeEvent instanceof ActivationEnd) {
      //if (routeEvent.url) {
        let data = routeEvent.snapshot.data;
        let url = routeEvent.snapshot.url.toString();
        console.log(routeEvent);
        this.breadcrumbItems = [];
        let color = null;
        if(data.breadcrumb) {
          this.breadcrumbItems.push({
            label: data.breadcrumb.text,
            url: '/'+url
          });
          color = data.breadcrumb.color;
        }
        this.titleBarColor = color || SectionColor.PharmaBox;
      //}
      }
    });
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.rSub.unsubscribe();
  }
}
