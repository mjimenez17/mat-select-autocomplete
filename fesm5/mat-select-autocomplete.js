import { __decorate, __metadata } from 'tslib';
import { ɵɵdefineInjectable, Injectable, EventEmitter, Input, Output, ViewChild, Component, NgModule } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';

var SelectAutocompleteService = /** @class */ (function () {
    function SelectAutocompleteService() {
    }
    SelectAutocompleteService.ɵprov = ɵɵdefineInjectable({ factory: function SelectAutocompleteService_Factory() { return new SelectAutocompleteService(); }, token: SelectAutocompleteService, providedIn: "root" });
    SelectAutocompleteService = __decorate([
        Injectable({
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
        this.formControl = new FormControl();
        this.errorMsg = 'Field is required';
        this.showErrorMsg = false;
        this.multiple = true;
        // New Options
        this.labelCount = 1;
        this.appearance = 'standard';
        this.selectionChange = new EventEmitter();
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
        Input(),
        __metadata("design:type", Object)
    ], SelectAutocompleteComponent.prototype, "selectPlaceholder", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], SelectAutocompleteComponent.prototype, "placeholder", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], SelectAutocompleteComponent.prototype, "options", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], SelectAutocompleteComponent.prototype, "disabled", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], SelectAutocompleteComponent.prototype, "display", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], SelectAutocompleteComponent.prototype, "value", void 0);
    __decorate([
        Input(),
        __metadata("design:type", FormControl)
    ], SelectAutocompleteComponent.prototype, "formControl", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], SelectAutocompleteComponent.prototype, "errorMsg", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], SelectAutocompleteComponent.prototype, "showErrorMsg", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], SelectAutocompleteComponent.prototype, "selectedOptions", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], SelectAutocompleteComponent.prototype, "multiple", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], SelectAutocompleteComponent.prototype, "labelCount", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], SelectAutocompleteComponent.prototype, "appearance", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], SelectAutocompleteComponent.prototype, "selectionChange", void 0);
    __decorate([
        ViewChild('selectElem', { static: true }),
        __metadata("design:type", Object)
    ], SelectAutocompleteComponent.prototype, "selectElem", void 0);
    SelectAutocompleteComponent = __decorate([
        Component({
            selector: 'mat-select-autocomplete',
            template: "\n    <mat-form-field appearance=\"{{ appearance }}\">\n      <mat-select\n        #selectElem\n        [placeholder]=\"placeholder\"\n        [formControl]=\"formControl\"\n        [multiple]=\"multiple\"\n        [(ngModel)]=\"selectedValue\"\n        (selectionChange)=\"onSelectionChange($event)\"\n      >\n        <div class=\"box-search\">\n          <mat-checkbox\n            *ngIf=\"multiple\"\n            color=\"primary\"\n            class=\"box-select-all\"\n            [(ngModel)]=\"selectAllChecked\"\n            (change)=\"toggleSelectAll($event)\"\n          ></mat-checkbox>\n          <input\n            #searchInput\n            type=\"text\"\n            [ngClass]=\"{ 'pl-1': !multiple }\"\n            (input)=\"filterItem(searchInput.value)\"\n            [placeholder]=\"selectPlaceholder\"\n          />\n          <div\n            class=\"box-search-icon\"\n            (click)=\"filterItem(''); searchInput.value = ''\"\n          >\n            <button mat-icon-button class=\"search-button\">\n              <mat-icon class=\"mat-24\" aria-label=\"Search icon\">clear</mat-icon>\n            </button>\n          </div>\n        </div>\n        <mat-select-trigger>\n          {{ onDisplayString() }}\n        </mat-select-trigger>\n        <mat-option\n          *ngFor=\"let option of options; trackBy: trackByFn\"\n          [disabled]=\"option.disabled\"\n          [value]=\"option[value]\"\n          [style.display]=\"hideOption(option) ? 'none' : 'flex'\"\n          >{{ option[display] }}\n        </mat-option>\n      </mat-select>\n      <mat-hint style=\"color:red\" *ngIf=\"showErrorMsg\">{{ errorMsg }}</mat-hint>\n    </mat-form-field>\n  ",
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
        NgModule({
            imports: [
                FormsModule,
                CommonModule,
                MatIconModule,
                MatButtonModule,
                MatSelectModule,
                MatCheckboxModule,
                MatFormFieldModule,
                ReactiveFormsModule,
            ],
            declarations: [SelectAutocompleteComponent],
            exports: [SelectAutocompleteComponent]
        })
    ], SelectAutocompleteModule);
    return SelectAutocompleteModule;
}());

/*
 * Public API Surface of select-autocomplete
 */

/**
 * Generated bundle index. Do not edit.
 */

export { SelectAutocompleteComponent, SelectAutocompleteModule, SelectAutocompleteService };
//# sourceMappingURL=mat-select-autocomplete.js.map
