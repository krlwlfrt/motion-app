import {HttpClient} from '@angular/common/http';
import {Component} from '@angular/core';
import {NavParams} from 'ionic-angular';
import {MotionAPIResponse} from 'motion-server';

@Component({
  selector: 'page-event',
  templateUrl: 'event.html'
})
export class EventPage {
  private images: MotionAPIResponse<string[]> = {status: false};

  constructor(private httpClient: HttpClient, navParams: NavParams) {
    this.getEvent(navParams.get('event'));
  }

  getEvent(event: number) {
    this.httpClient.get(`/api/events/${event}`).toPromise().then((response: MotionAPIResponse<string[]>) => {
      this.images = response;
    });
  }
}
