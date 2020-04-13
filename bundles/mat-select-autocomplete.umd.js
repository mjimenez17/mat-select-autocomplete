(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@angular/common'), require('@angular/material/icon'), require('@angular/material/select'), require('@angular/material/form-field'), require('@angular/material/button'), require('@angular/material/checkbox')) :
    typeof define === 'function' && define.amd ? define('mat-select-autocomplete', ['exports', '@angular/core', '@angular/forms', '@angular/common', '@angular/material/icon', '@angular/material/select', '@angular/material/form-field', '@angular/material/button', '@angular/material/checkbox'], factory) :
    (global = global || self, factory(global['mat-select-autocomplete'] = {}, global.ng.core, global.ng.forms, global.ng.common, global.ng.material.icon, global.ng.material.select, global.ng.material.formField, global.ng.material.button, global.ng.material.checkbox));
}(this, (function (exports, core, forms, common, icon, select, formField, button, checkbox) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    var SelectAutocompleteService = /** @class */ (function () {
        function SelectAutocompleteService() {
        }
        SelectAutocompleteService.ɵprov = core["ɵɵdefineInjectable"]({ factory: function SelectAutocompleteService_Factory() { return new SelectAutocompleteService(); }, token: SelectAutocompleteService, providedIn: "root" });
        SelectAutocompleteService = __decorate([
            core.Injectable({
                providedIn: 'root'
            }),
            __metadata("design:paramtypes", [])
        ], SelectAutocompleteService);
        return SelectAutocompleteService;
    }());

    var SelectAutocompleteComponent = /** @class */ (function () {
        function SelectAutocompleteComponent() {
            this.selectPlaceholder = 'search...';
            this.disabled = false;
            this.display = 'display';
            this.value = 'value';
            this.formControl = new forms.FormControl();
            this.errorMsg = 'Field is required';
            this.showErrorMsg = false;
            this.multiple = true;
            // New Options
            this.labelCount = 1;
            this.appearance = 'standard';
            this.disableOptionCentering = false;
            this.selectionChange = new core.EventEmitter();
            this.filteredOptions = [];
            this.selectedValue = [];
            this.selectAllChecked = false;
            this.displayString = '';
        }
        SelectAutocompleteComponent.prototype.ngOnChanges = function () {
            if (this.disabled) {
                this.formControl.disable();
            }
            else {
                this.formControl.enable();
            }
            this.filteredOptions = this.options;
            if (this.selectedOptions) {
                this.selectedValue = this.selectedOptions;
            }
            else if (this.formControl.value) {
                this.selectedValue = this.formControl.value;
            }
        };
        SelectAutocompleteComponent.prototype.ngDoCheck = function () {
            if (!this.selectedValue.length) {
                this.selectionChange.emit(this.selectedValue);
            }
        };
        SelectAutocompleteComponent.prototype.toggleDropdown = function () {
            this.selectElem.toggle();
        };
        SelectAutocompleteComponent.prototype.toggleSelectAll = function (val) {
            var _this = this;
            if (val.checked) {
                this.filteredOptions.forEach(function (option) {
                    if (!_this.selectedValue.includes(option[_this.value])) {
                        _this.selectedValue = _this.selectedValue.concat([option[_this.value]]);
                    }
                });
            }
            else {
                var filteredValues_1 = this.getFilteredOptionsValues();
                this.selectedValue = this.selectedValue.filter(function (item) { return !filteredValues_1.includes(item); });
            }
            this.selectionChange.emit(this.selectedValue);
        };
        SelectAutocompleteComponent.prototype.filterItem = function (value) {
            var _this = this;
            this.filteredOptions = this.options.filter(function (item) { return item[_this.display].toLowerCase().indexOf(value.toLowerCase()) > -1; });
            this.selectAllChecked = true;
            this.filteredOptions.forEach(function (item) {
                if (!_this.selectedValue.includes(item[_this.value])) {
                    _this.selectAllChecked = false;
                }
            });
            if (!this.filteredOptions.length) {
                this.selectAllChecked = false;
            }
        };
        SelectAutocompleteComponent.prototype.hideOption = function (option) {
            return !(this.filteredOptions.indexOf(option) > -1);
        };
        // Returns plain strings array of filtered values
        SelectAutocompleteComponent.prototype.getFilteredOptionsValues = function () {
            var filteredValues = [];
            this.filteredOptions.forEach(function (option) {
                filteredValues.push(option.value);
            });
            return filteredValues;
        };
        SelectAutocompleteComponent.prototype.onDisplayString = function () {
            var _this = this;
            this.displayString = '';
            // console.log('Valor seleccionado: ' + this.selectedValue);
            if (this.selectedValue) {
                // console.log('Entra aquí.');
                var displayOption = [];
                if (this.multiple) {
                    var _loop_1 = function (i) {
                        displayOption[i] = this_1.options.filter(function (option) { return option[_this.value] === _this.selectedValue[i]; })[0];
                    };
                    var this_1 = this;
                    // console.log('Multiple');
                    // Multi select display
                    for (var i = 0; i < this.labelCount; i++) {
                        _loop_1(i);
                    }
                    if (displayOption.length) {
                        for (var i = 0; i < displayOption.length; i++) {
                            if (displayOption[i] && displayOption[i][this.display]) {
                                this.displayString += displayOption[i][this.display] + ',';
                            }
                        }
                        this.displayString = this.displayString.slice(0, -1);
                        if (this.selectedValue.length > 1 &&
                            this.selectedValue.length > this.labelCount) {
                            // Se muestran unos pocos elementos de los seleccionados y se mencionan
                            // que existen n más.
                            this.displayString =
                                ((this.displayString.length > 45) ?
                                    this.displayString.substr(0, 45 - 1) + '...' :
                                    this.displayString) + (" (y " + (this.selectedValue.length - this.labelCount) + " m\u00E1s)");
                        }
                    }
                }
                else {
                    // console.log('Single');
                    // Single select display
                    displayOption = this.options.filter(function (option) { return option[_this.value] === _this.selectedValue; });
                    if (displayOption.length) {
                        this.displayString = displayOption[0][this.display];
                    }
                    // console.log(this.selectedValue);
                }
            }
            return this.displayString;
        };
        SelectAutocompleteComponent.prototype.onSelectionChange = function (val) {
            var filteredValues = this.getFilteredOptionsValues();
            var count = 0;
            if (this.multiple) {
                this.selectedValue.filter(function (item) {
                    if (filteredValues.includes(item)) {
                        count++;
                    }
                });
                this.selectAllChecked = count === this.filteredOptions.length;
            }
            this.selectedValue = val.value;
            this.selectionChange.emit(this.selectedValue);
        };
        SelectAutocompleteComponent.prototype.trackByFn = function (index, item) {
            return item.value;
        };
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], SelectAutocompleteComponent.prototype, "selectPlaceholder", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], SelectAutocompleteComponent.prototype, "placeholder", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], SelectAutocompleteComponent.prototype, "options", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], SelectAutocompleteComponent.prototype, "disabled", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], SelectAutocompleteComponent.prototype, "display", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], SelectAutocompleteComponent.prototype, "value", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", forms.FormControl)
        ], SelectAutocompleteComponent.prototype, "formControl", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], SelectAutocompleteComponent.prototype, "errorMsg", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], SelectAutocompleteComponent.prototype, "showErrorMsg", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], SelectAutocompleteComponent.prototype, "selectedOptions", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], SelectAutocompleteComponent.prototype, "multiple", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], SelectAutocompleteComponent.prototype, "labelCount", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], SelectAutocompleteComponent.prototype, "appearance", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], SelectAutocompleteComponent.prototype, "disableOptionCentering", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", core.EventEmitter)
        ], SelectAutocompleteComponent.prototype, "selectionChange", void 0);
        __decorate([
            core.ViewChild('selectElem', { static: true }),
            __metadata("design:type", Object)
        ], SelectAutocompleteComponent.prototype, "selectElem", void 0);
        SelectAutocompleteComponent = __decorate([
            core.Component({
                selector: 'mat-select-autocomplete',
                template: "\n    <mat-form-field appearance=\"{{ appearance }}\">\n      <mat-select\n        #selectElem\n        [placeholder]=\"placeholder\"\n        [formControl]=\"formControl\"\n        [multiple]=\"multiple\"\n        [(ngModel)]=\"selectedValue\"\n        (selectionChange)=\"onSelectionChange($event)\"\n        disableOptionCentering=\"disableOptionCentering\"\n      >\n        <div class=\"box-search\">\n          <mat-checkbox\n            *ngIf=\"multiple\"\n            color=\"primary\"\n            class=\"box-select-all\"\n            [(ngModel)]=\"selectAllChecked\"\n            (change)=\"toggleSelectAll($event)\"\n          ></mat-checkbox>\n          <input\n            #searchInput\n            type=\"text\"\n            [ngClass]=\"{ 'pl-1': !multiple }\"\n            (input)=\"filterItem(searchInput.value)\"\n            [placeholder]=\"selectPlaceholder\"\n          />\n          <div\n            class=\"box-search-icon\"\n            (click)=\"filterItem(''); searchInput.value = ''\"\n          >\n            <button mat-icon-button class=\"search-button\">\n              <mat-icon class=\"mat-24\" aria-label=\"Search icon\">clear</mat-icon>\n            </button>\n          </div>\n        </div>\n        <mat-select-trigger>\n          {{ onDisplayString() }}\n        </mat-select-trigger>\n        <mat-option\n          *ngFor=\"let option of options; trackBy: trackByFn\"\n          [disabled]=\"option.disabled\"\n          [value]=\"option[value]\"\n          [style.display]=\"hideOption(option) ? 'none' : 'flex'\"\n          >{{ option[display] }}\n        </mat-option>\n      </mat-select>\n      <mat-hint style=\"color:red\" *ngIf=\"showErrorMsg\">{{ errorMsg }}</mat-hint>\n    </mat-form-field>\n  ",
                styles: ["\n      .box-search {\n        margin: 8px;\n        border-radius: 2px;\n        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16),\n          0 0 0 1px rgba(0, 0, 0, 0.08);\n        transition: box-shadow 200ms cubic-bezier(0.4, 0, 0.2, 1);\n        display: flex;\n      }\n      .box-search input {\n        flex: 1;\n        border: none;\n        outline: none;\n      }\n      .box-select-all {\n        width: 36px;\n        line-height: 33px;\n        color: #808080;\n        text-align: center;\n      }\n      .search-button {\n        width: 36px;\n        height: 36px;\n        line-height: 33px;\n        color: #808080;\n      }\n      .pl-1 {\n        padding-left: 1rem;\n      }\n    "]
            }),
            __metadata("design:paramtypes", [])
        ], SelectAutocompleteComponent);
        return SelectAutocompleteComponent;
    }());

    var SelectAutocompleteModule = /** @class */ (function () {
        function SelectAutocompleteModule() {
        }
        SelectAutocompleteModule = __decorate([
            core.NgModule({
                imports: [
                    forms.FormsModule,
                    common.CommonModule,
                    icon.MatIconModule,
                    button.MatButtonModule,
                    select.MatSelectModule,
                    checkbox.MatCheckboxModule,
                    formField.MatFormFieldModule,
                    forms.ReactiveFormsModule,
                ],
                declarations: [SelectAutocompleteComponent],
                exports: [SelectAutocompleteComponent]
            })
        ], SelectAutocompleteModule);
        return SelectAutocompleteModule;
    }());

    exports.SelectAutocompleteComponent = SelectAutocompleteComponent;
    exports.SelectAutocompleteModule = SelectAutocompleteModule;
    exports.SelectAutocompleteService = SelectAutocompleteService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=mat-select-autocomplete.umd.js.map
