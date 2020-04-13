import { __decorate, __metadata } from "tslib";
import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
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
        this.disableOptionCentering = false;
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
        Input(),
        __metadata("design:type", Object)
    ], SelectAutocompleteComponent.prototype, "disableOptionCentering", void 0);
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
            template: "\n    <mat-form-field appearance=\"{{ appearance }}\">\n      <mat-select\n        #selectElem\n        [placeholder]=\"placeholder\"\n        [formControl]=\"formControl\"\n        [multiple]=\"multiple\"\n        [(ngModel)]=\"selectedValue\"\n        (selectionChange)=\"onSelectionChange($event)\"\n        disableOptionCentering=\"disableOptionCentering\"\n      >\n        <div class=\"box-search\">\n          <mat-checkbox\n            *ngIf=\"multiple\"\n            color=\"primary\"\n            class=\"box-select-all\"\n            [(ngModel)]=\"selectAllChecked\"\n            (change)=\"toggleSelectAll($event)\"\n          ></mat-checkbox>\n          <input\n            #searchInput\n            type=\"text\"\n            [ngClass]=\"{ 'pl-1': !multiple }\"\n            (input)=\"filterItem(searchInput.value)\"\n            [placeholder]=\"selectPlaceholder\"\n          />\n          <div\n            class=\"box-search-icon\"\n            (click)=\"filterItem(''); searchInput.value = ''\"\n          >\n            <button mat-icon-button class=\"search-button\">\n              <mat-icon class=\"mat-24\" aria-label=\"Search icon\">clear</mat-icon>\n            </button>\n          </div>\n        </div>\n        <mat-select-trigger>\n          {{ onDisplayString() }}\n        </mat-select-trigger>\n        <mat-option\n          *ngFor=\"let option of options; trackBy: trackByFn\"\n          [disabled]=\"option.disabled\"\n          [value]=\"option[value]\"\n          [style.display]=\"hideOption(option) ? 'none' : 'flex'\"\n          >{{ option[display] }}\n        </mat-option>\n      </mat-select>\n      <mat-hint style=\"color:red\" *ngIf=\"showErrorMsg\">{{ errorMsg }}</mat-hint>\n    </mat-form-field>\n  ",
            styles: ["\n      .box-search {\n        margin: 8px;\n        border-radius: 2px;\n        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16),\n          0 0 0 1px rgba(0, 0, 0, 0.08);\n        transition: box-shadow 200ms cubic-bezier(0.4, 0, 0.2, 1);\n        display: flex;\n      }\n      .box-search input {\n        flex: 1;\n        border: none;\n        outline: none;\n      }\n      .box-select-all {\n        width: 36px;\n        line-height: 33px;\n        color: #808080;\n        text-align: center;\n      }\n      .search-button {\n        width: 36px;\n        height: 36px;\n        line-height: 33px;\n        color: #808080;\n      }\n      .pl-1 {\n        padding-left: 1rem;\n      }\n    "]
        }),
        __metadata("design:paramtypes", [])
    ], SelectAutocompleteComponent);
    return SelectAutocompleteComponent;
}());
export { SelectAutocompleteComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWF1dG9jb21wbGV0ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXQtc2VsZWN0LWF1dG9jb21wbGV0ZS8iLCJzb3VyY2VzIjpbImxpYi9zZWxlY3QtYXV0b2NvbXBsZXRlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUVMLE1BQU0sRUFDTixTQUFTLEVBRVYsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBc0Y3QztJQTJCRTtRQTFCUyxzQkFBaUIsR0FBRyxXQUFXLENBQUM7UUFHaEMsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixZQUFPLEdBQUcsU0FBUyxDQUFDO1FBQ3BCLFVBQUssR0FBRyxPQUFPLENBQUM7UUFDaEIsZ0JBQVcsR0FBZ0IsSUFBSSxXQUFXLEVBQUUsQ0FBQztRQUM3QyxhQUFRLEdBQUcsbUJBQW1CLENBQUM7UUFDL0IsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFFckIsYUFBUSxHQUFHLElBQUksQ0FBQztRQUV6QixjQUFjO1FBQ0wsZUFBVSxHQUFHLENBQUMsQ0FBQztRQUNmLGVBQVUsR0FBb0MsVUFBVSxDQUFDO1FBQ3pELDJCQUFzQixHQUFHLEtBQUssQ0FBQztRQUd4QyxvQkFBZSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBSXhELG9CQUFlLEdBQWUsRUFBRSxDQUFDO1FBQ2pDLGtCQUFhLEdBQWUsRUFBRSxDQUFDO1FBQy9CLHFCQUFnQixHQUFHLEtBQUssQ0FBQztRQUN6QixrQkFBYSxHQUFHLEVBQUUsQ0FBQztJQUNKLENBQUM7SUFFaEIsaURBQVcsR0FBWDtRQUNFLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQzVCO2FBQU07WUFDTCxJQUFJLENBQUMsV0FB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LEtBQUssRUFBRTs7aUVBQWlCO0lBR2hCO1FBQVIsS0FBSyxFQUFFOzttRUFBZ0I7SUFDZjtRQUFSLEtBQUssRUFBRTs7bUVBQTBEO0lBQ3pEO1FBQVIsS0FBSyxFQUFFOzsrRUFBZ0M7SUFHeEM7UUFEQyxNQUFNLEVBQUU7a0NBQ1EsWUFBWTt3RUFBMkI7SUFFYjtRQUExQyxTQUFTLENBQUMsWUFBWSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDOzttRUFBWTtJQXJCM0MsMkJBQTJCO1FBcEZ2QyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUseUJBQXlCO1lBQ25DLFFBQVEsRUFBRSx1dERBZ0RUO3FCQUVDLDRyQkE2QkM7U0FFSixDQUFDOztPQUNXLDJCQUEyQixDQXFLdkM7SUFBRCxrQ0FBQztDQUFBLEFBcktELElBcUtDO1NBcktZLDJCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT3V0cHV0LFxyXG4gIFZpZXdDaGlsZCxcclxuICBEb0NoZWNrXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdtYXQtc2VsZWN0LWF1dG9jb21wbGV0ZScsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwie3sgYXBwZWFyYW5jZSB9fVwiPlxyXG4gICAgICA8bWF0LXNlbGVjdFxyXG4gICAgICAgICNzZWxlY3RFbGVtXHJcbiAgICAgICAgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCJcclxuICAgICAgICBbZm9ybUNvbnRyb2xdPVwiZm9ybUNvbnRyb2xcIlxyXG4gICAgICAgIFttdWx0aXBsZV09XCJtdWx0aXBsZVwiXHJcbiAgICAgICAgWyhuZ01vZGVsKV09XCJzZWxlY3RlZFZhbHVlXCJcclxuICAgICAgICAoc2VsZWN0aW9uQ2hhbmdlKT1cIm9uU2VsZWN0aW9uQ2hhbmdlKCRldmVudClcIlxyXG4gICAgICAgIGRpc2FibGVPcHRpb25DZW50ZXJpbmc9XCJkaXNhYmxlT3B0aW9uQ2VudGVyaW5nXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJib3gtc2VhcmNoXCI+XHJcbiAgICAgICAgICA8bWF0LWNoZWNrYm94XHJcbiAgICAgICAgICAgICpuZ0lmPVwibXVsdGlwbGVcIlxyXG4gICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICBjbGFzcz1cImJveC1zZWxlY3QtYWxsXCJcclxuICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJzZWxlY3RBbGxDaGVja2VkXCJcclxuICAgICAgICAgICAgKGNoYW5nZSk9XCJ0b2dnbGVTZWxlY3RBbGwoJGV2ZW50KVwiXHJcbiAgICAgICAgICA+PC9tYXQtY2hlY2tib3g+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgI3NlYXJjaElucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgW25nQ2xhc3NdPVwieyAncGwtMSc6ICFtdWx0aXBsZSB9XCJcclxuICAgICAgICAgICAgKGlucHV0KT1cImZpbHRlckl0ZW0oc2VhcmNoSW5wdXQudmFsdWUpXCJcclxuICAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cInNlbGVjdFBsYWNlaG9sZGVyXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzPVwiYm94LXNlYXJjaC1pY29uXCJcclxuICAgICAgICAgICAgKGNsaWNrKT1cImZpbHRlckl0ZW0oJycpOyBzZWFyY2hJbnB1dC52YWx1ZSA9ICcnXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gY2xhc3M9XCJzZWFyY2gtYnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgPG1hdC1pY29uIGNsYXNzPVwibWF0LTI0XCIgYXJpYS1sYWJlbD1cIlNlYXJjaCBpY29uXCI+Y2xlYXI8L21hdC1pY29uPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxtYXQtc2VsZWN0LXRyaWdnZXI+XHJcbiAgICAgICAgICB7eyBvbkRpc3BsYXlTdHJpbmcoKSB9fVxyXG4gICAgICAgIDwvbWF0LXNlbGVjdC10cmlnZ2VyPlxyXG4gICAgICAgIDxtYXQtb3B0aW9uXHJcbiAgICAgICAgICAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIG9wdGlvbnM7IHRyYWNrQnk6IHRyYWNrQnlGblwiXHJcbiAgICAgICAgICBbZGlzYWJsZWRdPVwib3B0aW9uLmRpc2FibGVkXCJcclxuICAgICAgICAgIFt2YWx1ZV09XCJvcHRpb25bdmFsdWVdXCJcclxuICAgICAgICAgIFtzdHlsZS5kaXNwbGF5XT1cImhpZGVPcHRpb24ob3B0aW9uKSA/ICdub25lJyA6ICdmbGV4J1wiXHJcbiAgICAgICAgICA+e3sgb3B0aW9uW2Rpc3BsYXldIH19XHJcbiAgICAgICAgPC9tYXQtb3B0aW9uPlxyXG4gICAgICA8L21hdC1zZWxlY3Q+XHJcbiAgICAgIDxtYXQtaGludCBzdHlsZT1cImNvbG9yOnJlZFwiICpuZ0lmPVwic2hvd0Vycm9yTXNnXCI+e3sgZXJyb3JNc2cgfX08L21hdC1oaW50PlxyXG4gICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICBgLFxyXG4gIHN0eWxlczogW1xyXG4gICAgYFxyXG4gICAgICAuYm94LXNlYXJjaCB7XHJcbiAgICAgICAgbWFyZ2luOiA4cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNiksXHJcbiAgICAgICAgICAwIDAgMCAxcHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcclxuICAgICAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDIwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgfVxyXG4gICAgICAuYm94LXNlYXJjaCBpbnB1dCB7XHJcbiAgICAgICAgZmxleDogMTtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgICAuYm94LXNlbGVjdC1hbGwge1xyXG4gICAgICAgIHdpZHRoOiAzNnB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzM3B4O1xyXG4gICAgICAgIGNvbG9yOiAjODA4MDgwO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgICAuc2VhcmNoLWJ1dHRvbiB7XHJcbiAgICAgICAgd2lkdGg6IDM2cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzNnB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzM3B4O1xyXG4gICAgICAgIGNvbG9yOiAjODA4MDgwO1xyXG4gICAgICB9XHJcbiAgICAgIC5wbC0xIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XHJcbiAgICAgIH1cclxuICAgIGBcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZWxlY3RBdXRvY29tcGxldGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIERvQ2hlY2sge1xyXG4gIEBJbnB1dCgpIHNlbGVjdFBsYWNlaG9sZGVyID0gJ3NlYXJjaC4uLic7XHJcbiAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZztcclxuICBASW5wdXQoKSBvcHRpb25zO1xyXG4gIEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgZGlzcGxheSA9ICdkaXNwbGF5JztcclxuICBASW5wdXQoKSB2YWx1ZSA9ICd2YWx1ZSc7XHJcbiAgQElucHV0KCkgZm9ybUNvbnRyb2w6IEZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKCk7XHJcbiAgQElucHV0KCkgZXJyb3JNc2cgPSAnRmllbGQgaXMgcmVxdWlyZWQnO1xyXG4gIEBJbnB1dCgpIHNob3dFcnJvck1zZyA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHNlbGVjdGVkT3B0aW9ucztcclxuICBASW5wdXQoKSBtdWx0aXBsZSA9IHRydWU7XHJcblxyXG4gIC8vIE5ldyBPcHRpb25zXHJcbiAgQElucHV0KCkgbGFiZWxDb3VudCA9IDE7XHJcbiAgQElucHV0KCkgYXBwZWFyYW5jZTogJ3N0YW5kYXJkJyB8ICdmaWxsJyB8ICdvdXRsaW5lJyA9ICdzdGFuZGFyZCc7XHJcbiAgQElucHV0KCkgZGlzYWJsZU9wdGlvbkNlbnRlcmluZyA9IGZhbHNlO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBzZWxlY3Rpb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBAVmlld0NoaWxkKCdzZWxlY3RFbGVtJywgeyBzdGF0aWM6IHRydWUgfSkgc2VsZWN0RWxlbTtcclxuXHJcbiAgZmlsdGVyZWRPcHRpb25zOiBBcnJheTxhbnk+ID0gW107XHJcbiAgc2VsZWN0ZWRWYWx1ZTogQXJyYXk8YW55PiA9IFtdO1xyXG4gIHNlbGVjdEFsbENoZWNrZWQgPSBmYWxzZTtcclxuICBkaXNwbGF5U3RyaW5nID0gJyc7XHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBuZ09uQ2hhbmdlcygpIHtcclxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XHJcbiAgICAgIHRoaXMuZm9ybUNvbnRyb2wuZGlzYWJsZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5mb3JtQ29udHJvbC5lbmFibGUoKTtcclxuICAgIH1cclxuICAgIHRoaXMuZmlsdGVyZWRPcHRpb25zID0gdGhpcy5vcHRpb25zO1xyXG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRPcHRpb25zKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRWYWx1ZSA9IHRoaXMuc2VsZWN0ZWRPcHRpb25zO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmZvcm1Db250cm9sLnZhbHVlKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRWYWx1ZSA9IHRoaXMuZm9ybUNvbnRyb2wudmFsdWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ0RvQ2hlY2soKSB7XHJcbiAgICBpZiAoIXRoaXMuc2VsZWN0ZWRWYWx1ZS5sZW5ndGgpIHtcclxuICAgICAgdGhpcy5zZWxlY3Rpb25DaGFuZ2UuZW1pdCh0aGlzLnNlbGVjdGVkVmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdG9nZ2xlRHJvcGRvd24oKSB7XHJcbiAgICB0aGlzLnNlbGVjdEVsZW0udG9nZ2xlKCk7XHJcbiAgfVxyXG5cclxuICB0b2dnbGVTZWxlY3RBbGwodmFsKSB7XHJcbiAgICBpZiAodmFsLmNoZWNrZWQpIHtcclxuICAgICAgdGhpcy5maWx0ZXJlZE9wdGlvbnMuZm9yRWFjaChvcHRpb24gPT4ge1xyXG4gICAgICAgIGlmICghdGhpcy5zZWxlY3RlZFZhbHVlLmluY2x1ZGVzKG9wdGlvblt0aGlzLnZhbHVlXSkpIHtcclxuICAgICAgICAgIHRoaXMuc2VsZWN0ZWRWYWx1ZSA9IHRoaXMuc2VsZWN0ZWRWYWx1ZS5jb25jYXQoW29wdGlvblt0aGlzLnZhbHVlXV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBmaWx0ZXJlZFZhbHVlcyA9IHRoaXMuZ2V0RmlsdGVyZWRPcHRpb25zVmFsdWVzKCk7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRWYWx1ZSA9IHRoaXMuc2VsZWN0ZWRWYWx1ZS5maWx0ZXIoXHJcbiAgICAgICAgaXRlbSA9PiAhZmlsdGVyZWRWYWx1ZXMuaW5jbHVkZXMoaXRlbSlcclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIHRoaXMuc2VsZWN0aW9uQ2hhbmdlLmVtaXQodGhpcy5zZWxlY3RlZFZhbHVlKTtcclxuICB9XHJcblxyXG4gIGZpbHRlckl0ZW0odmFsdWUpIHtcclxuICAgIHRoaXMuZmlsdGVyZWRPcHRpb25zID0gdGhpcy5vcHRpb25zLmZpbHRlcihcclxuICAgICAgaXRlbSA9PiBpdGVtW3RoaXMuZGlzcGxheV0udG9Mb3dlckNhc2UoKS5pbmRleE9mKHZhbHVlLnRvTG93ZXJDYXNlKCkpID4gLTFcclxuICAgICk7XHJcbiAgICB0aGlzLnNlbGVjdEFsbENoZWNrZWQgPSB0cnVlO1xyXG4gICAgdGhpcy5maWx0ZXJlZE9wdGlvbnMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgaWYgKCF0aGlzLnNlbGVjdGVkVmFsdWUuaW5jbHVkZXMoaXRlbVt0aGlzLnZhbHVlXSkpIHtcclxuICAgICAgICB0aGlzLnNlbGVjdEFsbENoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBpZiAoIXRoaXMuZmlsdGVyZWRPcHRpb25zLmxlbmd0aCkge1xyXG4gICAgICB0aGlzLnNlbGVjdEFsbENoZWNrZWQgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhpZGVPcHRpb24ob3B0aW9uKSB7XHJcbiAgICByZXR1cm4gISh0aGlzLmZpbHRlcmVkT3B0aW9ucy5pbmRleE9mKG9wdGlvbikgPiAtMSk7XHJcbiAgfVxyXG5cclxuICAvLyBSZXR1cm5zIHBsYWluIHN0cmluZ3MgYXJyYXkgb2YgZmlsdGVyZWQgdmFsdWVzXHJcbiAgZ2V0RmlsdGVyZWRPcHRpb25zVmFsdWVzKCkge1xyXG4gICAgY29uc3QgZmlsdGVyZWRWYWx1ZXMgPSBbXTtcclxuICAgIHRoaXMuZmlsdGVyZWRPcHRpb25zLmZvckVhY2gob3B0aW9uID0+IHtcclxuICAgICAgZmlsdGVyZWRWYWx1ZXMucHVzaChvcHRpb24udmFsdWUpO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gZmlsdGVyZWRWYWx1ZXM7XHJcbiAgfVxyXG5cclxuICBvbkRpc3BsYXlTdHJpbmcoKSB7XHJcbiAgICB0aGlzLmRpc3BsYXlTdHJpbmcgPSAnJztcclxuICAgIC8vIGNvbnNvbGUubG9nKCdWYWxvciBzZWxlY2Npb25hZG86ICcgKyB0aGlzLnNlbGVjdGVkVmFsdWUpO1xyXG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRWYWx1ZSkge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZygnRW50cmEgYXF1w60uJyk7XHJcbiAgICAgIGxldCBkaXNwbGF5T3B0aW9uID0gW107XHJcbiAgICAgIGlmICh0aGlzLm11bHRpcGxlKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ011bHRpcGxlJyk7XHJcbiAgICAgICAgLy8gTXVsdGkgc2VsZWN0IGRpc3BsYXlcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGFiZWxDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICBkaXNwbGF5T3B0aW9uW2ldID0gdGhpcy5vcHRpb25zLmZpbHRlcihcclxuICAgICAgICAgICAgb3B0aW9uID0+IG9wdGlvblt0aGlzLnZhbHVlXSA9PT0gdGhpcy5zZWxlY3RlZFZhbHVlW2ldXHJcbiAgICAgICAgICApWzBdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZGlzcGxheU9wdGlvbi5sZW5ndGgpIHtcclxuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGlzcGxheU9wdGlvbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZGlzcGxheU9wdGlvbltpXSAmJiBkaXNwbGF5T3B0aW9uW2ldW3RoaXMuZGlzcGxheV0pIHtcclxuICAgICAgICAgICAgICB0aGlzLmRpc3BsYXlTdHJpbmcgKz0gZGlzcGxheU9wdGlvbltpXVt0aGlzLmRpc3BsYXldICsgJywnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGlzLmRpc3BsYXlTdHJpbmcgPSB0aGlzLmRpc3BsYXlTdHJpbmcuc2xpY2UoMCwgLTEpO1xyXG4gICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkVmFsdWUubGVuZ3RoID4gMSAmJlxyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkVmFsdWUubGVuZ3RoID4gdGhpcy5sYWJlbENvdW50XHJcbiAgICAgICAgICApIHtcclxuICAgICAgICAgICAgLy8gU2UgbXVlc3RyYW4gdW5vcyBwb2NvcyBlbGVtZW50b3MgZGUgbG9zIHNlbGVjY2lvbmFkb3MgeSBzZSBtZW5jaW9uYW5cclxuICAgICAgICAgICAgLy8gcXVlIGV4aXN0ZW4gbiBtw6FzLlxyXG4gICAgICAgICAgICB0aGlzLmRpc3BsYXlTdHJpbmcgPVxyXG4gICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICh0aGlzLmRpc3BsYXlTdHJpbmcubGVuZ3RoID4gNDUpID9cclxuICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5U3RyaW5nLnN1YnN0cigwLCA0NSAtIDEpICsgJy4uLicgOlxyXG4gICAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXlTdHJpbmdcclxuICAgICAgICAgICAgICApICsgYCAoeSAke3RoaXMuc2VsZWN0ZWRWYWx1ZS5sZW5ndGggLSB0aGlzLmxhYmVsQ291bnR9IG3DoXMpYDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ1NpbmdsZScpO1xyXG4gICAgICAgIC8vIFNpbmdsZSBzZWxlY3QgZGlzcGxheVxyXG4gICAgICAgIGRpc3BsYXlPcHRpb24gPSB0aGlzLm9wdGlvbnMuZmlsdGVyKFxyXG4gICAgICAgICAgb3B0aW9uID0+IG9wdGlvblt0aGlzLnZhbHVlXSA9PT0gdGhpcy5zZWxlY3RlZFZhbHVlXHJcbiAgICAgICAgKTtcclxuICAgICAgICBpZiAoZGlzcGxheU9wdGlvbi5sZW5ndGgpIHtcclxuICAgICAgICAgIHRoaXMuZGlzcGxheVN0cmluZyA9IGRpc3BsYXlPcHRpb25bMF1bdGhpcy5kaXNwbGF5XTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5zZWxlY3RlZFZhbHVlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuZGlzcGxheVN0cmluZztcclxuICB9XHJcblxyXG4gIG9uU2VsZWN0aW9uQ2hhbmdlKHZhbCkge1xyXG4gICAgY29uc3QgZmlsdGVyZWRWYWx1ZXMgPSB0aGlzLmdldEZpbHRlcmVkT3B0aW9uc1ZhbHVlcygpO1xyXG4gICAgbGV0IGNvdW50ID0gMDtcclxuICAgIGlmICh0aGlzLm11bHRpcGxlKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRWYWx1ZS5maWx0ZXIoaXRlbSA9PiB7XHJcbiAgICAgICAgaWYgKGZpbHRlcmVkVmFsdWVzLmluY2x1ZGVzKGl0ZW0pKSB7XHJcbiAgICAgICAgICBjb3VudCsrO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMuc2VsZWN0QWxsQ2hlY2tlZCA9IGNvdW50ID09PSB0aGlzLmZpbHRlcmVkT3B0aW9ucy5sZW5ndGg7XHJcbiAgICB9XHJcbiAgICB0aGlzLnNlbGVjdGVkVmFsdWUgPSB2YWwudmFsdWU7XHJcbiAgICB0aGlzLnNlbGVjdGlvbkNoYW5nZS5lbWl0KHRoaXMuc2VsZWN0ZWRWYWx1ZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdHJhY2tCeUZuKGluZGV4LCBpdGVtKSB7XHJcbiAgICByZXR1cm4gaXRlbS52YWx1ZTtcclxuICB9XHJcbn1cclxuIl19