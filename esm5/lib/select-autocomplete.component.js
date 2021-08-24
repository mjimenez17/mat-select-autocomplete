import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/select";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/common";
import * as i5 from "@angular/material/button";
import * as i6 from "@angular/material/icon";
import * as i7 from "@angular/material/checkbox";
import * as i8 from "@angular/material/core";
var _c0 = ["selectElem"];
function SelectAutocompleteComponent_mat_checkbox_4_Template(rf, ctx) { if (rf & 1) {
    var _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-checkbox", 12);
    i0.ɵɵlistener("ngModelChange", function SelectAutocompleteComponent_mat_checkbox_4_Template_mat_checkbox_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r16); var ctx_r15 = i0.ɵɵnextContext(); return ctx_r15.selectAllChecked = $event; })("change", function SelectAutocompleteComponent_mat_checkbox_4_Template_mat_checkbox_change_0_listener($event) { i0.ɵɵrestoreView(_r16); var ctx_r17 = i0.ɵɵnextContext(); return ctx_r17.toggleSelectAll($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r11 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngModel", ctx_r11.selectAllChecked);
} }
function SelectAutocompleteComponent_mat_option_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 13);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var option_r18 = ctx.$implicit;
    var ctx_r13 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("display", ctx_r13.hideOption(option_r18) ? "none" : "flex");
    i0.ɵɵproperty("disabled", option_r18.disabled)("value", option_r18[ctx_r13.value]);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", option_r18[ctx_r13.display], " ");
} }
function SelectAutocompleteComponent_mat_hint_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-hint", 14);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r14 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r14.errorMsg);
} }
var _c1 = function (a0) { return { "pl-1": a0 }; };
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
        this.filteredOptions = this.options.filter(function (item) { return item[_this.display].toLowerCase().localeCompare(value.toLowerCase()) > -1; });
        this.selectAllChecked = true;
        this.filteredOptions.forEach(function (item) {
            if (_this.multiple && !_this.selectedValue.includes(item[_this.value])) {
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
    SelectAutocompleteComponent.ɵfac = function SelectAutocompleteComponent_Factory(t) { return new (t || SelectAutocompleteComponent)(); };
    SelectAutocompleteComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SelectAutocompleteComponent, selectors: [["mat-select-autocomplete"]], viewQuery: function SelectAutocompleteComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵstaticViewQuery(_c0, true);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.selectElem = _t.first);
        } }, inputs: { selectPlaceholder: "selectPlaceholder", placeholder: "placeholder", options: "options", disabled: "disabled", display: "display", value: "value", formControl: "formControl", errorMsg: "errorMsg", showErrorMsg: "showErrorMsg", selectedOptions: "selectedOptions", multiple: "multiple", labelCount: "labelCount", appearance: "appearance", disableOptionCentering: "disableOptionCentering" }, outputs: { selectionChange: "selectionChange" }, features: [i0.ɵɵNgOnChangesFeature], decls: 15, vars: 14, consts: [[3, "appearance"], ["disableOptionCentering", "disableOptionCentering", 3, "placeholder", "formControl", "multiple", "ngModel", "ngModelChange", "selectionChange"], ["selectElem", ""], [1, "box-search"], ["color", "primary", "class", "box-select-all", 3, "ngModel", "ngModelChange", "change", 4, "ngIf"], ["type", "text", 3, "ngClass", "placeholder", "input"], ["searchInput", ""], [1, "box-search-icon", 3, "click"], ["mat-icon-button", "", 1, "search-button"], ["aria-label", "Search icon", 1, "mat-24"], [3, "disabled", "value", "display", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["style", "color:red", 4, "ngIf"], ["color", "primary", 1, "box-select-all", 3, "ngModel", "ngModelChange", "change"], [3, "disabled", "value"], [2, "color", "red"]], template: function SelectAutocompleteComponent_Template(rf, ctx) { if (rf & 1) {
            var _r19 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "mat-form-field", 0);
            i0.ɵɵelementStart(1, "mat-select", 1, 2);
            i0.ɵɵlistener("ngModelChange", function SelectAutocompleteComponent_Template_mat_select_ngModelChange_1_listener($event) { return ctx.selectedValue = $event; })("selectionChange", function SelectAutocompleteComponent_Template_mat_select_selectionChange_1_listener($event) { return ctx.onSelectionChange($event); });
            i0.ɵɵelementStart(3, "div", 3);
            i0.ɵɵtemplate(4, SelectAutocompleteComponent_mat_checkbox_4_Template, 1, 1, "mat-checkbox", 4);
            i0.ɵɵelementStart(5, "input", 5, 6);
            i0.ɵɵlistener("input", function SelectAutocompleteComponent_Template_input_input_5_listener() { i0.ɵɵrestoreView(_r19); var _r12 = i0.ɵɵreference(6); return ctx.filterItem(_r12.value); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "div", 7);
            i0.ɵɵlistener("click", function SelectAutocompleteComponent_Template_div_click_7_listener() { i0.ɵɵrestoreView(_r19); var _r12 = i0.ɵɵreference(6); ctx.filterItem(""); return _r12.value = ""; });
            i0.ɵɵelementStart(8, "button", 8);
            i0.ɵɵelementStart(9, "mat-icon", 9);
            i0.ɵɵtext(10, "clear");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "mat-select-trigger");
            i0.ɵɵtext(12);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(13, SelectAutocompleteComponent_mat_option_13_Template, 2, 5, "mat-option", 10);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(14, SelectAutocompleteComponent_mat_hint_14_Template, 2, 1, "mat-hint", 11);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵpropertyInterpolate("appearance", ctx.appearance);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("placeholder", ctx.placeholder)("formControl", ctx.formControl)("multiple", ctx.multiple)("ngModel", ctx.selectedValue);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx.multiple);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(12, _c1, !ctx.multiple))("placeholder", ctx.selectPlaceholder);
            i0.ɵɵadvance(7);
            i0.ɵɵtextInterpolate1(" ", ctx.onDisplayString(), " ");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx.options)("ngForTrackBy", ctx.trackByFn);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.showErrorMsg);
        } }, directives: [i1.MatFormField, i2.MatSelect, i3.NgControlStatus, i3.FormControlDirective, i4.NgIf, i4.NgClass, i5.MatButton, i6.MatIcon, i2.MatSelectTrigger, i4.NgForOf, i7.MatCheckbox, i3.NgModel, i8.MatOption, i1.MatHint], styles: [".box-search[_ngcontent-%COMP%] {\n        margin: 8px;\n        border-radius: 2px;\n        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16),\n          0 0 0 1px rgba(0, 0, 0, 0.08);\n        transition: box-shadow 200ms cubic-bezier(0.4, 0, 0.2, 1);\n        display: flex;\n      }\n      .box-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n        flex: 1;\n        border: none;\n        outline: none;\n      }\n      .box-select-all[_ngcontent-%COMP%] {\n        width: 36px;\n        line-height: 33px;\n        color: #808080;\n        text-align: center;\n      }\n      .search-button[_ngcontent-%COMP%] {\n        width: 36px;\n        height: 36px;\n        line-height: 33px;\n        color: #808080;\n      }\n      .pl-1[_ngcontent-%COMP%] {\n        padding-left: 1rem;\n      }"] });
    return SelectAutocompleteComponent;
}());
export { SelectAutocompleteComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SelectAutocompleteComponent, [{
        type: Component,
        args: [{
                selector: 'mat-select-autocomplete',
                template: "\n    <mat-form-field appearance=\"{{ appearance }}\">\n      <mat-select\n        #selectElem\n        [placeholder]=\"placeholder\"\n        [formControl]=\"formControl\"\n        [multiple]=\"multiple\"\n        [(ngModel)]=\"selectedValue\"\n        (selectionChange)=\"onSelectionChange($event)\"\n        disableOptionCentering=\"disableOptionCentering\"\n      >\n        <div class=\"box-search\">\n          <mat-checkbox\n            *ngIf=\"multiple\"\n            color=\"primary\"\n            class=\"box-select-all\"\n            [(ngModel)]=\"selectAllChecked\"\n            (change)=\"toggleSelectAll($event)\"\n          ></mat-checkbox>\n          <input\n            #searchInput\n            type=\"text\"\n            [ngClass]=\"{ 'pl-1': !multiple }\"\n            (input)=\"filterItem(searchInput.value)\"\n            [placeholder]=\"selectPlaceholder\"\n          />\n          <div\n            class=\"box-search-icon\"\n            (click)=\"filterItem(''); searchInput.value = ''\"\n          >\n            <button mat-icon-button class=\"search-button\">\n              <mat-icon class=\"mat-24\" aria-label=\"Search icon\">clear</mat-icon>\n            </button>\n          </div>\n        </div>\n        <mat-select-trigger>\n          {{ onDisplayString() }}\n        </mat-select-trigger>\n        <mat-option\n          *ngFor=\"let option of options; trackBy: trackByFn\"\n          [disabled]=\"option.disabled\"\n          [value]=\"option[value]\"\n          [style.display]=\"hideOption(option) ? 'none' : 'flex'\"\n          >{{ option[display] }}\n        </mat-option>\n      </mat-select>\n      <mat-hint style=\"color:red\" *ngIf=\"showErrorMsg\">{{ errorMsg }}</mat-hint>\n    </mat-form-field>\n  ",
                styles: [
                    "\n      .box-search {\n        margin: 8px;\n        border-radius: 2px;\n        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16),\n          0 0 0 1px rgba(0, 0, 0, 0.08);\n        transition: box-shadow 200ms cubic-bezier(0.4, 0, 0.2, 1);\n        display: flex;\n      }\n      .box-search input {\n        flex: 1;\n        border: none;\n        outline: none;\n      }\n      .box-select-all {\n        width: 36px;\n        line-height: 33px;\n        color: #808080;\n        text-align: center;\n      }\n      .search-button {\n        width: 36px;\n        height: 36px;\n        line-height: 33px;\n        color: #808080;\n      }\n      .pl-1 {\n        padding-left: 1rem;\n      }\n    "
                ]
            }]
    }], function () { return []; }, { selectPlaceholder: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], options: [{
            type: Input
        }], disabled: [{
            type: Input
        }], display: [{
            type: Input
        }], value: [{
            type: Input
        }], formControl: [{
            type: Input
        }], errorMsg: [{
            type: Input
        }], showErrorMsg: [{
            type: Input
        }], selectedOptions: [{
            type: Input
        }], multiple: [{
            type: Input
        }], labelCount: [{
            type: Input
        }], appearance: [{
            type: Input
        }], disableOptionCentering: [{
            type: Input
        }], selectionChange: [{
            type: Output
        }], selectElem: [{
            type: ViewChild,
            args: ['selectElem', { static: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWF1dG9jb21wbGV0ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXQtc2VsZWN0LWF1dG9jb21wbGV0ZS8iLCJzb3VyY2VzIjpbImxpYi9zZWxlY3QtYXV0b2NvbXBsZXRlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBRUwsTUFBTSxFQUNOLFNBQVMsRUFFVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7Ozs7Ozs7SUFnQm5DLHdDQU1nQjtJQUZkLGtQQUE4QixxTkFBQTtJQUUvQixpQkFBZTs7O0lBRmQsa0RBQThCOzs7SUFzQmxDLHNDQUtHO0lBQUEsWUFDSDtJQUFBLGlCQUFhOzs7O0lBRlgsMkVBQXNEO0lBRnRELDhDQUE0QixvQ0FBQTtJQUczQixlQUNIO0lBREcsMkRBQ0g7OztJQUVGLG9DQUFpRDtJQUFBLFlBQWM7SUFBQSxpQkFBVzs7O0lBQXpCLGVBQWM7SUFBZCxzQ0FBYzs7O0FBaERyRTtJQStHRTtRQTFCUyxzQkFBaUIsR0FBRyxXQUFXLENBQUM7UUFHaEMsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixZQUFPLEdBQUcsU0FBUyxDQUFDO1FBQ3BCLFVBQUssR0FBRyxPQUFPLENBQUM7UUFDaEIsZ0JBQVcsR0FBZ0IsSUFBSSxXQUFXLEVBQUUsQ0FBQztRQUM3QyxhQUFRLEdBQUcsbUJBQW1CLENBQUM7UUFDL0IsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFFckIsYUFBUSxHQUFHLElBQUksQ0FBQztRQUV6QixjQUFjO1FBQ0wsZUFBVSxHQUFHLENBQUMsQ0FBQztRQUNmLGVBQVUsR0FBb0MsVUFBVSxDQUFDO1FBQ3pELDJCQUFzQixHQUFHLEtBQUssQ0FBQztRQUd4QyxvQkFBZSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBSXhELG9CQUFlLEdB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cnQge1xuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT3V0cHV0LFxuICBWaWV3Q2hpbGQsXG4gIERvQ2hlY2tcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWF0LXNlbGVjdC1hdXRvY29tcGxldGUnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwie3sgYXBwZWFyYW5jZSB9fVwiPlxuICAgICAgPG1hdC1zZWxlY3RcbiAgICAgICAgI3NlbGVjdEVsZW1cbiAgICAgICAgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCJcbiAgICAgICAgW2Zvcm1Db250cm9sXT1cImZvcm1Db250cm9sXCJcbiAgICAgICAgW211bHRpcGxlXT1cIm11bHRpcGxlXCJcbiAgICAgICAgWyhuZ01vZGVsKV09XCJzZWxlY3RlZFZhbHVlXCJcbiAgICAgICAgKHNlbGVjdGlvbkNoYW5nZSk9XCJvblNlbGVjdGlvbkNoYW5nZSgkZXZlbnQpXCJcbiAgICAgICAgZGlzYWJsZU9wdGlvbkNlbnRlcmluZz1cImRpc2FibGVPcHRpb25DZW50ZXJpbmdcIlxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYm94LXNlYXJjaFwiPlxuICAgICAgICAgIDxtYXQtY2hlY2tib3hcbiAgICAgICAgICAgICpuZ0lmPVwibXVsdGlwbGVcIlxuICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgIGNsYXNzPVwiYm94LXNlbGVjdC1hbGxcIlxuICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJzZWxlY3RBbGxDaGVja2VkXCJcbiAgICAgICAgICAgIChjaGFuZ2UpPVwidG9nZ2xlU2VsZWN0QWxsKCRldmVudClcIlxuICAgICAgICAgID48L21hdC1jaGVja2JveD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICNzZWFyY2hJbnB1dFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgW25nQ2xhc3NdPVwieyAncGwtMSc6ICFtdWx0aXBsZSB9XCJcbiAgICAgICAgICAgIChpbnB1dCk9XCJmaWx0ZXJJdGVtKHNlYXJjaElucHV0LnZhbHVlKVwiXG4gICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwic2VsZWN0UGxhY2Vob2xkZXJcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3M9XCJib3gtc2VhcmNoLWljb25cIlxuICAgICAgICAgICAgKGNsaWNrKT1cImZpbHRlckl0ZW0oJycpOyBzZWFyY2hJbnB1dC52YWx1ZSA9ICcnXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBjbGFzcz1cInNlYXJjaC1idXR0b25cIj5cbiAgICAgICAgICAgICAgPG1hdC1pY29uIGNsYXNzPVwibWF0LTI0XCIgYXJpYS1sYWJlbD1cIlNlYXJjaCBpY29uXCI+Y2xlYXI8L21hdC1pY29uPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8bWF0LXNlbGVjdC10cmlnZ2VyPlxuICAgICAgICAgIHt7IG9uRGlzcGxheVN0cmluZygpIH19XG4gICAgICAgIDwvbWF0LXNlbGVjdC10cmlnZ2VyPlxuICAgICAgICA8bWF0LW9wdGlvblxuICAgICAgICAgICpuZ0Zvcj1cImxldCBvcHRpb24gb2Ygb3B0aW9uczsgdHJhY2tCeTogdHJhY2tCeUZuXCJcbiAgICAgICAgICBbZGlzYWJsZWRdPVwib3B0aW9uLmRpc2FibGVkXCJcbiAgICAgICAgICBbdmFsdWVdPVwib3B0aW9uW3ZhbHVlXVwiXG4gICAgICAgICAgW3N0eWxlLmRpc3BsYXldPVwiaGlkZU9wdGlvbihvcHRpb24pID8gJ25vbmUnIDogJ2ZsZXgnXCJcbiAgICAgICAgICA+e3sgb3B0aW9uW2Rpc3BsYXldIH19XG4gICAgICAgIDwvbWF0LW9wdGlvbj5cbiAgICAgIDwvbWF0LXNlbGVjdD5cbiAgICAgIDxtYXQtaGludCBzdHlsZT1cImNvbG9yOnJlZFwiICpuZ0lmPVwic2hvd0Vycm9yTXNnXCI+e3sgZXJyb3JNc2cgfX08L21hdC1oaW50PlxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gIGAsXG4gIHN0eWxlczogW1xuICAgIGBcbiAgICAgIC5ib3gtc2VhcmNoIHtcbiAgICAgICAgbWFyZ2luOiA4cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgYm94LXNoYWRvdzogMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KSxcbiAgICAgICAgICAwIDAgMCAxcHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcbiAgICAgICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAyMDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgfVxuICAgICAgLmJveC1zZWFyY2ggaW5wdXQge1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICB9XG4gICAgICAuYm94LXNlbGVjdC1hbGwge1xuICAgICAgICB3aWR0aDogMzZweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMzcHg7XG4gICAgICAgIGNvbG9yOiAjODA4MDgwO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG4gICAgICAuc2VhcmNoLWJ1dHRvbiB7XG4gICAgICAgIHdpZHRoOiAzNnB4O1xuICAgICAgICBoZWlnaHQ6IDM2cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzM3B4O1xuICAgICAgICBjb2xvcjogIzgwODA4MDtcbiAgICAgIH1cbiAgICAgIC5wbC0xIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xuICAgICAgfVxuICAgIGBcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3RBdXRvY29tcGxldGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIERvQ2hlY2sge1xuICBASW5wdXQoKSBzZWxlY3RQbGFjZWhvbGRlciA9ICdzZWFyY2guLi4nO1xuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xuICBASW5wdXQoKSBvcHRpb25zO1xuICBASW5wdXQoKSBkaXNhYmxlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBkaXNwbGF5ID0gJ2Rpc3BsYXknO1xuICBASW5wdXQoKSB2YWx1ZSA9ICd2YWx1ZSc7XG4gIEBJbnB1dCgpIGZvcm1Db250cm9sOiBGb3JtQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgpO1xuICBASW5wdXQoKSBlcnJvck1zZyA9ICdGaWVsZCBpcyByZXF1aXJlZCc7XG4gIEBJbnB1dCgpIHNob3dFcnJvck1zZyA9IGZhbHNlO1xuICBASW5wdXQoKSBzZWxlY3RlZE9wdGlvbnM7XG4gIEBJbnB1dCgpIG11bHRpcGxlID0gdHJ1ZTtcblxuICAvLyBOZXcgT3B0aW9uc1xuICBASW5wdXQoKSBsYWJlbENvdW50ID0gMTtcbiAgQElucHV0KCkgYXBwZWFyYW5jZTogJ3N0YW5kYXJkJyB8ICdmaWxsJyB8ICdvdXRsaW5lJyA9ICdzdGFuZGFyZCc7XG4gIEBJbnB1dCgpIGRpc2FibGVPcHRpb25DZW50ZXJpbmcgPSBmYWxzZTtcblxuICBAT3V0cHV0KClcbiAgc2VsZWN0aW9uQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBAVmlld0NoaWxkKCdzZWxlY3RFbGVtJywgeyBzdGF0aWM6IHRydWUgfSkgc2VsZWN0RWxlbTtcblxuICBmaWx0ZXJlZE9wdGlvbnM6IEFycmF5PGFueT4gPSBbXTtcbiAgc2VsZWN0ZWRWYWx1ZTogQXJyYXk8YW55PiA9IFtdO1xuICBzZWxlY3RBbGxDaGVja2VkID0gZmFsc2U7XG4gIGRpc3BsYXlTdHJpbmcgPSAnJztcbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmZvcm1Db250cm9sLmRpc2FibGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5mb3JtQ29udHJvbC5lbmFibGUoKTtcbiAgICB9XG4gICAgdGhpcy5maWx0ZXJlZE9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRPcHRpb25zKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkVmFsdWUgPSB0aGlzLnNlbGVjdGVkT3B0aW9ucztcbiAgICB9IGVsc2UgaWYgKHRoaXMuZm9ybUNvbnRyb2wudmFsdWUpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRWYWx1ZSA9IHRoaXMuZm9ybUNvbnRyb2wudmFsdWU7XG4gICAgfVxuICB9XG5cbiAgbmdEb0NoZWNrKCkge1xuICAgIGlmICghdGhpcy5zZWxlY3RlZFZhbHVlLmxlbmd0aCkge1xuICAgICAgdGhpcy5zZWxlY3Rpb25DaGFuZ2UuZW1pdCh0aGlzLnNlbGVjdGVkVmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZURyb3Bkb3duKCkge1xuICAgIHRoaXMuc2VsZWN0RWxlbS50b2dnbGUoKTtcbiAgfVxuXG4gIHRvZ2dsZVNlbGVjdEFsbCh2YWwpIHtcbiAgICBpZiAodmFsLmNoZWNrZWQpIHtcbiAgICAgIHRoaXMuZmlsdGVyZWRPcHRpb25zLmZvckVhY2gob3B0aW9uID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLnNlbGVjdGVkVmFsdWUuaW5jbHVkZXMob3B0aW9uW3RoaXMudmFsdWVdKSkge1xuICAgICAgICAgIHRoaXMuc2VsZWN0ZWRWYWx1ZSA9IHRoaXMuc2VsZWN0ZWRWYWx1ZS5jb25jYXQoW29wdGlvblt0aGlzLnZhbHVlXV0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZmlsdGVyZWRWYWx1ZXMgPSB0aGlzLmdldEZpbHRlcmVkT3B0aW9uc1ZhbHVlcygpO1xuICAgICAgdGhpcy5zZWxlY3RlZFZhbHVlID0gdGhpcy5zZWxlY3RlZFZhbHVlLmZpbHRlcihcbiAgICAgICAgaXRlbSA9PiAhZmlsdGVyZWRWYWx1ZXMuaW5jbHVkZXMoaXRlbSlcbiAgICAgICk7XG4gICAgfVxuICAgIHRoaXMuc2VsZWN0aW9uQ2hhbmdlLmVtaXQodGhpcy5zZWxlY3RlZFZhbHVlKTtcbiAgfVxuXG4gIGZpbHRlckl0ZW0odmFsdWUpIHtcbiAgICB0aGlzLmZpbHRlcmVkT3B0aW9ucyA9IHRoaXMub3B0aW9ucy5maWx0ZXIoXG4gICAgICBpdGVtID0+IGl0ZW1bdGhpcy5kaXNwbGF5XS50b0xvd2VyQ2FzZSgpLmxvY2FsZUNvbXBhcmUodmFsdWUudG9Mb3dlckNhc2UoKSkgPiAtMVxuICAgICk7XG4gICAgdGhpcy5zZWxlY3RBbGxDaGVja2VkID0gdHJ1ZTtcbiAgICB0aGlzLmZpbHRlcmVkT3B0aW9ucy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgaWYgKHRoaXMubXVsdGlwbGUgJiYgIXRoaXMuc2VsZWN0ZWRWYWx1ZS5pbmNsdWRlcyhpdGVtW3RoaXMudmFsdWVdKSkge1xuICAgICAgICB0aGlzLnNlbGVjdEFsbENoZWNrZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoIXRoaXMuZmlsdGVyZWRPcHRpb25zLmxlbmd0aCkge1xuICAgICAgdGhpcy5zZWxlY3RBbGxDaGVja2VkID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgaGlkZU9wdGlvbihvcHRpb24pIHtcbiAgICByZXR1cm4gISh0aGlzLmZpbHRlcmVkT3B0aW9ucy5pbmRleE9mKG9wdGlvbikgPiAtMSk7XG4gIH1cblxuICAvLyBSZXR1cm5zIHBsYWluIHN0cmluZ3MgYXJyYXkgb2YgZmlsdGVyZWQgdmFsdWVzXG4gIGdldEZpbHRlcmVkT3B0aW9uc1ZhbHVlcygpIHtcbiAgICBjb25zdCBmaWx0ZXJlZFZhbHVlcyA9IFtdO1xuICAgIHRoaXMuZmlsdGVyZWRPcHRpb25zLmZvckVhY2gob3B0aW9uID0+IHtcbiAgICAgIGZpbHRlcmVkVmFsdWVzLnB1c2gob3B0aW9uLnZhbHVlKTtcbiAgICB9KTtcbiAgICByZXR1cm4gZmlsdGVyZWRWYWx1ZXM7XG4gIH1cblxuICBvbkRpc3BsYXlTdHJpbmcoKSB7XG4gICAgdGhpcy5kaXNwbGF5U3RyaW5nID0gJyc7XG4gICAgLy8gY29uc29sZS5sb2coJ1ZhbG9yIHNlbGVjY2lvbmFkbzogJyArIHRoaXMuc2VsZWN0ZWRWYWx1ZSk7XG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRWYWx1ZSkge1xuICAgICAgLy8gY29uc29sZS5sb2coJ0VudHJhIGFxdcOtLicpO1xuICAgICAgbGV0IGRpc3BsYXlPcHRpb24gPSBbXTtcbiAgICAgIGlmICh0aGlzLm11bHRpcGxlKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdNdWx0aXBsZScpO1xuICAgICAgICAvLyBNdWx0aSBzZWxlY3QgZGlzcGxheVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGFiZWxDb3VudDsgaSsrKSB7XG4gICAgICAgICAgZGlzcGxheU9wdGlvbltpXSA9IHRoaXMub3B0aW9ucy5maWx0ZXIoXG4gICAgICAgICAgICBvcHRpb24gPT4gb3B0aW9uW3RoaXMudmFsdWVdID09PSB0aGlzLnNlbGVjdGVkVmFsdWVbaV1cbiAgICAgICAgICApWzBdO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkaXNwbGF5T3B0aW9uLmxlbmd0aCkge1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGlzcGxheU9wdGlvbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGRpc3BsYXlPcHRpb25baV0gJiYgZGlzcGxheU9wdGlvbltpXVt0aGlzLmRpc3BsYXldKSB7XG4gICAgICAgICAgICAgIHRoaXMuZGlzcGxheVN0cmluZyArPSBkaXNwbGF5T3B0aW9uW2ldW3RoaXMuZGlzcGxheV0gKyAnLCc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuZGlzcGxheVN0cmluZyA9IHRoaXMuZGlzcGxheVN0cmluZy5zbGljZSgwLCAtMSk7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFZhbHVlLmxlbmd0aCA+IDEgJiZcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRWYWx1ZS5sZW5ndGggPiB0aGlzLmxhYmVsQ291bnRcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIC8vIFNlIG11ZXN0cmFuIHVub3MgcG9jb3MgZWxlbWVudG9zIGRlIGxvcyBzZWxlY2Npb25hZG9zIHkgc2UgbWVuY2lvbmFuXG4gICAgICAgICAgICAvLyBxdWUgZXhpc3RlbiBuIG3DoXMuXG4gICAgICAgICAgICB0aGlzLmRpc3BsYXlTdHJpbmcgPVxuICAgICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgKHRoaXMuZGlzcGxheVN0cmluZy5sZW5ndGggPiA0NSkgP1xuICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5U3RyaW5nLnN1YnN0cigwLCA0NSAtIDEpICsgJy4uLicgOlxuICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5U3RyaW5nXG4gICAgICAgICAgICAgICkgKyBgICh5ICR7dGhpcy5zZWxlY3RlZFZhbHVlLmxlbmd0aCAtIHRoaXMubGFiZWxDb3VudH0gbcOhcylgO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ1NpbmdsZScpO1xuICAgICAgICAvLyBTaW5nbGUgc2VsZWN0IGRpc3BsYXlcbiAgICAgICAgZGlzcGxheU9wdGlvbiA9IHRoaXMub3B0aW9ucy5maWx0ZXIoXG4gICAgICAgICAgb3B0aW9uID0+IG9wdGlvblt0aGlzLnZhbHVlXSA9PT0gdGhpcy5zZWxlY3RlZFZhbHVlXG4gICAgICAgICk7XG4gICAgICAgIGlmIChkaXNwbGF5T3B0aW9uLmxlbmd0aCkge1xuICAgICAgICAgIHRoaXMuZGlzcGxheVN0cmluZyA9IGRpc3BsYXlPcHRpb25bMF1bdGhpcy5kaXNwbGF5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5kaXNwbGF5U3RyaW5nO1xuICB9XG5cbiAgb25TZWxlY3Rpb25DaGFuZ2UodmFsKSB7XG4gICAgY29uc3QgZmlsdGVyZWRWYWx1ZXMgPSB0aGlzLmdldEZpbHRlcmVkT3B0aW9uc1ZhbHVlcygpO1xuICAgIGxldCBjb3VudCA9IDA7XG4gICAgaWYgKHRoaXMubXVsdGlwbGUpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRWYWx1ZS5maWx0ZXIoaXRlbSA9PiB7XG4gICAgICAgIGlmIChmaWx0ZXJlZFZhbHVlcy5pbmNsdWRlcyhpdGVtKSkge1xuICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5zZWxlY3RBbGxDaGVja2VkID0gY291bnQgPT09IHRoaXMuZmlsdGVyZWRPcHRpb25zLmxlbmd0aDtcbiAgICB9XG4gICAgdGhpcy5zZWxlY3RlZFZhbHVlID0gdmFsLnZhbHVlO1xuICAgIHRoaXMuc2VsZWN0aW9uQ2hhbmdlLmVtaXQodGhpcy5zZWxlY3RlZFZhbHVlKTtcbiAgfVxuXG4gIHB1YmxpYyB0cmFja0J5Rm4oaW5kZXgsIGl0ZW0pIHtcbiAgICByZXR1cm4gaXRlbS52YWx1ZTtcbiAgfVxufVxuIl19