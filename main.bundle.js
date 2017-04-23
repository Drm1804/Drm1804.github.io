webpackJsonp([1,4],{

/***/ 150:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 150;


/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(169);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.times = '';
        this.timeEntities = [];
        this.sideMenu = [];
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(231),
        styles: [__webpack_require__(225)]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__time_line_time_line_component__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__time_line_line_fill_line_fill_component__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__timer_timer_component__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__timer_time_ago_pipe__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__check_timesheet_check_timesheet_component__ = __webpack_require__(163);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var appRoutes = [
    { path: 'timeline', component: __WEBPACK_IMPORTED_MODULE_8__time_line_time_line_component__["a" /* TimeLineComponent */] },
    { path: 'check', component: __WEBPACK_IMPORTED_MODULE_12__check_timesheet_check_timesheet_component__["a" /* CheckTimesheetComponent */] },
    {
        path: '',
        redirectTo: '/timeline',
        pathMatch: 'full'
    },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__time_line_time_line_component__["a" /* TimeLineComponent */],
            __WEBPACK_IMPORTED_MODULE_9__time_line_line_fill_line_fill_component__["a" /* LineFillComponent */],
            __WEBPACK_IMPORTED_MODULE_10__timer_timer_component__["a" /* TimerComponent */],
            __WEBPACK_IMPORTED_MODULE_11__timer_time_ago_pipe__["a" /* TimeAgoPipe */],
            __WEBPACK_IMPORTED_MODULE_12__check_timesheet_check_timesheet_component__["a" /* CheckTimesheetComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MdSidenavModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["c" /* MdGridListModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["d" /* MdIconModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["e" /* MdCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["f" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__parser_parser_service__ = __webpack_require__(164);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckTimesheetComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CheckTimesheetComponent = (function () {
    function CheckTimesheetComponent(parser) {
        this.parser = parser;
        this.timeEntities = [];
        this.timeInfo = {};
    }
    CheckTimesheetComponent.prototype.ngOnInit = function () {
    };
    CheckTimesheetComponent.prototype.parseData = function (event) {
        var parse = this.parser.prepareInputTimesheet(event);
        this.timeEntities = parse[0];
        this.timeInfo = parse[1];
        console.log(this.timeInfo);
    };
    return CheckTimesheetComponent;
}());
CheckTimesheetComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-check-timesheet',
        template: __webpack_require__(232),
        providers: [__WEBPACK_IMPORTED_MODULE_1__parser_parser_service__["a" /* ParserService */]],
        styles: [__webpack_require__(226)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__parser_parser_service__["a" /* ParserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__parser_parser_service__["a" /* ParserService */]) === "function" && _a || Object])
], CheckTimesheetComponent);

var _a;
//# sourceMappingURL=check-timesheet.component.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ParserService = (function () {
    function ParserService() {
    }
    ParserService.prototype.prepareInputTimesheet = function (data) {
        var _this = this;
        try {
            var timesheets_1 = [];
            data.split('\n').forEach(function (el) {
                timesheets_1.push(_this._parseEntityTimesheet(el));
            });
            this._returnListQueues(timesheets_1);
            var info = {
                spentTime: this._calcFulltime(timesheets_1),
                queueList: this._returnListQueues(timesheets_1),
            };
            return [timesheets_1, info];
        }
        catch (e) {
            console.error('Error input data');
        }
    };
    ParserService.prototype._returnListQueues = function (data) {
        var queues = {};
        data.forEach(function (el) {
            if (!queues[el.queue]) {
                queues[el.queue] = true;
            }
        });
        return Object.keys(queues);
    };
    ParserService.prototype._calcFulltime = function (data) {
        var spentTime = 0;
        data.forEach(function (el) {
            var from = new Date(el.timeFrom);
            var to = new Date(el.timeTo);
            spentTime += to - from;
        });
        return spentTime;
    };
    ParserService.prototype._parseEntityTimesheet = function (entity) {
        var returned = {};
        var timesheet = entity.split(',');
        returned['data'] = new Date(timesheet[0]);
        returned['timeFrom'] = this._createDateWithTime(timesheet[0], timesheet[1]);
        returned['timeTo'] = this._createDateWithTime(timesheet[0], timesheet[2]);
        returned['queue'] = timesheet[3];
        returned['description'] = timesheet[4];
        return returned;
    };
    ParserService.prototype._createDateWithTime = function (date, time) {
        var nd = date.split('-').concat(time.split(':'));
        return new Date(nd[0], nd[1], nd[2], nd[3], nd[4]);
    };
    return ParserService;
}());
ParserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], ParserService);

//# sourceMappingURL=parser.service.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LineFillComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LineFillComponent = (function () {
    function LineFillComponent() {
        this.relativeSize = {};
    }
    LineFillComponent.prototype.calculateRelativeSize = function () {
        var minutesStartEntity = this.entity.timeFrom.getHours() * 60 + this.entity.timeFrom.getMinutes();
        var minutesFinishEntity = this.entity.timeTo.getHours() * 60 + this.entity.timeTo.getMinutes();
        this.relativeSize.before = minutesStartEntity / 60;
        this.relativeSize.after = (this.timeFrame.finish * 60 - minutesFinishEntity) / 60;
        this.relativeSize.fill = (minutesFinishEntity - minutesStartEntity) / 60;
    };
    LineFillComponent.prototype.ngOnInit = function () {
        this.calculateRelativeSize();
    };
    return LineFillComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Input */])(),
    __metadata("design:type", Object)
], LineFillComponent.prototype, "entity", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Input */])(),
    __metadata("design:type", Number)
], LineFillComponent.prototype, "timeIntervalWidth", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Input */])(),
    __metadata("design:type", Object)
], LineFillComponent.prototype, "timeFrame", void 0);
LineFillComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'line-fill',
        template: __webpack_require__(233),
        styles: [__webpack_require__(227)]
    }),
    __metadata("design:paramtypes", [])
], LineFillComponent);

//# sourceMappingURL=line-fill.component.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimeLineComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TimeLineComponent = (function () {
    function TimeLineComponent() {
        this.stripts = [];
        this.timeFrame = {
            start: 0,
            finish: 24
        };
    }
    TimeLineComponent.prototype.onResizeTimeline = function () {
        this.calculateTimeLine();
    };
    TimeLineComponent.prototype.calculateTimeLine = function () {
        var tlWidth = this.time.nativeElement.offsetWidth;
        var countStrips = this.stripts.length;
        this.striptVoid = (tlWidth - countStrips * 2) / (countStrips - 1);
    };
    TimeLineComponent.prototype.calcTime = function (i) {
        var returned = this.timeFrame.start + i / 2;
        if (i % 2 == 0) {
            if (i / 2 < 10) {
                return "0" + returned + ":00";
            }
            else {
                return returned + ":00";
            }
        }
        return '';
    };
    TimeLineComponent.prototype.ngOnInit = function () {
        for (var i = 0; i < 49; i++) {
            this.stripts.push('');
        }
        this.calculateTimeLine();
    };
    return TimeLineComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('time'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ElementRef */]) === "function" && _a || Object)
], TimeLineComponent.prototype, "time", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Input */])(),
    __metadata("design:type", Object)
], TimeLineComponent.prototype, "timeEntities", void 0);
TimeLineComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'time-line',
        template: __webpack_require__(234),
        styles: [__webpack_require__(228)]
    }),
    __metadata("design:paramtypes", [])
], TimeLineComponent);

var _a;
//# sourceMappingURL=time-line.component.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimeAgoPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TimeAgoPipe = (function () {
    function TimeAgoPipe() {
    }
    TimeAgoPipe.prototype._calcLength = function (val) {
        if (val < 10) {
            return "0" + val;
        }
        else {
            return "" + val;
        }
    };
    TimeAgoPipe.prototype.transform = function (value) {
        var date = new Date(value);
        return this._calcLength(date.getUTCHours()) + ":" + this._calcLength(date.getMinutes()) + ":" + this._calcLength(date.getSeconds());
    };
    return TimeAgoPipe;
}());
TimeAgoPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
        name: 'timeAgo'
    })
], TimeAgoPipe);

//# sourceMappingURL=time-ago.pipe.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TimerComponent = (function () {
    function TimerComponent() {
        this.timerData = {
            isStart: false,
            start: null,
            delta: 0
        };
    }
    TimerComponent.prototype.toggleTimer = function () {
        this.timerData.isStart ? this.timerData.isStart = false : this.timerData.isStart = true;
        if (this.timerData.isStart) {
            this.timerData.start = new Date();
            this.timerLoop();
        }
        else {
            this.timerData.delta = 0;
            this.subscription.unsubscribe();
            // todo make new time entity
        }
    };
    TimerComponent.prototype.timerLoop = function () {
        var _this = this;
        var timer = __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].interval(1000);
        this.subscription = timer.subscribe(function () {
            var now = new Date();
            var start = new Date(_this.timerData.start);
            _this.timerData.delta = now - start;
        });
    };
    TimerComponent.prototype.ngOnInit = function () {
    };
    return TimerComponent;
}());
TimerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-timer',
        template: __webpack_require__(235),
        styles: [__webpack_require__(229)]
    }),
    __metadata("design:paramtypes", [])
], TimerComponent);

//# sourceMappingURL=timer.component.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, ":host{\n  height: 100%;\n  display: block;\n}\nmd-sidenav-container{\n  height: 100%;\n}\nmd-sidenav {\n  background: pink;\n  width: 200px;\n}\n\n.content {\n  /*overflow: auto;*/\n  overflow: visible;\n\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, ":host {\n  padding: 10px;\n  height: 100%;\n  display: block;\n  overflow: hidden;\n}\n\n.tl{\n  font-size: 0;\n}\n.small-tl-col{\n  font-size: 1rem;\n  display: inline-block;\n  width: 20%;\n  vertical-align: top;\n}\n\n.big-tl-col {\n  display: inline-block;\n  width: 80%;\n  vertical-align: top;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, ".line {\n    /*height: 5px;*/\n    width: 100%;\n    clear: both;\n}\n.margin{\n    float: left;\n    height: 15px;\n}\n.fill{\n    height: 15px;\n    float: left;\n    background: #ddbdf1;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 228:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, ":host {\n    display: block;\n    margin: 0 10px;\n}\n\n.time {\n    padding: 10px 0;\n}\n\n.time-item{\n    position: relative;\n    float: left;\n}\n\n.time-empty{\n    float: left;\n}\n\n.time-stript{\n    float: left;\n    height: 20px;\n    width: 2px;\n    background-color: grey;\n}\n\n.time-stript.small{\n    margin-top: 10px;\n    height: 10px;\n}\n\n.hours-stript {\n    box-sizing: border-box;\n    display: inline-block;\n\n}\n\n.time-o-clock{\n    top: -10px;\n    left: -10px;\n    position: absolute;\n    font-size: 10px;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 229:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, ":host{\n  padding: 10px;\n  margin-top: 5px;\n  display: block;\n}\nmd-input-container{\n  width: 100%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 231:
/***/ (function(module, exports) {

module.exports = "<md-sidenav-container>\n  <md-sidenav mode=\"side\" opened=\"true\">\n    <p style=\"text-align: center;\">\n      Timesheet\n    </p>\n    <ul>\n      <li><a routerLink=\"check\">Check your timesheet</a></li>\n    </ul>\n  </md-sidenav>\n\n  <div class=\"content\">\n    <app-timer></app-timer>\n    <router-outlet></router-outlet>\n  </div>\n</md-sidenav-container>\n"

/***/ }),

/***/ 232:
/***/ (function(module, exports) {

module.exports = "<div class=\"tl\">\n  <div class=\"small-tl-col\">\n    <p>Statistic about your timesheet:</p>\n    <p *ngIf=\"timeInfo.spentTime\">Spent time: {{timeInfo.spentTime | timeAgo}}</p>\n    <p>Queues:\n      <span *ngFor=\"let item of timeInfo.queueList; let last = last\">{{item}}<span *ngIf=\"!last\">, </span></span>\n    </p>\n  </div>\n  <div class=\"big-tl-col\">\n    <time-line [timeEntities]=\"timeEntities\"></time-line>\n  </div>\n</div>\n\n\n\n<br>\n<textarea name=\"\" id=\"\" cols=\"30\" rows=\"10\" style=\"width: 100%;\" [(ngModel)]=\"times\" (ngModelChange)=\"parseData($event)\"></textarea>\n"

/***/ }),

/***/ 233:
/***/ (function(module, exports) {

module.exports = "<div class=\"line\">\n    <div class=\"margin\" [ngStyle]=\"{'width': relativeSize.before * 2 * timeIntervalWidth + 'px'}\"></div>\n    <div class=\"fill\" [ngStyle]=\"{'width': relativeSize.fill * 2 * timeIntervalWidth + 'px'}\">\n        <!--{{entity.queue | json}}: {{entity.description | json}}-->\n    </div>\n    <div class=\"margin\" [ngStyle]=\"{'width': relativeSize.after * 2 * timeIntervalWidth + 'px'}\"></div>\n</div>"

/***/ }),

/***/ 234:
/***/ (function(module, exports) {

module.exports = "<div #time class=\"time\" (window:resize)=\"onResizeTimeline()\">\n    <div class=\"time-item\" *ngFor=\"let entity of stripts; let i = index; let last = last; let odd  = odd\">\n        <span class=\"time-o-clock\" *ngIf=\"calcTime(i)\">{{calcTime(i)}}</span>\n        <div class=\"time-stript\" [ngClass]=\"{'small': odd}\"></div>\n        <div class=\"time-empty\" [ngStyle]=\"{ 'width': striptVoid + 'px'}\" *ngIf=\"!last\"></div>\n    </div>\n</div>\n<div class=\"clearfix\"></div>\n<line-fill\n        *ngFor=\"let entity of timeEntities; let i = index;\"\n        [timeFrame]=\"timeFrame\"\n        [entity]=\"entity\" [timeIntervalWidth]=\"striptVoid + 2\">   <!--todo rewrite-->\n\n</line-fill>\n\n<!--<ul>-->\n    <!--<li >{{entity | json}}</li>-->\n<!--</ul>-->"

/***/ }),

/***/ 235:
/***/ (function(module, exports) {

module.exports = "<md-grid-list cols=\"12\" rowHeight=\"60px\">\n  <md-grid-tile [colspan]=\"8\">\n    <md-input-container>\n      <input mdInput placeholder=\"What do you do?\">\n    </md-input-container>\n  </md-grid-tile>\n  <md-grid-tile  [colspan]=\"2\">\n    <md-input-container>\n      <input mdInput placeholder=\"Queue\">\n    </md-input-container>\n  </md-grid-tile>\n  <md-grid-tile [colspan]=\"1\">\n    <h1> {{timerData.delta | timeAgo}}</h1>\n  </md-grid-tile>\n  <md-grid-tile [colspan]=\"1\">\n     <button md-mini-fab (click)=\"toggleTimer()\">\n       <md-icon *ngIf=\"!timerData.isStart\">play_arrow</md-icon>\n       <md-icon *ngIf=\"timerData.isStart\">stop</md-icon>\n     </button>\n  </md-grid-tile>\n</md-grid-list>\n"

/***/ }),

/***/ 485:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(151);


/***/ })

},[485]);
//# sourceMappingURL=main.bundle.js.map