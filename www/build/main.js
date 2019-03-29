webpackJsonp([0],{

/***/ 162:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 162;

/***/ }),

/***/ 214:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 214;

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EventPage = (function () {
    function EventPage(httpClient, navParams) {
        this.httpClient = httpClient;
        this.images = { status: false };
        this.getEvent(navParams.get('event'));
    }
    EventPage.prototype.getEvent = function (event) {
        var _this = this;
        this.httpClient.get("/api/events/" + event).toPromise().then(function (response) {
            _this.images = response;
        });
    };
    EventPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-event',template:/*ion-inline-start:"/home/wulfert/private/motion/app/src/pages/event/event.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Ereignis</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <img ion-item *ngFor="let image of images.data" [src]="\'/images/\' + image" width="100%"/>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/wulfert/private/motion/app/src/pages/event/event.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */]])
    ], EventPage);
    return EventPage;
}());

//# sourceMappingURL=event.js.map

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__event_event__ = __webpack_require__(254);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EventsPage = (function () {
    function EventsPage(httpClient, navController) {
        this.httpClient = httpClient;
        this.navController = navController;
        this.events = { status: false };
        this.getEvents();
    }
    EventsPage.prototype.getEvents = function () {
        var _this = this;
        this.httpClient.get('/api/events').toPromise().then(function (response) {
            _this.events = response;
        });
    };
    EventsPage.prototype.openEvent = function (event) {
        this.navController.push(__WEBPACK_IMPORTED_MODULE_3__event_event__["a" /* EventPage */], {
            event: event
        });
    };
    EventsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-events',template:/*ion-inline-start:"/home/wulfert/private/motion/app/src/pages/events/events.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Ereignisse</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <button ion-item *ngFor="let event of events.data" (click)="openEvent(event)">\n      {{event}}\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/wulfert/private/motion/app/src/pages/events/events.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */]])
    ], EventsPage);
    return EventsPage;
}());

//# sourceMappingURL=events.js.map

/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(httpClient, alertController) {
        var _this = this;
        this.httpClient = httpClient;
        this.alertController = alertController;
        this.status = { status: false };
        this.devices = { status: false, data: [] };
        this.settings = {};
        this.snap = '/images/snap.jpg?time=' + (new Date()).getTime();
        __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].interval(5000).subscribe(function () {
            _this.getStatus();
            _this.getMode();
            _this.snap = '/images/snap.jpg?time=' + (new Date()).getTime();
        });
        __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].interval(15000).subscribe(function () {
            _this.getDevices();
            _this.getSettings();
        });
        this.getStatus();
        this.getMode();
        this.getDevices();
        this.getSettings();
    }
    HomePage.prototype.getStatus = function () {
        var _this = this;
        this.httpClient.get('/api/status').toPromise().then(function (response) {
            _this.status = response;
        });
    };
    HomePage.prototype.getDevices = function () {
        var _this = this;
        this.httpClient.get('/api/devices').toPromise().then(function (response) {
            _this.devices = response;
        });
    };
    HomePage.prototype.getMode = function () {
        var _this = this;
        this.httpClient.get('/api/mode').toPromise().then(function (response) {
            _this.mode = response.data;
        });
    };
    HomePage.prototype.getSettings = function () {
        var _this = this;
        this.httpClient.get('/api/settings').toPromise().then(function (settings) {
            settings.forEach(function (setting) {
                _this.settings[setting.key] = setting.value;
            });
        });
    };
    HomePage.prototype.changedMode = function (mode) {
        if (['on', 'auto', 'off'].indexOf(mode) === -1) {
            console.warn('Desired mode does not exist!');
            return;
        }
        this.httpClient.post('/api/mode/', {
            mode: mode
        }).toPromise().then(function (response) {
            console.log(response);
        });
    };
    HomePage.prototype.trustDevice = function (mac) {
        var _this = this;
        var prompt = this.alertController.create({
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
                    handler: function (data) {
                        _this.httpClient.post('/api/devices/trust', {
                            mac: mac,
                            name: data.name
                        }).toPromise().then(function () {
                            _this.getDevices();
                        });
                        return true;
                    }
                }
            ]
        });
        prompt.present();
    };
    /**
     *
     * @param mac
     */
    HomePage.prototype.untrustDevice = function (mac) {
        var _this = this;
        var prompt = this.alertController.create({
            title: 'Gerät entfernen',
            message: 'Möchtest du dieses Gerät wirklich aus der Liste der vertrauenswürdigen Geräte entfernen?',
            buttons: [
                {
                    text: 'Abbrechen',
                    role: 'cancel'
                },
                {
                    text: 'Entfernen',
                    handler: function (data) {
                        _this.httpClient.post('/api/devices/untrust', {
                            mac: mac
                        }).toPromise().then(function () {
                            _this.getDevices();
                        });
                        return true;
                    }
                }
            ]
        });
        prompt.present();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/wulfert/private/motion/app/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Übersicht</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card *ngIf="mode">\n    <ion-card-header>\n      <span style="float: right">\n        <ion-icon name="eye" *ngIf="mode === \'on\'" color="secondary"></ion-icon>\n        <ion-icon name="refresh" *ngIf="mode === \'auto\'"></ion-icon>\n        <ion-icon name="eye-off" *ngIf="mode === \'off\'" color="danger"></ion-icon>\n      </span>\n\n      Modus\n    </ion-card-header>\n    <ion-card-content>\n      <ion-segment [(ngModel)]="mode" (ngModelChange)="changedMode($event)">\n        <ion-segment-button value="on">\n          An\n        </ion-segment-button>\n        <ion-segment-button value="auto">\n          Auto\n        </ion-segment-button>\n        <ion-segment-button value="off">\n          Aus\n        </ion-segment-button>\n      </ion-segment>\n\n      <div *ngIf="settings && mode === \'auto\'" style="margin-top: 10px">\n        Im <strong>Auto</strong>-Modus wird die Kamera nach\n        <strong>{{settings._scanTimeout * settings._missesConsideredOffline}}</strong>\n        Sekunden eingeschaltet, wenn keine vertrauenswürdigen Geräte im Netzwerk sind.\n      </div>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      <ion-icon name="videocam" style="float: right;"></ion-icon>\n\n      Kamera\n    </ion-card-header>\n\n    <img src="{{snap}}" alt="Live" *ngIf="status.status"/>\n    <ion-card-content *ngIf="!status.status">\n      Die Kamera ist momentan nicht aktiv.\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      <span style="float: right">\n        <ion-icon name="laptop"></ion-icon>\n        <ion-icon name="phone-portrait"></ion-icon>\n      </span>\n\n      Netzwerkgeräte\n    </ion-card-header>\n    <ion-card-content>{{devices.data.length}} Gerät(e) im Netzwerk</ion-card-content>\n    <ion-list>\n      <ion-item *ngFor="let device of devices.data">\n        <ion-row>\n          <ion-col *ngIf="!device.name">\n            {{device.mac}}\n            <div><strong>IP</strong>: {{device.ip}}</div>\n            <div *ngIf="device.vendor"><strong>Vendor</strong>: {{device.vendor}}</div>\n          </ion-col>\n          <ion-col *ngIf="device.name">\n            <strong>{{device.name}}</strong>\n            <div *ngIf="device.mac"><strong>MAC</strong>: {{device.mac}}</div>\n            <div *ngIf="device.ip"><strong>IP</strong>: {{device.ip}}</div>\n            <div *ngIf="device.vendor"><strong>Vendor</strong>: {{device.vendor}}</div>\n          </ion-col>\n\n          <ion-col text-center>\n            <ion-icon name="wifi" color="secondary" *ngIf="device.ip"></ion-icon>\n            <ion-icon name="wifi" color="danger" *ngIf="!device.ip"></ion-icon>\n          </ion-col>\n\n          <ion-col text-center>\n            <button (click)="trustDevice(device.mac)" *ngIf="!device.name">\n              <ion-icon name="add" *ngIf="!device.name"></ion-icon>\n            </button>\n\n            <button (click)="untrustDevice(device.mac)" *ngIf="device.name">\n              <ion-icon name="remove" *ngIf="device.name"></ion-icon>\n            </button>\n          </ion-col>\n        </ion-row>\n      </ion-item>\n    </ion-list>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/wulfert/private/motion/app/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SettingsPage = (function () {
    function SettingsPage(httpClient) {
        var _this = this;
        this.httpClient = httpClient;
        httpClient.get('/api/settings').toPromise().then(function (settings) {
            _this.settings = settings;
        });
    }
    SettingsPage.prototype.changed = function (value, setting) {
        this.httpClient.post('/api/settings', {
            key: setting.key,
            value: value
        }).toPromise().then(function (result) {
            console.log(result);
        });
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"/home/wulfert/private/motion/app/src/pages/settings/settings.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Einstellungen</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <div *ngFor="let setting of settings">\n      <ion-item>\n        <ion-label floating>{{setting.title}}</ion-label>\n\n        <ion-input *ngIf="!setting.values"\n                   type="text"\n                   [ngModel]="setting.value"\n                   (ngModelChange)="changed($event, setting)">\n        </ion-input>\n\n        <ion-select *ngIf="setting.values"\n                    [ngModel]="setting.value"\n                    (ngModelChange)="changed($event, setting)">\n          <ion-option value="{{value}}" *ngFor="let value of setting.values">{{value}}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item *ngIf="setting.description" text-wrap style="margin-bottom: 20px;" no-lines>\n        <em>{{setting.description}}</em>\n      </ion-item>\n    </div>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/wulfert/private/motion/app/src/pages/settings/settings.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(352);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_event_event__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_events_events__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_settings_settings__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__(674);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_event_event__["a" /* EventPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_events_events__["a" /* EventsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_settings_settings__["a" /* SettingsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
            ],
            bootstrap: [
                __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["b" /* IonicApp */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_event_event__["a" /* EventPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_events_events__["a" /* EventsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_settings_settings__["a" /* SettingsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 674:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_events_events__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_settings_settings__ = __webpack_require__(346);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Übersicht', component: __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */] },
            { title: 'Ereignisse', component: __WEBPACK_IMPORTED_MODULE_4__pages_events_events__["a" /* EventsPage */] },
            { title: 'Einstellungen', component: __WEBPACK_IMPORTED_MODULE_6__pages_settings_settings__["a" /* SettingsPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/wulfert/private/motion/app/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menü</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/home/wulfert/private/motion/app/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[347]);
//# sourceMappingURL=main.js.map