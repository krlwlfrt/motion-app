import {HttpClient} from '@angular/common/http';
import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {MotionAPIResponse} from 'motion-server';
import {EventPage} from '../event/event';

@Component({
  selector: 'page-events',
  templateUrl: 'events.html'
})
export class EventsPage {
  private events: MotionAPIResponse<number[]> = {status: false};

  constructor(private httpClient: HttpClient, private navController: NavController) {
    this.getEvents();
  }

  getEvents() {
    this.httpClient.get('/api/events').toPromise().then((response: MotionAPIResponse<number[]>) => {
      this.events = response;
    });
  }

  openEvent(event: number) {
    this.navController.push(EventPage, {
      event
    });
  }
}
