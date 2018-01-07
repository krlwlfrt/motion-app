import {HttpClient} from '@angular/common/http';
import {Component} from '@angular/core';
import {AlertController} from 'ionic-angular';
import {MotionAPIActiveDeviceList, MotionAPIResponse} from 'motion-server';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private status: MotionAPIResponse<undefined> = {status: false};
  private devices: MotionAPIResponse<MotionAPIActiveDeviceList> = {status: false, data: []};
  private mode: string;
  private settings: any = {};
  private snap = '/images/snap.jpg?time=' + (new Date()).getTime();

  constructor(private httpClient: HttpClient, private alertController: AlertController) {
    Observable.interval(5000).subscribe(() => {
      this.getStatus();
      this.getMode();
      this.snap = '/images/snap.jpg?time=' + (new Date()).getTime();
    });

    Observable.interval(15000).subscribe(() => {
      this.getDevices();
      this.getSettings();
    });

    this.getStatus();
    this.getMode();
    this.getDevices();
    this.getSettings();
  }

  getStatus() {
    this.httpClient.get('/api/status').toPromise().then((response: MotionAPIResponse<undefined>) => {
      this.status = response;
    });
  }

  getDevices() {
    this.httpClient.get('/api/devices').toPromise().then((response: MotionAPIResponse<MotionAPIActiveDeviceList>) => {
      this.devices = response;
    });
  }

  getMode() {
    this.httpClient.get('/api/mode').toPromise().then((response: MotionAPIResponse<string>) => {
      this.mode = response.data;
    });
  }

  getSettings() {
    this.httpClient.get('/api/settings').toPromise().then((settings: any[]) => {
      settings.forEach((setting) => {
        this.settings[setting.key] = setting.value;
      });
    });
  }

  changedMode(mode) {
    if (['on', 'auto', 'off'].indexOf(mode) === -1) {
      console.warn('Desired mode does not exist!');
      return;
    }

    this.httpClient.post('/api/mode/', {
      mode: mode
    }).toPromise().then((response: MotionAPIResponse<undefined>) => {
      console.log(response);
    });
  }

  trustDevice(mac) {
    const prompt = this.alertController.create({
      title: 'Gerät hinzufügen',
      message: 'Hiermit fügst du das Gerät zur Liste der vertrauenswürdigen Geräte hinzu. Bitte vergib einen Namen für das Gerät.',
      inputs: [
        {
          name: 'name',
          placeholder: mac
        }
      ],
      buttons: [
        {
          text: 'Abbrechen',
          role: 'cancel'
        },
        {
          text: 'Hinzufügen',
          handler: (data) => {
            this.httpClient.post('/api/devices/trust', {
              mac: mac,
              name: data.name
            }).toPromise().then(() => {
              this.getDevices();
            });

            return true;
          }
        }
      ]
    });

    prompt.present();
  }

  /**
   *
   * @param mac
   */
  untrustDevice(mac) {
    const prompt = this.alertController.create({
      title: 'Gerät entfernen',
      message: 'Möchtest du dieses Gerät wirklich aus der Liste der vertrauenswürdigen Geräte entfernen?',
      buttons: [
        {
          text: 'Abbrechen',
          role: 'cancel'
        },
        {
          text: 'Entfernen',
          handler: (data) => {
            this.httpClient.post('/api/devices/untrust', {
              mac: mac
            }).toPromise().then(() => {
              this.getDevices();
            });

            return true;
          }
        }
      ]
    });

    prompt.present();
  }
}
