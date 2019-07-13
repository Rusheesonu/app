(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-header></app-header>\n<!-- <bank-search>    \n</bank-search> -->\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n \n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/bank-search/bank-search.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/bank-search/bank-search.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h3 style=\"text-align:center\">Search Banks</h3>\n\n  <div class=\"options\">\n    <mat-form-field calss=\"select-field\" style=\"display: block;\" >\n        <mat-select placeholder=\"City\" formControlName=\"city\" [(value)]=\"selectedCity\" (selectionChange)=\"cityChanged($event.value)\">\n          <mat-option value=\"DELHI\">Delhi</mat-option>\n          <mat-option value=\"MUMBAI\">Mumbai</mat-option>\n          <mat-option value=\"HYDERABAD\">Hyderabad</mat-option>\n        </mat-select>\n    </mat-form-field>\n    <mat-form-field class=\"search-field\">\n        <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search . . .\">\n    </mat-form-field>\n    <mat-paginator [pageSizeOptions]=\"[5, 25, 50, 100]\" class=\"pagination-control\"></mat-paginator>\n  </div>\n    <div class=\"mat-elevation-z8 table-container\">\n      <div class=\"overlay\"></div>\n      <table mat-table [dataSource]=\"dataSource\" matSort class=\"bank-detail-table\">\n        <ng-container matColumnDef=\"select\">\n          <th mat-header-cell *matHeaderCellDef align=\"center\">\n            <span>Favorite</span>\n            <mat-checkbox style=\"margin-left: 10px;\"(change)=\"$event ? masterToggle() : null\"\n                          [checked]=\"selectionCityMap[selectedCity].hasValue() && dataSource && isAllSelected()\"\n                          [indeterminate]=\"selectionCityMap[selectedCity].hasValue() && dataSource && !isAllSelected()\">\n            </mat-checkbox>\n          </th>\n          <td mat-cell *matCellDef=\"let row\" align=\"center\">\n            <mat-checkbox (click)=\"$event.stopPropagation()\"\n                          (change)=\"$event ? checkBoxClicked(row) : null\"\n                          [checked]=\"isCheckBoxSelected(row)\">\n            </mat-checkbox>\n          </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"ifsc\">\n          <th mat-header-cell *matHeaderCellDef> IFSC </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.ifsc}} </td>\n        </ng-container>\n      \n        <ng-container matColumnDef=\"bank_id\">\n          <th mat-header-cell *matHeaderCellDef> Bank ID </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.bank_id}} </td>\n        </ng-container>\n      \n        <ng-container matColumnDef=\"branch\">\n          <th mat-header-cell *matHeaderCellDef> Branch </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.branch | titlecase}} </td>\n        </ng-container>\n      \n        <ng-container matColumnDef=\"address\">\n          <th mat-header-cell *matHeaderCellDef> Address </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.address | titlecase}} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"city\">\n            <th mat-header-cell *matHeaderCellDef> City </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.city | titlecase}} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"district\">\n            <th mat-header-cell *matHeaderCellDef> District </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.district | titlecase}} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"state\">\n            <th mat-header-cell *matHeaderCellDef> State </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.state | titlecase}} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"bank_name\">\n            <th mat-header-cell *matHeaderCellDef> Bank Name </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.bank_name | titlecase}} </td>\n        </ng-container>\n      \n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" (click)=\"$event ? checkBoxClicked(row) : null\"></tr>\n\n      </table>\n      <div *ngIf=\"showSpinner\" class=\"loading-spinner\">\n        <mat-progress-spinner \n          [diameter]=\"30\"\n          color=\"primary\" \n          mode=\"indeterminate\">\n        </mat-progress-spinner>\n      </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/favorite-banks/favorite-banks.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/favorite-banks/favorite-banks.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h3 style=\"text-align:center\">Favorite Banks</h3>\n  <div class=\"options\">\n    <mat-form-field class=\"search-field\">\n        <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search . . .\">\n    </mat-form-field>\n  </div>\n    <mat-paginator [pageSizeOptions]=\"[5, 25, 50, 100]\" class=\"pagination-control\"></mat-paginator>\n    <div class=\"mat-elevation-z8 table-container\">\n    \n    <div class=\"overlay\"></div>\n    <table mat-table [dataSource]=\"dataSource\" matSort class=\"bank-detail-table\">    \n      <ng-container matColumnDef=\"ifsc\">\n        <th mat-header-cell *matHeaderCellDef> IFSC </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.ifsc}} </td>\n      </ng-container>\n    \n      <ng-container matColumnDef=\"bank_id\">\n        <th mat-header-cell *matHeaderCellDef> Bank ID </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.bank_id}} </td>\n      </ng-container>\n    \n      <ng-container matColumnDef=\"branch\">\n        <th mat-header-cell *matHeaderCellDef> Branch </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.branch | titlecase}} </td>\n      </ng-container>\n    \n      <ng-container matColumnDef=\"address\">\n        <th mat-header-cell *matHeaderCellDef> Address </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.address | titlecase}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"city\">\n          <th mat-header-cell *matHeaderCellDef> City </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.city | titlecase}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"district\">\n          <th mat-header-cell *matHeaderCellDef> District </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.district | titlecase}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"state\">\n          <th mat-header-cell *matHeaderCellDef> State </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.state | titlecase}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"bank_name\">\n          <th mat-header-cell *matHeaderCellDef> Bank Name </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.bank_name | titlecase}} </td>\n      </ng-container>\n    \n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n    <h3 class=\"message\" *ngIf=\"bankData.length == 0\">Favorites List Empty!</h3>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/footer/footer.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Made with ♥️ by Rushikesh Koochana!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/header/header.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"header\">\n  <span class=\"logo\">Banking411\n  <button mat-icon-button class='show-more-button' (click)='hideOptions($event)'>\n      <mat-icon>keyboard_arrow_down</mat-icon>\n  </button>\n\n  </span>\n  <div class=\"pull-right\" [ngClass]=\"{'hide-options': isHidden}\">\n    <button mat-stroked-button color=\"normal\" class=\"nav-button\" routerLink=\"/bank-search\" (click)=\"hideOptions($event)\">Bank List</button>\n    <button mat-stroked-button color=\"normal\" class=\"nav-button\" routerLink=\"/favorite-banks\" (click)=\"hideOptions($event)\">Favorites</button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _bank_search_bank_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bank-search/bank-search.component */ "./src/app/bank-search/bank-search.component.ts");
/* harmony import */ var _favorite_banks_favorite_banks_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./favorite-banks/favorite-banks.component */ "./src/app/favorite-banks/favorite-banks.component.ts");





const routes = [
    { path: '',
        redirectTo: '/bank-search',
        pathMatch: 'full'
    },
    { path: 'bank-search', component: _bank_search_bank_search_component__WEBPACK_IMPORTED_MODULE_3__["BankSearchComponent"] },
    { path: 'favorite-banks', component: _favorite_banks_favorite_banks_component__WEBPACK_IMPORTED_MODULE_4__["FavoriteBanksComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'myapp';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _bank_search_bank_search_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bank-search/bank-search.component */ "./src/app/bank-search/bank-search.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm2015/progress-spinner.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _http_interceptors_request_cache_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./http-interceptors/request-cache.service */ "./src/app/http-interceptors/request-cache.service.ts");
/* harmony import */ var _http_interceptors_caching_interceptor_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./http-interceptors/caching-interceptor.service */ "./src/app/http-interceptors/caching-interceptor.service.ts");
/* harmony import */ var _favorite_banks_favorite_banks_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./favorite-banks/favorite-banks.component */ "./src/app/favorite-banks/favorite-banks.component.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");



















//For request caching




let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _bank_search_bank_search_component__WEBPACK_IMPORTED_MODULE_6__["BankSearchComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
            _favorite_banks_favorite_banks_component__WEBPACK_IMPORTED_MODULE_21__["FavoriteBanksComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__["MatPaginatorModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__["MatProgressSpinnerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__["MatCheckboxModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_18__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__["MatIconModule"]
        ],
        providers: [
            _http_interceptors_request_cache_service__WEBPACK_IMPORTED_MODULE_19__["RequestCache"],
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"], useClass: _http_interceptors_caching_interceptor_service__WEBPACK_IMPORTED_MODULE_20__["CachingInterceptor"], multi: true }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/bank-api.service.ts":
/*!*************************************!*\
  !*** ./src/app/bank-api.service.ts ***!
  \*************************************/
/*! exports provided: BankApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BankApiService", function() { return BankApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let BankApiService = class BankApiService {
    constructor(http) {
        this.http = http;
    }
    getBankData(city) {
        var url = 'https://vast-shore-74260.herokuapp.com/banks?city=' + city;
        return this.http.get(url);
    }
};
BankApiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
BankApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], BankApiService);



/***/ }),

/***/ "./src/app/bank-search/bank-search.component.css":
/*!*******************************************************!*\
  !*** ./src/app/bank-search/bank-search.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-cell {\n  padding: 4px 10px;\n}\n\n.mat-header-cell {\n  padding: 4px 10px;\n}\n\n.bank-detail-table {\n  margin: auto;\n  width: 95%;\n}\n\n.search-field {\n  margin: auto;\n  /* height: 50px; */\n  display: block;\n}\n\n.select-field {\n  display: block;\n}\n\n.pagination-control {\n  margin: 20px;\n}\n\n.container {\n  display:-webkit-box;\n  display:flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-flow: column;\n}\n\n.table-container {\n  overflow: scroll;\n  position: relative;\n  min-height: 300px;\n  -webkit-clip-path: circle(50px at 50% 50%);\n          clip-path: circle(50px at 50% 50%);\n}\n\n.no-clip {\n  -webkit-transition: all 300ms ease-in-out;\n  transition: all 300ms ease-in-out;\n  clip-path: circle(100%);\n  -webkit-clip-path: none;\n}\n\n.message {\n  text-align: center;\n  color: #aaa;\n  margin-top: 50px;\n  font-size: 16px;\n}\n\n.overlay {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  background-color: #faff06;\n  z-index: 10;  \n  pointer-events: none;\n}\n\n.options {\n  margin-top:20px;\n}\n\n.mat-paginator {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  margin-top: 0px\n}\n\n.mat-paginator .mat-paginator-container {\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.loading-spinner {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  margin: 20px;\n  min-height: 200px;\n}\n\n.favorite-header {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-flow: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFuay1zZWFyY2gvYmFuay1zZWFyY2guY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUJBQVk7RUFBWixZQUFZO0VBQ1osNEJBQWlCO0VBQWpCLDZCQUFpQjtVQUFqQixpQkFBaUI7QUFDbkI7O0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQiwwQ0FBa0M7VUFBbEMsa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UseUNBQWlDO0VBQWpDLGlDQUFpQztFQUNqQyx1QkFBdUI7RUFDdkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztFQUNYLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkI7QUFDRjs7QUFFQTtFQUNFLHdCQUF1QjtVQUF2Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDRCQUFpQjtFQUFqQiw2QkFBaUI7VUFBakIsaUJBQWlCO0VBQ2pCLHdCQUF1QjtVQUF2Qix1QkFBdUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9iYW5rLXNlYXJjaC9iYW5rLXNlYXJjaC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1jZWxsIHtcbiAgcGFkZGluZzogNHB4IDEwcHg7XG59XG5cbi5tYXQtaGVhZGVyLWNlbGwge1xuICBwYWRkaW5nOiA0cHggMTBweDtcbn1cblxuLmJhbmstZGV0YWlsLXRhYmxlIHtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogOTUlO1xufVxuXG4uc2VhcmNoLWZpZWxkIHtcbiAgbWFyZ2luOiBhdXRvO1xuICAvKiBoZWlnaHQ6IDUwcHg7ICovXG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uc2VsZWN0LWZpZWxkIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5wYWdpbmF0aW9uLWNvbnRyb2wge1xuICBtYXJnaW46IDIwcHg7XG59XG5cbi5jb250YWluZXIge1xuICBkaXNwbGF5OmZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xufVxuLnRhYmxlLWNvbnRhaW5lciB7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWluLWhlaWdodDogMzAwcHg7XG4gIGNsaXAtcGF0aDogY2lyY2xlKDUwcHggYXQgNTAlIDUwJSk7XG59XG5cbi5uby1jbGlwIHtcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2UtaW4tb3V0O1xuICBjbGlwLXBhdGg6IGNpcmNsZSgxMDAlKTtcbiAgLXdlYmtpdC1jbGlwLXBhdGg6IG5vbmU7XG59XG5cbi5tZXNzYWdlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2FhYTtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4ub3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmYwNjtcbiAgei1pbmRleDogMTA7ICBcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5vcHRpb25zIHtcbiAgbWFyZ2luLXRvcDoyMHB4O1xufVxuXG4ubWF0LXBhZ2luYXRvciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAwcHhcbn1cblxuLm1hdC1wYWdpbmF0b3IgLm1hdC1wYWdpbmF0b3ItY29udGFpbmVyIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5sb2FkaW5nLXNwaW5uZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAyMHB4O1xuICBtaW4taGVpZ2h0OiAyMDBweDtcbn1cblxuLmZhdm9yaXRlLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/bank-search/bank-search.component.ts":
/*!******************************************************!*\
  !*** ./src/app/bank-search/bank-search.component.ts ***!
  \******************************************************/
/*! exports provided: BankSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BankSearchComponent", function() { return BankSearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_bank_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/bank-api.service */ "./src/app/bank-api.service.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm2015/collections.js");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");







let BankSearchComponent = class BankSearchComponent {
    constructor(bankapi) {
        this.bankapi = bankapi;
        this.selectedCity = "DELHI";
        this.displayedColumns = ['ifsc', 'bank_id', 'branch', 'address', 'city', 'district', 'state', 'bank_name', 'select',];
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__["SelectionModel"](true, []);
        this.selectionCityMap = {};
    }
    ngOnInit() {
        this.showSpinner = true;
        if (!(this.selectedCity in this.selectionCityMap)) {
            this.selectionCityMap[this.selectedCity] = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__["SelectionModel"](true, []);
        }
        this.fetchData(this.selectedCity);
        const container = document.querySelector(".container");
        const tableContainer = document.querySelector(".table-container");
        const overlay = document.querySelector(".overlay");
        const webkitClipPath = { value: "circle(10% at 50% 50%)" };
        const tl = new gsap__WEBPACK_IMPORTED_MODULE_6__["TimelineMax"]();
        tl.from(tableContainer, 1, { opacity: 0, x: -1000, ease: gsap__WEBPACK_IMPORTED_MODULE_6__["Power4"].easeInOut }, "-=0.3")
            .to(webkitClipPath, .5, { value: 'circle(100% at 50% 50%)', onUpdate: function () { tableContainer.style.clipPath = webkitClipPath.value; } }, "-=.2")
            .to(overlay, .5, { opacity: 0 }, '-=0.5');
    }
    applyFilter(filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    // Table Helper Functions
    fetchData(city) {
        this.showSpinner = true;
        this.dataSource = null;
        this.bankapi.getBankData(city).subscribe((data) => {
            this.showSpinner = false;
            this.branchdata = data;
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.branchdata);
            this.dataSource.paginator = this.paginator;
            this.populateSelectedCityMap();
        });
    }
    populateSelectedCityMap() {
        var storageSelectionMap = JSON.parse(localStorage.getItem("selection-map"));
        for (let city in storageSelectionMap) {
            if (storageSelectionMap.hasOwnProperty(city)) {
                if (!(city in this.selectionCityMap)) {
                    this.selectionCityMap[city] = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__["SelectionModel"](true, []);
                }
                for (let key in storageSelectionMap[city]) {
                    this.selectionCityMap[city].select(storageSelectionMap[city][key]);
                }
            }
        }
    }
    cityChanged(city) {
        if (!(this.selectedCity in this.selectionCityMap)) {
            this.selectionCityMap[this.selectedCity] = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__["SelectionModel"](true, []);
        }
        this.fetchData(city);
        const tableContainer = document.querySelector('.table-container');
        const webkitClipPath = { value: "circle(" + tableContainer.getBoundingClientRect().height / 2 + " at 50% 50%)" };
        const overlay = document.querySelector(".overlay");
        var tl = new gsap__WEBPACK_IMPORTED_MODULE_6__["TimelineMax"]();
        tl.to(webkitClipPath, .3, { value: "circle(10px at 50% 50%)", onUpdate: function () { tableContainer.style.clipPath = webkitClipPath.value; } })
            .to(overlay, .5, { opacity: 5 }, '-=1')
            .to(webkitClipPath, 0.5, { value: "circle(100% at 50% 10%)", onUpdate: function () { tableContainer.style.clipPath = webkitClipPath.value; } })
            .to(overlay, .5, { opacity: 0 }, '-=0.5');
    }
    //Select Favorite Helper Fucntions
    isAllSelected() {
        const numSelected = this.selectionCityMap[this.selectedCity].selected.length;
        const numRows = this.dataSource.data.length;
        return numSelected === numRows;
    }
    masterToggle() {
        this.isAllSelected() ?
            this.selectionCityMap[this.selectedCity].clear() :
            this.dataSource.data.forEach(row => this.selectionCityMap[this.selectedCity].select(JSON.stringify(row)));
        this.saveSelectionData();
    }
    saveSelectionData() {
        let storageObj = {};
        for (let key in this.selectionCityMap) {
            if (this.selectionCityMap.hasOwnProperty(key)) {
                storageObj[key] = this.selectionCityMap[key].selected;
            }
        }
        localStorage.setItem("selection-map", JSON.stringify(storageObj));
    }
    checkBoxClicked(row) {
        if (row) {
            this.selectionCityMap[this.selectedCity].toggle(JSON.stringify(row));
            this.saveSelectionData();
        }
    }
    isCheckBoxSelected(row) {
        return this.selectionCityMap[this.selectedCity].isSelected(JSON.stringify(row));
    }
};
BankSearchComponent.ctorParameters = () => [
    { type: src_app_bank_api_service__WEBPACK_IMPORTED_MODULE_2__["BankApiService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], { static: true })
], BankSearchComponent.prototype, "paginator", void 0);
BankSearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'bank-search',
        template: __webpack_require__(/*! raw-loader!./bank-search.component.html */ "./node_modules/raw-loader/index.js!./src/app/bank-search/bank-search.component.html"),
        styles: [__webpack_require__(/*! ./bank-search.component.css */ "./src/app/bank-search/bank-search.component.css")]
    })
], BankSearchComponent);



/***/ }),

/***/ "./src/app/favorite-banks/favorite-banks.component.css":
/*!*************************************************************!*\
  !*** ./src/app/favorite-banks/favorite-banks.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-cell {\n  padding: 4px 10px;\n}\n\n.mat-header-cell {\n  padding: 4px 10px;\n}\n\n.bank-detail-table {\n  margin: auto;\n  width: 95%;\n}\n\n.search-field {\n  margin: auto;\n  /* height: 50px; */\n  display: block;\n}\n\n.select-field {\n  display: block;\n}\n\n.pagination-control {\n  margin: 20px;\n}\n\n.container {\n  display:-webkit-box;\n  display:flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-flow: column;\n}\n\n.table-container {\n  overflow: scroll;\n  position: relative;\n  min-height: 300px;\n  -webkit-clip-path: circle(50px at 50% 50%);\n          clip-path: circle(50px at 50% 50%);\n}\n\n.no-clip {\n  -webkit-transition: all 300ms ease-in-out;\n  transition: all 300ms ease-in-out;\n  clip-path: circle(100%);\n  -webkit-clip-path: none;\n}\n\n.message {\n  text-align: center;\n  color: #aaa;\n  margin-top: 50px;\n  font-size: 16px;\n}\n\n.overlay {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  background-color: #faff06;\n  z-index: 10;  \n  pointer-events: none;\n}\n\n.options {\n  margin-top:20px;\n}\n\n.mat-paginator {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  margin-top: 0px\n}\n\n.mat-paginator .mat-paginator-container {\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.loading-spinner {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  margin: 20px;\n  min-height: 200px;\n}\n\n.favorite-header {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-flow: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmF2b3JpdGUtYmFua3MvZmF2b3JpdGUtYmFua3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUJBQVk7RUFBWixZQUFZO0VBQ1osNEJBQWlCO0VBQWpCLDZCQUFpQjtVQUFqQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQiwwQ0FBa0M7VUFBbEMsa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UseUNBQWlDO0VBQWpDLGlDQUFpQztFQUNqQyx1QkFBdUI7RUFDdkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztFQUNYLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkI7QUFDRjs7QUFFQTtFQUNFLHdCQUF1QjtVQUF2Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDRCQUFpQjtFQUFqQiw2QkFBaUI7VUFBakIsaUJBQWlCO0VBQ2pCLHdCQUF1QjtVQUF2Qix1QkFBdUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9mYXZvcml0ZS1iYW5rcy9mYXZvcml0ZS1iYW5rcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1jZWxsIHtcbiAgcGFkZGluZzogNHB4IDEwcHg7XG59XG5cbi5tYXQtaGVhZGVyLWNlbGwge1xuICBwYWRkaW5nOiA0cHggMTBweDtcbn1cblxuLmJhbmstZGV0YWlsLXRhYmxlIHtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogOTUlO1xufVxuXG4uc2VhcmNoLWZpZWxkIHtcbiAgbWFyZ2luOiBhdXRvO1xuICAvKiBoZWlnaHQ6IDUwcHg7ICovXG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uc2VsZWN0LWZpZWxkIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5wYWdpbmF0aW9uLWNvbnRyb2wge1xuICBtYXJnaW46IDIwcHg7XG59XG5cbi5jb250YWluZXIge1xuICBkaXNwbGF5OmZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xufVxuXG4udGFibGUtY29udGFpbmVyIHtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtaW4taGVpZ2h0OiAzMDBweDtcbiAgY2xpcC1wYXRoOiBjaXJjbGUoNTBweCBhdCA1MCUgNTAlKTtcbn1cblxuLm5vLWNsaXAge1xuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZS1pbi1vdXQ7XG4gIGNsaXAtcGF0aDogY2lyY2xlKDEwMCUpO1xuICAtd2Via2l0LWNsaXAtcGF0aDogbm9uZTtcbn1cblxuLm1lc3NhZ2Uge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjYWFhO1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5vdmVybGF5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmZjA2O1xuICB6LWluZGV4OiAxMDsgIFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLm9wdGlvbnMge1xuICBtYXJnaW4tdG9wOjIwcHg7XG59XG5cbi5tYXQtcGFnaW5hdG9yIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDBweFxufVxuXG4ubWF0LXBhZ2luYXRvciAubWF0LXBhZ2luYXRvci1jb250YWluZXIge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmxvYWRpbmctc3Bpbm5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDIwcHg7XG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xufVxuXG4uZmF2b3JpdGUtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/favorite-banks/favorite-banks.component.ts":
/*!************************************************************!*\
  !*** ./src/app/favorite-banks/favorite-banks.component.ts ***!
  \************************************************************/
/*! exports provided: FavoriteBanksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoriteBanksComponent", function() { return FavoriteBanksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");





let FavoriteBanksComponent = class FavoriteBanksComponent {
    constructor() {
        this.displayedColumns = ['ifsc', 'bank_id', 'branch', 'address', 'city', 'district', 'state', 'bank_name',];
    }
    applyFilter(filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        const tableContainer = document.querySelector('.table-container');
        const webkitClipPath = { value: "circle(" + tableContainer.getBoundingClientRect().height / 2 + " at 50% 50%)" };
        const overlay = document.querySelector(".overlay");
    }
    ngOnInit() {
        this.bankData = this.getFavoritesFromStorage();
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.bankData);
        this.dataSource.paginator = this.paginator;
        const container = document.querySelector(".container");
        const tableContainer = document.querySelector(".table-container");
        const overlay = document.querySelector(".overlay");
        var webkitClipPath = { value: "circle(10% at 50% 50%)" };
        const tl = new gsap__WEBPACK_IMPORTED_MODULE_4__["TimelineMax"]();
        tl.from(tableContainer, 1, { opacity: 0, x: 1000, ease: gsap__WEBPACK_IMPORTED_MODULE_4__["Power4"].easeInOut }, "-=0.3")
            .to(webkitClipPath, .5, { value: 'circle(100% at 50% 50%)', onUpdate: function () { tableContainer.style.clipPath = webkitClipPath.value; } }, "-=0.2")
            .to(overlay, .5, { opacity: 0 }, '-=0.5');
    }
    getFavoritesFromStorage() {
        let list = [];
        var favorites = JSON.parse(localStorage.getItem("selection-map"));
        for (let key in favorites) {
            if (favorites.hasOwnProperty(key)) {
                favorites[key].forEach(element => {
                    list.push(JSON.parse(element));
                });
            }
        }
        return list;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true })
], FavoriteBanksComponent.prototype, "paginator", void 0);
FavoriteBanksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-favorite-banks',
        template: __webpack_require__(/*! raw-loader!./favorite-banks.component.html */ "./node_modules/raw-loader/index.js!./src/app/favorite-banks/favorite-banks.component.html"),
        styles: [__webpack_require__(/*! ./favorite-banks.component.css */ "./src/app/favorite-banks/favorite-banks.component.css")]
    })
], FavoriteBanksComponent);



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n  text-align: center;\n  margin-top: 100px;\n  color: #aaa;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgY29sb3I6ICNhYWE7XG59Il19 */"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html"),
        styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {box-sizing: border-box;}\n\nbody { \n  margin: 0;\n}\n\n.header {\n  overflow: hidden;\n  background-color: #fbff03;;\n  font-size: 40px;\n  font-weight: bold;\n  color: #222;\n  font-family: 'Monoton';\n  font-weight: lighter;\n  /* display: flex; */\n  /* justify-content: flex-end; */\n  /* flex-flow: row wrap; */\n\n  position: fixed;\n  width: 100%;\n  z-index: 100;\n  top: 0;\n\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-column-gap: 5px;\n  justify-items: center;\n}\n\n.pull-right {\n  margin-left: auto;\n}\n\n.nav-button {\n  font-size: 18px;\n  font-weight: lighter;\n  height: 100%;\n  border-radius: 0;\n  border: 0;\n  padding: 0 30px;\n}\n\n.header .logo {\n  /* color: #222222; */\n  padding: 20px;\n  margin: auto;\n  grid-column-start: 2;\n}\n\n.show-more-button {\n  display: none;\n}\n\n@media only screen and (max-width: 855px) {\n  .header .logo {\n    display: block;\n    grid-column-start: 1;\n    padding: 10px;\n    /* height: 50px; */\n    width: 100%;\n    text-align: center;\n  }\n  .header {\n    -webkit-box-pack: center;\n            justify-content: center;\n    grid-template-columns: 1fr;    \n  }\n  .pull-right {\n    margin: auto;\n    width: 100%;\n    display: -webkit-box;\n    display: flex;\n    height: 40px;\n    -webkit-transition: all 200ms ease-in-out;\n    transition: all 200ms ease-in-out;  \n  }\n  .pull-right button{\n    border-right: 1px solid white;\n    -webkit-box-flex: 1;\n            flex: 1 1 50%;\n  }\n  .pull-right button:last-of-type{\n    border-right: 0;\n  }\n\n  .hide-options {\n    height: 0px;\n  }\n  \n  .show-more-button {\n    display: inline-block;\n    position: absolute;\n    top: calc(50% - 22px);\n    right: 10px;\n    -webkit-transition: all 200ms ease-in-out;\n    transition: all 200ms ease-in-out;\n    font-size: 22px;\n\n  }\n\n  .rotate-180 {\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg);\n  }\n}\n\n@media only screen and (max-width: 374px) {\n  .header .logo {\n    font-size: 28px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLEdBQUcsc0JBQXNCLENBQUM7O0FBRTFCO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQiwrQkFBK0I7RUFDL0IseUJBQXlCOztFQUV6QixlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7RUFDWixNQUFNOztFQUVOLGFBQWE7RUFDYixrQ0FBa0M7RUFDbEMsb0JBQW9CO0VBQ3BCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2IsWUFBWTtFQUNaLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFO0lBQ0UsY0FBYztJQUNkLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLHdCQUF1QjtZQUF2Qix1QkFBdUI7SUFDdkIsMEJBQTBCO0VBQzVCO0VBQ0E7SUFDRSxZQUFZO0lBQ1osV0FBVztJQUNYLG9CQUFhO0lBQWIsYUFBYTtJQUNiLFlBQVk7SUFDWix5Q0FBaUM7SUFBakMsaUNBQWlDO0VBQ25DO0VBQ0E7SUFDRSw2QkFBNkI7SUFDN0IsbUJBQWE7WUFBYixhQUFhO0VBQ2Y7RUFDQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gseUNBQWlDO0lBQWpDLGlDQUFpQztJQUNqQyxlQUFlOztFQUVqQjs7RUFFQTtJQUNFLGlDQUF5QjtZQUF6Qix5QkFBeUI7RUFDM0I7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7Ym94LXNpemluZzogYm9yZGVyLWJveDt9XG5cbmJvZHkgeyBcbiAgbWFyZ2luOiAwO1xufVxuXG4uaGVhZGVyIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZiZmYwMzs7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMjIyO1xuICBmb250LWZhbWlseTogJ01vbm90b24nO1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgLyogZGlzcGxheTogZmxleDsgKi9cbiAgLyoganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDsgKi9cbiAgLyogZmxleC1mbG93OiByb3cgd3JhcDsgKi9cblxuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiAxMDA7XG4gIHRvcDogMDtcblxuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xuICBncmlkLWNvbHVtbi1nYXA6IDVweDtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xufVxuXG4ucHVsbC1yaWdodCB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuXG4ubmF2LWJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYm9yZGVyOiAwO1xuICBwYWRkaW5nOiAwIDMwcHg7XG59XG5cbi5oZWFkZXIgLmxvZ28ge1xuICAvKiBjb2xvcjogIzIyMjIyMjsgKi9cbiAgcGFkZGluZzogMjBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBncmlkLWNvbHVtbi1zdGFydDogMjtcbn1cblxuLnNob3ctbW9yZS1idXR0b24ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg1NXB4KSB7XG4gIC5oZWFkZXIgLmxvZ28ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgLyogaGVpZ2h0OiA1MHB4OyAqL1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAuaGVhZGVyIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjsgICAgXG4gIH1cbiAgLnB1bGwtcmlnaHQge1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZS1pbi1vdXQ7ICBcbiAgfVxuICAucHVsbC1yaWdodCBidXR0b257XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgd2hpdGU7XG4gICAgZmxleDogMSAxIDUwJTtcbiAgfVxuICAucHVsbC1yaWdodCBidXR0b246bGFzdC1vZi10eXBle1xuICAgIGJvcmRlci1yaWdodDogMDtcbiAgfVxuXG4gIC5oaWRlLW9wdGlvbnMge1xuICAgIGhlaWdodDogMHB4O1xuICB9XG4gIFxuICAuc2hvdy1tb3JlLWJ1dHRvbiB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IGNhbGMoNTAlIC0gMjJweCk7XG4gICAgcmlnaHQ6IDEwcHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2UtaW4tb3V0O1xuICAgIGZvbnQtc2l6ZTogMjJweDtcblxuICB9XG5cbiAgLnJvdGF0ZS0xODAge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNzRweCkge1xuICAuaGVhZGVyIC5sb2dvIHtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");



let HeaderComponent = class HeaderComponent {
    constructor() {
        this.isHidden = true;
    }
    ngOnInit() {
        const header = document.querySelector(".header");
        const logo = document.querySelector(".logo");
        const navButtons = document.querySelectorAll(".nav-button");
        const shorMoreButton = document.querySelector(".mat-icon");
        let tl = new gsap__WEBPACK_IMPORTED_MODULE_2__["TimelineMax"]();
        tl.from(header, 1, { y: "-200" })
            .from(logo, 0.3, { y: -200, opacity: 0 })
            .staggerFrom(navButtons, 0.3, { opacity: 0 }, 0.1)
            .to(shorMoreButton, 0.6, { rotation: 360 }, "-=0.4");
    }
    hideOptions(event) {
        document.querySelector(".show-more-button").classList.toggle("rotate-180");
        this.isHidden = !this.isHidden;
    }
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html"),
        styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/http-interceptors/caching-interceptor.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/http-interceptors/caching-interceptor.service.ts ***!
  \******************************************************************/
/*! exports provided: CachingInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CachingInterceptor", function() { return CachingInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _request_cache_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./request-cache.service */ "./src/app/http-interceptors/request-cache.service.ts");






let CachingInterceptor = class CachingInterceptor {
    constructor(cache) {
        this.cache = cache;
    }
    intercept(req, next) {
        const cachedResponse = this.cache.get(req);
        return cachedResponse ? Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(cachedResponse) : this.sendRequest(req, next, this.cache);
    }
    sendRequest(req, next, cache) {
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(event => {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]) {
                cache.put(req, event);
            }
        }));
    }
};
CachingInterceptor.ctorParameters = () => [
    { type: _request_cache_service__WEBPACK_IMPORTED_MODULE_5__["RequestCache"] }
];
CachingInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], CachingInterceptor);



/***/ }),

/***/ "./src/app/http-interceptors/request-cache.service.ts":
/*!************************************************************!*\
  !*** ./src/app/http-interceptors/request-cache.service.ts ***!
  \************************************************************/
/*! exports provided: RequestCache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestCache", function() { return RequestCache; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


const maxAge = 300000;
let RequestCache = class RequestCache {
    constructor() {
        this.cache = new Map();
    }
    get(req) {
        const url = req.urlWithParams;
        const cached = this.cache.get(url);
        if (!cached) {
            return undefined;
        }
        const isExpired = cached.lastRead < (Date.now() - maxAge);
        const expired = isExpired ? 'expired ' : '';
        return cached.response;
    }
    put(req, response) {
        const url = req.url;
        const entry = { url, response, lastRead: Date.now() };
        this.cache.set(url, entry);
        const expired = Date.now() - maxAge;
        this.cache.forEach(expiredEntry => {
            if (expiredEntry.lastRead < expired) {
                this.cache.delete(expiredEntry.url);
            }
        });
    }
};
RequestCache = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], RequestCache);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/rushikeshkoochana/Desktop/Banking411/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map