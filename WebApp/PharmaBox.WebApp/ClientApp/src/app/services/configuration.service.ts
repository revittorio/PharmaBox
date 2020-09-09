import { Constants } from './../model/model';
import { Injectable, EventEmitter } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  private readonly ENDPOIT = Constants.API + '/configuration';

  constructor(
    private httpClient: HttpClient
  ) {
  }

  getVersion(): Promise<string> {
    let url = `${this.ENDPOIT}/version`;
    return new Promise((resolve, reject) => {
        return this.httpClient
          .get<string>(url, {
            headers: {
              skipLoader: "true",
            },
          })
          .toPromise()
          .then((context) => {
            resolve(context);
          })
          .catch((result) => {
            //this.notifier.showSnackError(this.translateService.instant('PRESENTATION.GET_CONFIGURATION_ERROR'));
          });
    });
  }
}
