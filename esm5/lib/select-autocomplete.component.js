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
    SelectAutocompleteComponent.ɵfac = function SelectAutocompleteComponent_Factory(t) { return new (t || SelectAutocompleteComponent)(); };
    SelectAutocompleteComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SelectAutocompleteComponent, selectors: [["mat-select-autocomplete"]], viewQuery: function SelectAutocompleteComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵstaticViewQuery(_c0, true);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.selectElem = _t.first);
        } }, inputs: { selectPlaceholder: "selectPlaceholder", placeholder: "placeholder", options: "options", disabled: "disabled", display: "display", value: "value", formControl: "formControl", errorMsg: "errorMsg", showErrorMsg: "showErrorMsg", selectedOptions: "selectedOptions", multiple: "multiple", labelCount: "labelCount", appearance: "appearance" }, outputs: { selectionChange: "selectionChange" }, features: [i0.ɵɵNgOnChangesFeature], decls: 15, vars: 14, consts: [[3, "appearance"], [3, "placeholder", "formControl", "multiple", "ngModel", "ngModelChange", "selectionChange"], ["selectElem", ""], [1, "box-search"], ["color", "primary", "class", "box-select-all", 3, "ngModel", "ngModelChange", "change", 4, "ngIf"], ["type", "text", 3, "ngClass", "placeholder", "input"], ["searchInput", ""], [1, "box-search-icon", 3, "click"], ["mat-icon-button", "", 1, "search-button"], ["aria-label", "Search icon", 1, "mat-24"], [3, "disabled", "value", "display", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["style", "color:red", 4, "ngIf"], ["color", "primary", 1, "box-select-all", 3, "ngModel", "ngModelChange", "change"], [3, "disabled", "value"], [2, "color", "red"]], template: function SelectAutocompleteComponent_Template(rf, ctx) { if (rf & 1) {
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
                template: "\n    <mat-form-field appearance=\"{{ appearance }}\">\n      <mat-select\n        #selectElem\n        [placeholder]=\"placeholder\"\n        [formControl]=\"formControl\"\n        [multiple]=\"multiple\"\n        [(ngModel)]=\"selectedValue\"\n        (selectionChange)=\"onSelectionChange($event)\"\n      >\n        <div class=\"box-search\">\n          <mat-checkbox\n            *ngIf=\"multiple\"\n            color=\"primary\"\n            class=\"box-select-all\"\n            [(ngModel)]=\"selectAllChecked\"\n            (change)=\"toggleSelectAll($event)\"\n          ></mat-checkbox>\n          <input\n            #searchInput\n            type=\"text\"\n            [ngClass]=\"{ 'pl-1': !multiple }\"\n            (input)=\"filterItem(searchInput.value)\"\n            [placeholder]=\"selectPlaceholder\"\n          />\n          <div\n            class=\"box-search-icon\"\n            (click)=\"filterItem(''); searchInput.value = ''\"\n          >\n            <button mat-icon-button class=\"search-button\">\n              <mat-icon class=\"mat-24\" aria-label=\"Search icon\">clear</mat-icon>\n            </button>\n          </div>\n        </div>\n        <mat-select-trigger>\n          {{ onDisplayString() }}\n        </mat-select-trigger>\n        <mat-option\n          *ngFor=\"let option of options; trackBy: trackByFn\"\n          [disabled]=\"option.disabled\"\n          [value]=\"option[value]\"\n          [style.display]=\"hideOption(option) ? 'none' : 'flex'\"\n          >{{ option[display] }}\n        </mat-option>\n      </mat-select>\n      <mat-hint style=\"color:red\" *ngIf=\"showErrorMsg\">{{ errorMsg }}</mat-hint>\n    </mat-form-field>\n  ",
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
        }], selectionChange: [{
            type: Output
        }], selectElem: [{
            type: ViewChild,
            args: ['selectElem', { static: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWF1dG9jb21wbGV0ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXQtc2VsZWN0LWF1dG9jb21wbGV0ZS8iLCJzb3VyY2VzIjpbImxpYi9zZWxlY3QtYXV0b2NvbXBsZXRlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBRUwsTUFBTSxFQUNOLFNBQVMsRUFFVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7Ozs7Ozs7SUFlbkMsd0NBTWdCO0lBRmQsa1BBQThCLHFOQUFBO0lBRS9CLGlCQUFlOzs7SUFGZCxrREFBOEI7OztJQXNCbEMsc0NBS0c7SUFBQSxZQUNIO0lBQUEsaUJBQWE7Ozs7SUFGWCwyRUFBc0Q7SUFGdEQsOENBQTRCLG9DQUFBO0lBRzNCLGVBQ0g7SUFERywyREFDSDs7O0lBRUYsb0NBQWlEO0lBQUEsWUFBYztJQUFBLGlCQUFXOzs7SUFBekIsZUFBYztJQUFkLHNDQUFjOzs7QUEvQ3JFO0lBNkdFO1FBekJTLHNCQUFpQixHQUFHLFdBQVcsQ0FBQztRQUdoQyxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLFlBQU8sR0FBRyxTQUFTLENBQUM7UUFDcEIsVUFBSyxHQUFHLE9BQU8sQ0FBQztRQUNoQixnQkFBVyxHQUFnQixJQUFJLFdBQVcsRUFBRSxDQUFDO1FBQzdDLGFBQVEsR0FBRyxtQkFBbUIsQ0FBQztRQUMvQixpQkFBWSxHQUFHLEtBQUssQ0FBQztRQUVyQixhQUFRLEdBQUcsSUFBSSxDQUFDO1FBRXpCLGNBQWM7UUFDTCxlQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsZUFBVSxHQUFvQyxVQUFVLENBQUM7UUFHbEUsb0JBQWUsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUl4RCxvQkFBZSxHQUFlLEVBQUUsQ0FBQztRQUNqQyxrQkFBYSxHQUFl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cHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPdXRwdXQsXHJcbiAgVmlld0NoaWxkLFxyXG4gIERvQ2hlY2tcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ21hdC1zZWxlY3QtYXV0b2NvbXBsZXRlJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG1hdC1mb3JtLWZpZWxkIGFwcGVhcmFuY2U9XCJ7eyBhcHBlYXJhbmNlIH19XCI+XHJcbiAgICAgIDxtYXQtc2VsZWN0XHJcbiAgICAgICAgI3NlbGVjdEVsZW1cclxuICAgICAgICBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIlxyXG4gICAgICAgIFtmb3JtQ29udHJvbF09XCJmb3JtQ29udHJvbFwiXHJcbiAgICAgICAgW211bHRpcGxlXT1cIm11bHRpcGxlXCJcclxuICAgICAgICBbKG5nTW9kZWwpXT1cInNlbGVjdGVkVmFsdWVcIlxyXG4gICAgICAgIChzZWxlY3Rpb25DaGFuZ2UpPVwib25TZWxlY3Rpb25DaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYm94LXNlYXJjaFwiPlxyXG4gICAgICAgICAgPG1hdC1jaGVja2JveFxyXG4gICAgICAgICAgICAqbmdJZj1cIm11bHRpcGxlXCJcclxuICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgY2xhc3M9XCJib3gtc2VsZWN0LWFsbFwiXHJcbiAgICAgICAgICAgIFsobmdNb2RlbCldPVwic2VsZWN0QWxsQ2hlY2tlZFwiXHJcbiAgICAgICAgICAgIChjaGFuZ2UpPVwidG9nZ2xlU2VsZWN0QWxsKCRldmVudClcIlxyXG4gICAgICAgICAgPjwvbWF0LWNoZWNrYm94PlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICNzZWFyY2hJbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsgJ3BsLTEnOiAhbXVsdGlwbGUgfVwiXHJcbiAgICAgICAgICAgIChpbnB1dCk9XCJmaWx0ZXJJdGVtKHNlYXJjaElucHV0LnZhbHVlKVwiXHJcbiAgICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCJzZWxlY3RQbGFjZWhvbGRlclwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzcz1cImJveC1zZWFyY2gtaWNvblwiXHJcbiAgICAgICAgICAgIChjbGljayk9XCJmaWx0ZXJJdGVtKCcnKTsgc2VhcmNoSW5wdXQudmFsdWUgPSAnJ1wiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIGNsYXNzPVwic2VhcmNoLWJ1dHRvblwiPlxyXG4gICAgICAgICAgICAgIDxtYXQtaWNvbiBjbGFzcz1cIm1hdC0yNFwiIGFyaWEtbGFiZWw9XCJTZWFyY2ggaWNvblwiPmNsZWFyPC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8bWF0LXNlbGVjdC10cmlnZ2VyPlxyXG4gICAgICAgICAge3sgb25EaXNwbGF5U3RyaW5nKCkgfX1cclxuICAgICAgICA8L21hdC1zZWxlY3QtdHJpZ2dlcj5cclxuICAgICAgICA8bWF0LW9wdGlvblxyXG4gICAgICAgICAgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBvcHRpb25zOyB0cmFja0J5OiB0cmFja0J5Rm5cIlxyXG4gICAgICAgICAgW2Rpc2FibGVkXT1cIm9wdGlvbi5kaXNhYmxlZFwiXHJcbiAgICAgICAgICBbdmFsdWVdPVwib3B0aW9uW3ZhbHVlXVwiXHJcbiAgICAgICAgICBbc3R5bGUuZGlzcGxheV09XCJoaWRlT3B0aW9uKG9wdGlvbikgPyAnbm9uZScgOiAnZmxleCdcIlxyXG4gICAgICAgICAgPnt7IG9wdGlvbltkaXNwbGF5XSB9fVxyXG4gICAgICAgIDwvbWF0LW9wdGlvbj5cclxuICAgICAgPC9tYXQtc2VsZWN0PlxyXG4gICAgICA8bWF0LWhpbnQgc3R5bGU9XCJjb2xvcjpyZWRcIiAqbmdJZj1cInNob3dFcnJvck1zZ1wiPnt7IGVycm9yTXNnIH19PC9tYXQtaGludD5cclxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgYCxcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAgICAgLmJveC1zZWFyY2gge1xyXG4gICAgICAgIG1hcmdpbjogOHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpLFxyXG4gICAgICAgICAgMCAwIDAgMXB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAyMDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIH1cclxuICAgICAgLmJveC1zZWFyY2ggaW5wdXQge1xyXG4gICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgIH1cclxuICAgICAgLmJveC1zZWxlY3QtYWxsIHtcclxuICAgICAgICB3aWR0aDogMzZweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMzNweDtcclxuICAgICAgICBjb2xvcjogIzgwODA4MDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuICAgICAgLnNlYXJjaC1idXR0b24ge1xyXG4gICAgICAgIHdpZHRoOiAzNnB4O1xyXG4gICAgICAgIGhlaWdodDogMzZweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMzNweDtcclxuICAgICAgICBjb2xvcjogIzgwODA4MDtcclxuICAgICAgfVxyXG4gICAgICAucGwtMSB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2VsZWN0QXV0b2NvbXBsZXRlQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBEb0NoZWNrIHtcclxuICBASW5wdXQoKSBzZWxlY3RQbGFjZWhvbGRlciA9ICdzZWFyY2guLi4nO1xyXG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgb3B0aW9ucztcclxuICBASW5wdXQoKSBkaXNhYmxlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGRpc3BsYXkgPSAnZGlzcGxheSc7XHJcbiAgQElucHV0KCkgdmFsdWUgPSAndmFsdWUnO1xyXG4gIEBJbnB1dCgpIGZvcm1Db250cm9sOiBGb3JtQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgpO1xyXG4gIEBJbnB1dCgpIGVycm9yTXNnID0gJ0ZpZWxkIGlzIHJlcXVpcmVkJztcclxuICBASW5wdXQoKSBzaG93RXJyb3JNc2cgPSBmYWxzZTtcclxuICBASW5wdXQoKSBzZWxlY3RlZE9wdGlvbnM7XHJcbiAgQElucHV0KCkgbXVsdGlwbGUgPSB0cnVlO1xyXG5cclxuICAvLyBOZXcgT3B0aW9uc1xyXG4gIEBJbnB1dCgpIGxhYmVsQ291bnQgPSAxO1xyXG4gIEBJbnB1dCgpIGFwcGVhcmFuY2U6ICdzdGFuZGFyZCcgfCAnZmlsbCcgfCAnb3V0bGluZScgPSAnc3RhbmRhcmQnO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBzZWxlY3Rpb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBAVmlld0NoaWxkKCdzZWxlY3RFbGVtJywgeyBzdGF0aWM6IHRydWUgfSkgc2VsZWN0RWxlbTtcclxuXHJcbiAgZmlsdGVyZWRPcHRpb25zOiBBcnJheTxhbnk+ID0gW107XHJcbiAgc2VsZWN0ZWRWYWx1ZTogQXJyYXk8YW55PiA9IFtdO1xyXG4gIHNlbGVjdEFsbENoZWNrZWQgPSBmYWxzZTtcclxuICBkaXNwbGF5U3RyaW5nID0gJyc7XHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBuZ09uQ2hhbmdlcygpIHtcclxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XHJcbiAgICAgIHRoaXMuZm9ybUNvbnRyb2wuZGlzYWJsZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5mb3JtQ29udHJvbC5lbmFibGUoKTtcclxuICAgIH1cclxuICAgIHRoaXMuZmlsdGVyZWRPcHRpb25zID0gdGhpcy5vcHRpb25zO1xyXG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRPcHRpb25zKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRWYWx1ZSA9IHRoaXMuc2VsZWN0ZWRPcHRpb25zO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmZvcm1Db250cm9sLnZhbHVlKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRWYWx1ZSA9IHRoaXMuZm9ybUNvbnRyb2wudmFsdWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ0RvQ2hlY2soKSB7XHJcbiAgICBpZiAoIXRoaXMuc2VsZWN0ZWRWYWx1ZS5sZW5ndGgpIHtcclxuICAgICAgdGhpcy5zZWxlY3Rpb25DaGFuZ2UuZW1pdCh0aGlzLnNlbGVjdGVkVmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdG9nZ2xlRHJvcGRvd24oKSB7XHJcbiAgICB0aGlzLnNlbGVjdEVsZW0udG9nZ2xlKCk7XHJcbiAgfVxyXG5cclxuICB0b2dnbGVTZWxlY3RBbGwodmFsKSB7XHJcbiAgICBpZiAodmFsLmNoZWNrZWQpIHtcclxuICAgICAgdGhpcy5maWx0ZXJlZE9wdGlvbnMuZm9yRWFjaChvcHRpb24gPT4ge1xyXG4gICAgICAgIGlmICghdGhpcy5zZWxlY3RlZFZhbHVlLmluY2x1ZGVzKG9wdGlvblt0aGlzLnZhbHVlXSkpIHtcclxuICAgICAgICAgIHRoaXMuc2VsZWN0ZWRWYWx1ZSA9IHRoaXMuc2VsZWN0ZWRWYWx1ZS5jb25jYXQoW29wdGlvblt0aGlzLnZhbHVlXV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBmaWx0ZXJlZFZhbHVlcyA9IHRoaXMuZ2V0RmlsdGVyZWRPcHRpb25zVmFsdWVzKCk7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRWYWx1ZSA9IHRoaXMuc2VsZWN0ZWRWYWx1ZS5maWx0ZXIoXHJcbiAgICAgICAgaXRlbSA9PiAhZmlsdGVyZWRWYWx1ZXMuaW5jbHVkZXMoaXRlbSlcclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIHRoaXMuc2VsZWN0aW9uQ2hhbmdlLmVtaXQodGhpcy5zZWxlY3RlZFZhbHVlKTtcclxuICB9XHJcblxyXG4gIGZpbHRlckl0ZW0odmFsdWUpIHtcclxuICAgIHRoaXMuZmlsdGVyZWRPcHRpb25zID0gdGhpcy5vcHRpb25zLmZpbHRlcihcclxuICAgICAgaXRlbSA9PiBpdGVtW3RoaXMuZGlzcGxheV0udG9Mb3dlckNhc2UoKS5pbmRleE9mKHZhbHVlLnRvTG93ZXJDYXNlKCkpID4gLTFcclxuICAgICk7XHJcbiAgICB0aGlzLnNlbGVjdEFsbENoZWNrZWQgPSB0cnVlO1xyXG4gICAgdGhpcy5maWx0ZXJlZE9wdGlvbnMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgaWYgKCF0aGlzLnNlbGVjdGVkVmFsdWUuaW5jbHVkZXMoaXRlbVt0aGlzLnZhbHVlXSkpIHtcclxuICAgICAgICB0aGlzLnNlbGVjdEFsbENoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBpZiAoIXRoaXMuZmlsdGVyZWRPcHRpb25zLmxlbmd0aCkge1xyXG4gICAgICB0aGlzLnNlbGVjdEFsbENoZWNrZWQgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhpZGVPcHRpb24ob3B0aW9uKSB7XHJcbiAgICByZXR1cm4gISh0aGlzLmZpbHRlcmVkT3B0aW9ucy5pbmRleE9mKG9wdGlvbikgPiAtMSk7XHJcbiAgfVxyXG5cclxuICAvLyBSZXR1cm5zIHBsYWluIHN0cmluZ3MgYXJyYXkgb2YgZmlsdGVyZWQgdmFsdWVzXHJcbiAgZ2V0RmlsdGVyZWRPcHRpb25zVmFsdWVzKCkge1xyXG4gICAgY29uc3QgZmlsdGVyZWRWYWx1ZXMgPSBbXTtcclxuICAgIHRoaXMuZmlsdGVyZWRPcHRpb25zLmZvckVhY2gob3B0aW9uID0+IHtcclxuICAgICAgZmlsdGVyZWRWYWx1ZXMucHVzaChvcHRpb24udmFsdWUpO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gZmlsdGVyZWRWYWx1ZXM7XHJcbiAgfVxyXG5cclxuICBvbkRpc3BsYXlTdHJpbmcoKSB7XHJcbiAgICB0aGlzLmRpc3BsYXlTdHJpbmcgPSAnJztcclxuICAgIC8vIGNvbnNvbGUubG9nKCdWYWxvciBzZWxlY2Npb25hZG86ICcgKyB0aGlzLnNlbGVjdGVkVmFsdWUpO1xyXG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRWYWx1ZSkge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZygnRW50cmEgYXF1w60uJyk7XHJcbiAgICAgIGxldCBkaXNwbGF5T3B0aW9uID0gW107XHJcbiAgICAgIGlmICh0aGlzLm11bHRpcGxlKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ011bHRpcGxlJyk7XHJcbiAgICAgICAgLy8gTXVsdGkgc2VsZWN0IGRpc3BsYXlcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGFiZWxDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICBkaXNwbGF5T3B0aW9uW2ldID0gdGhpcy5vcHRpb25zLmZpbHRlcihcclxuICAgICAgICAgICAgb3B0aW9uID0+IG9wdGlvblt0aGlzLnZhbHVlXSA9PT0gdGhpcy5zZWxlY3RlZFZhbHVlW2ldXHJcbiAgICAgICAgICApWzBdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZGlzcGxheU9wdGlvbi5sZW5ndGgpIHtcclxuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGlzcGxheU9wdGlvbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZGlzcGxheU9wdGlvbltpXSAmJiBkaXNwbGF5T3B0aW9uW2ldW3RoaXMuZGlzcGxheV0pIHtcclxuICAgICAgICAgICAgICB0aGlzLmRpc3BsYXlTdHJpbmcgKz0gZGlzcGxheU9wdGlvbltpXVt0aGlzLmRpc3BsYXldICsgJywnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGlzLmRpc3BsYXlTdHJpbmcgPSB0aGlzLmRpc3BsYXlTdHJpbmcuc2xpY2UoMCwgLTEpO1xyXG4gICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkVmFsdWUubGVuZ3RoID4gMSAmJlxyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkVmFsdWUubGVuZ3RoID4gdGhpcy5sYWJlbENvdW50XHJcbiAgICAgICAgICApIHtcclxuICAgICAgICAgICAgLy8gU2UgbXVlc3RyYW4gdW5vcyBwb2NvcyBlbGVtZW50b3MgZGUgbG9zIHNlbGVjY2lvbmFkb3MgeSBzZSBtZW5jaW9uYW5cclxuICAgICAgICAgICAgLy8gcXVlIGV4aXN0ZW4gbiBtw6FzLlxyXG4gICAgICAgICAgICB0aGlzLmRpc3BsYXlTdHJpbmcgPVxyXG4gICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICh0aGlzLmRpc3BsYXlTdHJpbmcubGVuZ3RoID4gNDUpID9cclxuICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5U3RyaW5nLnN1YnN0cigwLCA0NSAtIDEpICsgJy4uLicgOlxyXG4gICAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXlTdHJpbmdcclxuICAgICAgICAgICAgICApICsgYCAoeSAke3RoaXMuc2VsZWN0ZWRWYWx1ZS5sZW5ndGggLSB0aGlzLmxhYmVsQ291bnR9IG3DoXMpYDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ1NpbmdsZScpO1xyXG4gICAgICAgIC8vIFNpbmdsZSBzZWxlY3QgZGlzcGxheVxyXG4gICAgICAgIGRpc3BsYXlPcHRpb24gPSB0aGlzLm9wdGlvbnMuZmlsdGVyKFxyXG4gICAgICAgICAgb3B0aW9uID0+IG9wdGlvblt0aGlzLnZhbHVlXSA9PT0gdGhpcy5zZWxlY3RlZFZhbHVlXHJcbiAgICAgICAgKTtcclxuICAgICAgICBpZiAoZGlzcGxheU9wdGlvbi5sZW5ndGgpIHtcclxuICAgICAgICAgIHRoaXMuZGlzcGxheVN0cmluZyA9IGRpc3BsYXlPcHRpb25bMF1bdGhpcy5kaXNwbGF5XTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5zZWxlY3RlZFZhbHVlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuZGlzcGxheVN0cmluZztcclxuICB9XHJcblxyXG4gIG9uU2VsZWN0aW9uQ2hhbmdlKHZhbCkge1xyXG4gICAgY29uc3QgZmlsdGVyZWRWYWx1ZXMgPSB0aGlzLmdldEZpbHRlcmVkT3B0aW9uc1ZhbHVlcygpO1xyXG4gICAgbGV0IGNvdW50ID0gMDtcclxuICAgIGlmICh0aGlzLm11bHRpcGxlKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRWYWx1ZS5maWx0ZXIoaXRlbSA9PiB7XHJcbiAgICAgICAgaWYgKGZpbHRlcmVkVmFsdWVzLmluY2x1ZGVzKGl0ZW0pKSB7XHJcbiAgICAgICAgICBjb3VudCsrO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMuc2VsZWN0QWxsQ2hlY2tlZCA9IGNvdW50ID09PSB0aGlzLmZpbHRlcmVkT3B0aW9ucy5sZW5ndGg7XHJcbiAgICB9XHJcbiAgICB0aGlzLnNlbGVjdGVkVmFsdWUgPSB2YWwudmFsdWU7XHJcbiAgICB0aGlzLnNlbGVjdGlvbkNoYW5nZS5lbWl0KHRoaXMuc2VsZWN0ZWRWYWx1ZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdHJhY2tCeUZuKGluZGV4LCBpdGVtKSB7XHJcbiAgICByZXR1cm4gaXRlbS52YWx1ZTtcclxuICB9XHJcbn1cclxuIl19