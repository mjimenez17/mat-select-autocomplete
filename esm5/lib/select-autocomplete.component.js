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
export { SelectAutocompleteComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWF1dG9jb21wbGV0ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXQtc2VsZWN0LWF1dG9jb21wbGV0ZS8iLCJzb3VyY2VzIjpbImxpYi9zZWxlY3QtYXV0b2NvbXBsZXRlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUVMLE1BQU0sRUFDTixTQUFTLEVBRVYsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBcUY3QztJQTBCRTtRQXpCUyxzQkFBaUIsR0FBRyxXQUFXLENBQUM7UUFHaEMsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixZQUFPLEdBQUcsU0FBUyxDQUFDO1FBQ3BCLFVBQUssR0FBRyxPQUFPLENBQUM7UUFDaEIsZ0JBQVcsR0FBZ0IsSUFBSSxXQUFXLEVBQUUsQ0FBQztRQUM3QyxhQUFRLEdBQUcsbUJBQW1CLENBQUM7UUFDL0IsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFFckIsYUFBUSxHQUFHLElBQUksQ0FBQztRQUV6QixjQUFjO1FBQ0wsZUFBVSxHQUFHLENBQUMsQ0FBQztRQUNmLGVBQVUsR0FBb0MsVUFBVSxDQUFDO1FBR2xFLG9CQUFlLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFJeEQsb0JBQWUsR0FBZSxFQUFFLENBQUM7UUFDakMsa0JBQWEsR0FBZSxFQUFFLENBQUM7UUFDL0IscUJBQWdCLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLGtCQUFhLEdBQUcsRUFBRSxDQUFDO0lBQ0osQ0FBQztJQUVoQixpREFBVyxHQUFYO1FBQ0UsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDNUI7YUFBTTtZQUNMLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDM0I7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UixLQUFLLEVBQUU7O21FQUFnQjtJQUNmO1FBQVIsS0FBSyxFQUFFOzttRUFBMEQ7SUFHbEU7UUFEQyxNQUFNLEVBQUU7a0NBQ1EsWUFBWTt3RUFBMkI7SUFFYjtRQUExQyxTQUFTLENBQUMsWUFBWSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDOzttRUFBWTtJQXBCM0MsMkJBQTJCO1FBbkZ2QyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUseUJBQXlCO1lBQ25DLFFBQVEsRUFBRSw0cERBK0NUO3FCQUVDLDRyQkE2QkM7U0FFSixDQUFDOztPQUNXLDJCQUEyQixDQW9LdkM7SUFBRCxrQ0FBQztDQUFBLEFBcEtELElBb0tDO1NBcEtZLDJCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT3V0cHV0LFxyXG4gIFZpZXdDaGlsZCxcclxuICBEb0NoZWNrXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdtYXQtc2VsZWN0LWF1dG9jb21wbGV0ZScsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwie3sgYXBwZWFyYW5jZSB9fVwiPlxyXG4gICAgICA8bWF0LXNlbGVjdFxyXG4gICAgICAgICNzZWxlY3RFbGVtXHJcbiAgICAgICAgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCJcclxuICAgICAgICBbZm9ybUNvbnRyb2xdPVwiZm9ybUNvbnRyb2xcIlxyXG4gICAgICAgIFttdWx0aXBsZV09XCJtdWx0aXBsZVwiXHJcbiAgICAgICAgWyhuZ01vZGVsKV09XCJzZWxlY3RlZFZhbHVlXCJcclxuICAgICAgICAoc2VsZWN0aW9uQ2hhbmdlKT1cIm9uU2VsZWN0aW9uQ2hhbmdlKCRldmVudClcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImJveC1zZWFyY2hcIj5cclxuICAgICAgICAgIDxtYXQtY2hlY2tib3hcclxuICAgICAgICAgICAgKm5nSWY9XCJtdWx0aXBsZVwiXHJcbiAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgIGNsYXNzPVwiYm94LXNlbGVjdC1hbGxcIlxyXG4gICAgICAgICAgICBbKG5nTW9kZWwpXT1cInNlbGVjdEFsbENoZWNrZWRcIlxyXG4gICAgICAgICAgICAoY2hhbmdlKT1cInRvZ2dsZVNlbGVjdEFsbCgkZXZlbnQpXCJcclxuICAgICAgICAgID48L21hdC1jaGVja2JveD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAjc2VhcmNoSW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBbbmdDbGFzc109XCJ7ICdwbC0xJzogIW11bHRpcGxlIH1cIlxyXG4gICAgICAgICAgICAoaW5wdXQpPVwiZmlsdGVySXRlbShzZWFyY2hJbnB1dC52YWx1ZSlcIlxyXG4gICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwic2VsZWN0UGxhY2Vob2xkZXJcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3M9XCJib3gtc2VhcmNoLWljb25cIlxyXG4gICAgICAgICAgICAoY2xpY2spPVwiZmlsdGVySXRlbSgnJyk7IHNlYXJjaElucHV0LnZhbHVlID0gJydcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBjbGFzcz1cInNlYXJjaC1idXR0b25cIj5cclxuICAgICAgICAgICAgICA8bWF0LWljb24gY2xhc3M9XCJtYXQtMjRcIiBhcmlhLWxhYmVsPVwiU2VhcmNoIGljb25cIj5jbGVhcjwvbWF0LWljb24+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPG1hdC1zZWxlY3QtdHJpZ2dlcj5cclxuICAgICAgICAgIHt7IG9uRGlzcGxheVN0cmluZygpIH19XHJcbiAgICAgICAgPC9tYXQtc2VsZWN0LXRyaWdnZXI+XHJcbiAgICAgICAgPG1hdC1vcHRpb25cclxuICAgICAgICAgICpuZ0Zvcj1cImxldCBvcHRpb24gb2Ygb3B0aW9uczsgdHJhY2tCeTogdHJhY2tCeUZuXCJcclxuICAgICAgICAgIFtkaXNhYmxlZF09XCJvcHRpb24uZGlzYWJsZWRcIlxyXG4gICAgICAgICAgW3ZhbHVlXT1cIm9wdGlvblt2YWx1ZV1cIlxyXG4gICAgICAgICAgW3N0eWxlLmRpc3BsYXldPVwiaGlkZU9wdGlvbihvcHRpb24pID8gJ25vbmUnIDogJ2ZsZXgnXCJcclxuICAgICAgICAgID57eyBvcHRpb25bZGlzcGxheV0gfX1cclxuICAgICAgICA8L21hdC1vcHRpb24+XHJcbiAgICAgIDwvbWF0LXNlbGVjdD5cclxuICAgICAgPG1hdC1oaW50IHN0eWxlPVwiY29sb3I6cmVkXCIgKm5nSWY9XCJzaG93RXJyb3JNc2dcIj57eyBlcnJvck1zZyB9fTwvbWF0LWhpbnQ+XHJcbiAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gIGAsXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgXHJcbiAgICAgIC5ib3gtc2VhcmNoIHtcclxuICAgICAgICBtYXJnaW46IDhweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KSxcclxuICAgICAgICAgIDAgMCAwIDFweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMjAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICB9XHJcbiAgICAgIC5ib3gtc2VhcmNoIGlucHV0IHtcclxuICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICB9XHJcbiAgICAgIC5ib3gtc2VsZWN0LWFsbCB7XHJcbiAgICAgICAgd2lkdGg6IDM2cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMzcHg7XHJcbiAgICAgICAgY29sb3I6ICM4MDgwODA7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB9XHJcbiAgICAgIC5zZWFyY2gtYnV0dG9uIHtcclxuICAgICAgICB3aWR0aDogMzZweDtcclxuICAgICAgICBoZWlnaHQ6IDM2cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMzcHg7XHJcbiAgICAgICAgY29sb3I6ICM4MDgwODA7XHJcbiAgICAgIH1cclxuICAgICAgLnBsLTEge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMXJlbTtcclxuICAgICAgfVxyXG4gICAgYFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNlbGVjdEF1dG9jb21wbGV0ZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgRG9DaGVjayB7XHJcbiAgQElucHV0KCkgc2VsZWN0UGxhY2Vob2xkZXIgPSAnc2VhcmNoLi4uJztcclxuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIG9wdGlvbnM7XHJcbiAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcclxuICBASW5wdXQoKSBkaXNwbGF5ID0gJ2Rpc3BsYXknO1xyXG4gIEBJbnB1dCgpIHZhbHVlID0gJ3ZhbHVlJztcclxuICBASW5wdXQoKSBmb3JtQ29udHJvbDogRm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woKTtcclxuICBASW5wdXQoKSBlcnJvck1zZyA9ICdGaWVsZCBpcyByZXF1aXJlZCc7XHJcbiAgQElucHV0KCkgc2hvd0Vycm9yTXNnID0gZmFsc2U7XHJcbiAgQElucHV0KCkgc2VsZWN0ZWRPcHRpb25zO1xyXG4gIEBJbnB1dCgpIG11bHRpcGxlID0gdHJ1ZTtcclxuXHJcbiAgLy8gTmV3IE9wdGlvbnNcclxuICBASW5wdXQoKSBsYWJlbENvdW50ID0gMTtcclxuICBASW5wdXQoKSBhcHBlYXJhbmNlOiAnc3RhbmRhcmQnIHwgJ2ZpbGwnIHwgJ291dGxpbmUnID0gJ3N0YW5kYXJkJztcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgc2VsZWN0aW9uQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgQFZpZXdDaGlsZCgnc2VsZWN0RWxlbScsIHsgc3RhdGljOiB0cnVlIH0pIHNlbGVjdEVsZW07XHJcblxyXG4gIGZpbHRlcmVkT3B0aW9uczogQXJyYXk8YW55PiA9IFtdO1xyXG4gIHNlbGVjdGVkVmFsdWU6IEFycmF5PGFueT4gPSBbXTtcclxuICBzZWxlY3RBbGxDaGVja2VkID0gZmFsc2U7XHJcbiAgZGlzcGxheVN0cmluZyA9ICcnO1xyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgbmdPbkNoYW5nZXMoKSB7XHJcbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xyXG4gICAgICB0aGlzLmZvcm1Db250cm9sLmRpc2FibGUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZm9ybUNvbnRyb2wuZW5hYmxlKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmZpbHRlcmVkT3B0aW9ucyA9IHRoaXMub3B0aW9ucztcclxuICAgIGlmICh0aGlzLnNlbGVjdGVkT3B0aW9ucykge1xyXG4gICAgICB0aGlzLnNlbGVjdGVkVmFsdWUgPSB0aGlzLnNlbGVjdGVkT3B0aW9ucztcclxuICAgIH0gZWxzZSBpZiAodGhpcy5mb3JtQ29udHJvbC52YWx1ZSkge1xyXG4gICAgICB0aGlzLnNlbGVjdGVkVmFsdWUgPSB0aGlzLmZvcm1Db250cm9sLnZhbHVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdEb0NoZWNrKCkge1xyXG4gICAgaWYgKCF0aGlzLnNlbGVjdGVkVmFsdWUubGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0aW9uQ2hhbmdlLmVtaXQodGhpcy5zZWxlY3RlZFZhbHVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRvZ2dsZURyb3Bkb3duKCkge1xyXG4gICAgdGhpcy5zZWxlY3RFbGVtLnRvZ2dsZSgpO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlU2VsZWN0QWxsKHZhbCkge1xyXG4gICAgaWYgKHZhbC5jaGVja2VkKSB7XHJcbiAgICAgIHRoaXMuZmlsdGVyZWRPcHRpb25zLmZvckVhY2gob3B0aW9uID0+IHtcclxuICAgICAgICBpZiAoIXRoaXMuc2VsZWN0ZWRWYWx1ZS5pbmNsdWRlcyhvcHRpb25bdGhpcy52YWx1ZV0pKSB7XHJcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkVmFsdWUgPSB0aGlzLnNlbGVjdGVkVmFsdWUuY29uY2F0KFtvcHRpb25bdGhpcy52YWx1ZV1dKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgZmlsdGVyZWRWYWx1ZXMgPSB0aGlzLmdldEZpbHRlcmVkT3B0aW9uc1ZhbHVlcygpO1xyXG4gICAgICB0aGlzLnNlbGVjdGVkVmFsdWUgPSB0aGlzLnNlbGVjdGVkVmFsdWUuZmlsdGVyKFxyXG4gICAgICAgIGl0ZW0gPT4gIWZpbHRlcmVkVmFsdWVzLmluY2x1ZGVzKGl0ZW0pXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnNlbGVjdGlvbkNoYW5nZS5lbWl0KHRoaXMuc2VsZWN0ZWRWYWx1ZSk7XHJcbiAgfVxyXG5cclxuICBmaWx0ZXJJdGVtKHZhbHVlKSB7XHJcbiAgICB0aGlzLmZpbHRlcmVkT3B0aW9ucyA9IHRoaXMub3B0aW9ucy5maWx0ZXIoXHJcbiAgICAgIGl0ZW0gPT4gaXRlbVt0aGlzLmRpc3BsYXldLnRvTG93ZXJDYXNlKCkuaW5kZXhPZih2YWx1ZS50b0xvd2VyQ2FzZSgpKSA+IC0xXHJcbiAgICApO1xyXG4gICAgdGhpcy5zZWxlY3RBbGxDaGVja2VkID0gdHJ1ZTtcclxuICAgIHRoaXMuZmlsdGVyZWRPcHRpb25zLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgIGlmICghdGhpcy5zZWxlY3RlZFZhbHVlLmluY2x1ZGVzKGl0ZW1bdGhpcy52YWx1ZV0pKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RBbGxDaGVja2VkID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgaWYgKCF0aGlzLmZpbHRlcmVkT3B0aW9ucy5sZW5ndGgpIHtcclxuICAgICAgdGhpcy5zZWxlY3RBbGxDaGVja2VkID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoaWRlT3B0aW9uKG9wdGlvbikge1xyXG4gICAgcmV0dXJuICEodGhpcy5maWx0ZXJlZE9wdGlvbnMuaW5kZXhPZihvcHRpb24pID4gLTEpO1xyXG4gIH1cclxuXHJcbiAgLy8gUmV0dXJucyBwbGFpbiBzdHJpbmdzIGFycmF5IG9mIGZpbHRlcmVkIHZhbHVlc1xyXG4gIGdldEZpbHRlcmVkT3B0aW9uc1ZhbHVlcygpIHtcclxuICAgIGNvbnN0IGZpbHRlcmVkVmFsdWVzID0gW107XHJcbiAgICB0aGlzLmZpbHRlcmVkT3B0aW9ucy5mb3JFYWNoKG9wdGlvbiA9PiB7XHJcbiAgICAgIGZpbHRlcmVkVmFsdWVzLnB1c2gob3B0aW9uLnZhbHVlKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGZpbHRlcmVkVmFsdWVzO1xyXG4gIH1cclxuXHJcbiAgb25EaXNwbGF5U3RyaW5nKCkge1xyXG4gICAgdGhpcy5kaXNwbGF5U3RyaW5nID0gJyc7XHJcbiAgICAvLyBjb25zb2xlLmxvZygnVmFsb3Igc2VsZWNjaW9uYWRvOiAnICsgdGhpcy5zZWxlY3RlZFZhbHVlKTtcclxuICAgIGlmICh0aGlzLnNlbGVjdGVkVmFsdWUpIHtcclxuICAgICAgLy8gY29uc29sZS5sb2coJ0VudHJhIGFxdcOtLicpO1xyXG4gICAgICBsZXQgZGlzcGxheU9wdGlvbiA9IFtdO1xyXG4gICAgICBpZiAodGhpcy5tdWx0aXBsZSkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdNdWx0aXBsZScpO1xyXG4gICAgICAgIC8vIE11bHRpIHNlbGVjdCBkaXNwbGF5XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxhYmVsQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgZGlzcGxheU9wdGlvbltpXSA9IHRoaXMub3B0aW9ucy5maWx0ZXIoXHJcbiAgICAgICAgICAgIG9wdGlvbiA9PiBvcHRpb25bdGhpcy52YWx1ZV0gPT09IHRoaXMuc2VsZWN0ZWRWYWx1ZVtpXVxyXG4gICAgICAgICAgKVswXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGRpc3BsYXlPcHRpb24ubGVuZ3RoKSB7XHJcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRpc3BsYXlPcHRpb24ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGRpc3BsYXlPcHRpb25baV0gJiYgZGlzcGxheU9wdGlvbltpXVt0aGlzLmRpc3BsYXldKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5U3RyaW5nICs9IGRpc3BsYXlPcHRpb25baV1bdGhpcy5kaXNwbGF5XSArICcsJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhpcy5kaXNwbGF5U3RyaW5nID0gdGhpcy5kaXNwbGF5U3RyaW5nLnNsaWNlKDAsIC0xKTtcclxuICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFZhbHVlLmxlbmd0aCA+IDEgJiZcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFZhbHVlLmxlbmd0aCA+IHRoaXMubGFiZWxDb3VudFxyXG4gICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIC8vIFNlIG11ZXN0cmFuIHVub3MgcG9jb3MgZWxlbWVudG9zIGRlIGxvcyBzZWxlY2Npb25hZG9zIHkgc2UgbWVuY2lvbmFuXHJcbiAgICAgICAgICAgIC8vIHF1ZSBleGlzdGVuIG4gbcOhcy5cclxuICAgICAgICAgICAgdGhpcy5kaXNwbGF5U3RyaW5nID1cclxuICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAodGhpcy5kaXNwbGF5U3RyaW5nLmxlbmd0aCA+IDQ1KSA/XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheVN0cmluZy5zdWJzdHIoMCwgNDUgLSAxKSArICcuLi4nIDpcclxuICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5U3RyaW5nXHJcbiAgICAgICAgICAgICAgKSArIGAgKHkgJHt0aGlzLnNlbGVjdGVkVmFsdWUubGVuZ3RoIC0gdGhpcy5sYWJlbENvdW50fSBtw6FzKWA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdTaW5nbGUnKTtcclxuICAgICAgICAvLyBTaW5nbGUgc2VsZWN0IGRpc3BsYXlcclxuICAgICAgICBkaXNwbGF5T3B0aW9uID0gdGhpcy5vcHRpb25zLmZpbHRlcihcclxuICAgICAgICAgIG9wdGlvbiA9PiBvcHRpb25bdGhpcy52YWx1ZV0gPT09IHRoaXMuc2VsZWN0ZWRWYWx1ZVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgaWYgKGRpc3BsYXlPcHRpb24ubGVuZ3RoKSB7XHJcbiAgICAgICAgICB0aGlzLmRpc3BsYXlTdHJpbmcgPSBkaXNwbGF5T3B0aW9uWzBdW3RoaXMuZGlzcGxheV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc2VsZWN0ZWRWYWx1ZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLmRpc3BsYXlTdHJpbmc7XHJcbiAgfVxyXG5cclxuICBvblNlbGVjdGlvbkNoYW5nZSh2YWwpIHtcclxuICAgIGNvbnN0IGZpbHRlcmVkVmFsdWVzID0gdGhpcy5nZXRGaWx0ZXJlZE9wdGlvbnNWYWx1ZXMoKTtcclxuICAgIGxldCBjb3VudCA9IDA7XHJcbiAgICBpZiAodGhpcy5tdWx0aXBsZSkge1xyXG4gICAgICB0aGlzLnNlbGVjdGVkVmFsdWUuZmlsdGVyKGl0ZW0gPT4ge1xyXG4gICAgICAgIGlmIChmaWx0ZXJlZFZhbHVlcy5pbmNsdWRlcyhpdGVtKSkge1xyXG4gICAgICAgICAgY291bnQrKztcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLnNlbGVjdEFsbENoZWNrZWQgPSBjb3VudCA9PT0gdGhpcy5maWx0ZXJlZE9wdGlvbnMubGVuZ3RoO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZWxlY3RlZFZhbHVlID0gdmFsLnZhbHVlO1xyXG4gICAgdGhpcy5zZWxlY3Rpb25DaGFuZ2UuZW1pdCh0aGlzLnNlbGVjdGVkVmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHRyYWNrQnlGbihpbmRleCwgaXRlbSkge1xyXG4gICAgcmV0dXJuIGl0ZW0udmFsdWU7XHJcbiAgfVxyXG59XHJcbiJdfQ==