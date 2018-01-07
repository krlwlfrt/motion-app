import {HttpClient} from '@angular/common/http';
import {Component} from '@angular/core';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {
  private settings: any;

  constructor(private httpClient: HttpClient) {
    httpClient.get('/api/settings').toPromise().then((settings) => {
      this.settings = settings;
    });
  }

  changed(value, setting) {
    this.httpClient.post('/api/settings', {
      key: setting.key,
      value: value
    }).toPromise().then((result) => {
      console.log(result);
    });
  }
}
