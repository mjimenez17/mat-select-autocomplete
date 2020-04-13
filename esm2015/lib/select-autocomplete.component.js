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
const _c0 = ["selectElem"];
function SelectAutocompleteComponent_mat_checkbox_4_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-checkbox", 12);
    i0.ɵɵlistener("ngModelChange", function SelectAutocompleteComponent_mat_checkbox_4_Template_mat_checkbox_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.selectAllChecked = $event; })("change", function SelectAutocompleteComponent_mat_checkbox_4_Template_mat_checkbox_change_0_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.toggleSelectAll($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngModel", ctx_r1.selectAllChecked);
} }
function SelectAutocompleteComponent_mat_option_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 13);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r8 = ctx.$implicit;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("display", ctx_r3.hideOption(option_r8) ? "none" : "flex");
    i0.ɵɵproperty("disabled", option_r8.disabled)("value", option_r8[ctx_r3.value]);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", option_r8[ctx_r3.display], " ");
} }
function SelectAutocompleteComponent_mat_hint_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-hint", 14);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r4.errorMsg);
} }
const _c1 = function (a0) { return { "pl-1": a0 }; };
export class SelectAutocompleteComponent {
    constructor() {
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
    ngOnChanges() {
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
    }
    ngDoCheck() {
        if (!this.selectedValue.length) {
            this.selectionChange.emit(this.selectedValue);
        }
    }
    toggleDropdown() {
        this.selectElem.toggle();
    }
    toggleSelectAll(val) {
        if (val.checked) {
            this.filteredOptions.forEach(option => {
                if (!this.selectedValue.includes(option[this.value])) {
                    this.selectedValue = this.selectedValue.concat([option[this.value]]);
                }
            });
        }
        else {
            const filteredValues = this.getFilteredOptionsValues();
            this.selectedValue = this.selectedValue.filter(item => !filteredValues.includes(item));
        }
        this.selectionChange.emit(this.selectedValue);
    }
    filterItem(value) {
        this.filteredOptions = this.options.filter(item => item[this.display].toLowerCase().indexOf(value.toLowerCase()) > -1);
        this.selectAllChecked = true;
        this.filteredOptions.forEach(item => {
            if (!this.selectedValue.includes(item[this.value])) {
                this.selectAllChecked = false;
            }
        });
        if (!this.filteredOptions.length) {
            this.selectAllChecked = false;
        }
    }
    hideOption(option) {
        return !(this.filteredOptions.indexOf(option) > -1);
    }
    // Returns plain strings array of filtered values
    getFilteredOptionsValues() {
        const filteredValues = [];
        this.filteredOptions.forEach(option => {
            filteredValues.push(option.value);
        });
        return filteredValues;
    }
    onDisplayString() {
        this.displayString = '';
        // console.log('Valor seleccionado: ' + this.selectedValue);
        if (this.selectedValue) {
            // console.log('Entra aquí.');
            let displayOption = [];
            if (this.multiple) {
                // console.log('Multiple');
                // Multi select display
                for (let i = 0; i < this.labelCount; i++) {
                    displayOption[i] = this.options.filter(option => option[this.value] === this.selectedValue[i])[0];
                }
                if (displayOption.length) {
                    for (let i = 0; i < displayOption.length; i++) {
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
                                this.displayString) + ` (y ${this.selectedValue.length - this.labelCount} más)`;
                    }
                }
            }
            else {
                // console.log('Single');
                // Single select display
                displayOption = this.options.filter(option => option[this.value] === this.selectedValue);
                if (displayOption.length) {
                    this.displayString = displayOption[0][this.display];
                }
                // console.log(this.selectedValue);
            }
        }
        return this.displayString;
    }
    onSelectionChange(val) {
        const filteredValues = this.getFilteredOptionsValues();
        let count = 0;
        if (this.multiple) {
            this.selectedValue.filter(item => {
                if (filteredValues.includes(item)) {
                    count++;
                }
            });
            this.selectAllChecked = count === this.filteredOptions.length;
        }
        this.selectedValue = val.value;
        this.selectionChange.emit(this.selectedValue);
    }
    trackByFn(index, item) {
        return item.value;
    }
}
SelectAutocompleteComponent.ɵfac = function SelectAutocompleteComponent_Factory(t) { return new (t || SelectAutocompleteComponent)(); };
SelectAutocompleteComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SelectAutocompleteComponent, selectors: [["mat-select-autocomplete"]], viewQuery: function SelectAutocompleteComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵstaticViewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.selectElem = _t.first);
    } }, inputs: { selectPlaceholder: "selectPlaceholder", placeholder: "placeholder", options: "options", disabled: "disabled", display: "display", value: "value", formControl: "formControl", errorMsg: "errorMsg", showErrorMsg: "showErrorMsg", selectedOptions: "selectedOptions", multiple: "multiple", labelCount: "labelCount", appearance: "appearance" }, outputs: { selectionChange: "selectionChange" }, features: [i0.ɵɵNgOnChangesFeature], decls: 15, vars: 14, consts: [[3, "appearance"], [3, "placeholder", "formControl", "multiple", "ngModel", "ngModelChange", "selectionChange"], ["selectElem", ""], [1, "box-search"], ["color", "primary", "class", "box-select-all", 3, "ngModel", "ngModelChange", "change", 4, "ngIf"], ["type", "text", 3, "ngClass", "placeholder", "input"], ["searchInput", ""], [1, "box-search-icon", 3, "click"], ["mat-icon-button", "", 1, "search-button"], ["aria-label", "Search icon", 1, "mat-24"], [3, "disabled", "value", "display", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["style", "color:red", 4, "ngIf"], ["color", "primary", 1, "box-select-all", 3, "ngModel", "ngModelChange", "change"], [3, "disabled", "value"], [2, "color", "red"]], template: function SelectAutocompleteComponent_Template(rf, ctx) { if (rf & 1) {
        const _r9 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "mat-form-field", 0);
        i0.ɵɵelementStart(1, "mat-select", 1, 2);
        i0.ɵɵlistener("ngModelChange", function SelectAutocompleteComponent_Template_mat_select_ngModelChange_1_listener($event) { return ctx.selectedValue = $event; })("selectionChange", function SelectAutocompleteComponent_Template_mat_select_selectionChange_1_listener($event) { return ctx.onSelectionChange($event); });
        i0.ɵɵelementStart(3, "div", 3);
        i0.ɵɵtemplate(4, SelectAutocompleteComponent_mat_checkbox_4_Template, 1, 1, "mat-checkbox", 4);
        i0.ɵɵelementStart(5, "input", 5, 6);
        i0.ɵɵlistener("input", function SelectAutocompleteComponent_Template_input_input_5_listener() { i0.ɵɵrestoreView(_r9); const _r2 = i0.ɵɵreference(6); return ctx.filterItem(_r2.value); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "div", 7);
        i0.ɵɵlistener("click", function SelectAutocompleteComponent_Template_div_click_7_listener() { i0.ɵɵrestoreView(_r9); const _r2 = i0.ɵɵreference(6); ctx.filterItem(""); return _r2.value = ""; });
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
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SelectAutocompleteComponent, [{
        type: Component,
        args: [{
                selector: 'mat-select-autocomplete',
                template: `
    <mat-form-field appearance="{{ appearance }}">
      <mat-select
        #selectElem
        [placeholder]="placeholder"
        [formControl]="formControl"
        [multiple]="multiple"
        [(ngModel)]="selectedValue"
        (selectionChange)="onSelectionChange($event)"
      >
        <div class="box-search">
          <mat-checkbox
            *ngIf="multiple"
            color="primary"
            class="box-select-all"
            [(ngModel)]="selectAllChecked"
            (change)="toggleSelectAll($event)"
          ></mat-checkbox>
          <input
            #searchInput
            type="text"
            [ngClass]="{ 'pl-1': !multiple }"
            (input)="filterItem(searchInput.value)"
            [placeholder]="selectPlaceholder"
          />
          <div
            class="box-search-icon"
            (click)="filterItem(''); searchInput.value = ''"
          >
            <button mat-icon-button class="search-button">
              <mat-icon class="mat-24" aria-label="Search icon">clear</mat-icon>
            </button>
          </div>
        </div>
        <mat-select-trigger>
          {{ onDisplayString() }}
        </mat-select-trigger>
        <mat-option
          *ngFor="let option of options; trackBy: trackByFn"
          [disabled]="option.disabled"
          [value]="option[value]"
          [style.display]="hideOption(option) ? 'none' : 'flex'"
          >{{ option[display] }}
        </mat-option>
      </mat-select>
      <mat-hint style="color:red" *ngIf="showErrorMsg">{{ errorMsg }}</mat-hint>
    </mat-form-field>
  `,
                styles: [
                    `
      .box-search {
        margin: 8px;
        border-radius: 2px;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16),
          0 0 0 1px rgba(0, 0, 0, 0.08);
        transition: box-shadow 200ms cubic-bezier(0.4, 0, 0.2, 1);
        display: flex;
      }
      .box-search input {
        flex: 1;
        border: none;
        outline: none;
      }
      .box-select-all {
        width: 36px;
        line-height: 33px;
        color: #808080;
        text-align: center;
      }
      .search-button {
        width: 36px;
        height: 36px;
        line-height: 33px;
        color: #808080;
      }
      .pl-1 {
        padding-left: 1rem;
      }
    `
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWF1dG9jb21wbGV0ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXQtc2VsZWN0LWF1dG9jb21wbGV0ZS8iLCJzb3VyY2VzIjpbImxpYi9zZWxlY3QtYXV0b2NvbXBsZXRlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBRUwsTUFBTSxFQUNOLFNBQVMsRUFFVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7Ozs7Ozs7SUFlbkMsd0NBTWdCO0lBRmQsaVBBQThCLG9OQUFBO0lBRS9CLGlCQUFlOzs7SUFGZCxpREFBOEI7OztJQXNCbEMsc0NBS0c7SUFBQSxZQUNIO0lBQUEsaUJBQWE7Ozs7SUFGWCx5RUFBc0Q7SUFGdEQsNkNBQTRCLGtDQUFBO0lBRzNCLGVBQ0g7SUFERyx5REFDSDs7O0lBRUYsb0NBQWlEO0lBQUEsWUFBYztJQUFBLGlCQUFXOzs7SUFBekIsZUFBYztJQUFkLHFDQUFjOzs7QUFvQ3JFLE1BQU0sT0FBTywyQkFBMkI7SUEwQnRDO1FBekJTLHNCQUFpQixHQUFHLFdBQVcsQ0FBQztRQUdoQyxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLFlBQU8sR0FBRyxTQUFTLENBQUM7UUFDcEIsVUFBSyxHQUFHLE9BQU8sQ0FBQztRQUNoQixnQkFBVyxHQUFnQixJQUFJLFdBQVcsRUFBRSxDQUFDO1FBQzdDLGFBQVEsR0FBRyxtQkFBbUIsQ0FBQztRQUMvQixpQkFBWSxHQUFHLEtBQUssQ0FBQztRQUVyQixhQUFRLEdBQUcsSUFBSSxDQUFDO1FBRXpCLGNBQWM7UUFDTCxlQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsZUFBVSxHQUFvQyxVQUFVLENBQUM7UUFHbEUsb0JBQWUsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUl4RCxvQkFBZSxHQUFlLEVBQUUsQ0FB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QUs7UUFBQSxpQkFBVztRQUNwRSxpQkFBUztRQUNYLGlCQUFNO1FBQ1IsaUJBQU07UUFDTiwyQ0FDRTtRQUFBLGFBQ0Y7UUFBQSxpQkFBcUI7UUFDckIsNkZBS0c7UUFFTCxpQkFBYTtRQUNiLHlGQUFpRDtRQUNuRCxpQkFBaUI7O1FBN0NELHNEQUE2QjtRQUd6QyxlQUEyQjtRQUEzQiw2Q0FBMkIsZ0NBQUEsMEJBQUEsOEJBQUE7UUFRdkIsZUFBZ0I7UUFBaEIsbUNBQWdCO1FBU2hCLGVBQWlDO1FBQWpDLG9FQUFpQyxzQ0FBQTtRQWNuQyxlQUNGO1FBREUsc0RBQ0Y7UUFFRSxlQUFrRDtRQUFsRCxxQ0FBa0QsK0JBQUE7UUFPMUIsZUFBb0I7UUFBcEIsdUNBQW9COztrREFvQ3pDLDJCQUEyQjtjQW5GdkMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx5QkFBeUI7Z0JBQ25DLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0ErQ1Q7Z0JBQ0QsTUFBTSxFQUFFO29CQUNOOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQTZCQztpQkFDRjthQUNGOztrQkFFRSxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFHTCxLQUFLOztrQkFDTCxLQUFLOztrQkFFTCxNQUFNOztrQkFHTixTQUFTO21CQUFDLFlBQVksRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE91dHB1dCxcclxuICBWaWV3Q2hpbGQsXHJcbiAgRG9DaGVja1xyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbWF0LXNlbGVjdC1hdXRvY29tcGxldGUnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bWF0LWZvcm0tZmllbGQgYXBwZWFyYW5jZT1cInt7IGFwcGVhcmFuY2UgfX1cIj5cclxuICAgICAgPG1hdC1zZWxlY3RcclxuICAgICAgICAjc2VsZWN0RWxlbVxyXG4gICAgICAgIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiXHJcbiAgICAgICAgW2Zvcm1Db250cm9sXT1cImZvcm1Db250cm9sXCJcclxuICAgICAgICBbbXVsdGlwbGVdPVwibXVsdGlwbGVcIlxyXG4gICAgICAgIFsobmdNb2RlbCldPVwic2VsZWN0ZWRWYWx1ZVwiXHJcbiAgICAgICAgKHNlbGVjdGlvbkNoYW5nZSk9XCJvblNlbGVjdGlvbkNoYW5nZSgkZXZlbnQpXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJib3gtc2VhcmNoXCI+XHJcbiAgICAgICAgICA8bWF0LWNoZWNrYm94XHJcbiAgICAgICAgICAgICpuZ0lmPVwibXVsdGlwbGVcIlxyXG4gICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICBjbGFzcz1cImJveC1zZWxlY3QtYWxsXCJcclxuICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJzZWxlY3RBbGxDaGVja2VkXCJcclxuICAgICAgICAgICAgKGNoYW5nZSk9XCJ0b2dnbGVTZWxlY3RBbGwoJGV2ZW50KVwiXHJcbiAgICAgICAgICA+PC9tYXQtY2hlY2tib3g+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgI3NlYXJjaElucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgW25nQ2xhc3NdPVwieyAncGwtMSc6ICFtdWx0aXBsZSB9XCJcclxuICAgICAgICAgICAgKGlucHV0KT1cImZpbHRlckl0ZW0oc2VhcmNoSW5wdXQudmFsdWUpXCJcclxuICAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cInNlbGVjdFBsYWNlaG9sZGVyXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzPVwiYm94LXNlYXJjaC1pY29uXCJcclxuICAgICAgICAgICAgKGNsaWNrKT1cImZpbHRlckl0ZW0oJycpOyBzZWFyY2hJbnB1dC52YWx1ZSA9ICcnXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gY2xhc3M9XCJzZWFyY2gtYnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgPG1hdC1pY29uIGNsYXNzPVwibWF0LTI0XCIgYXJpYS1sYWJlbD1cIlNlYXJjaCBpY29uXCI+Y2xlYXI8L21hdC1pY29uPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxtYXQtc2VsZWN0LXRyaWdnZXI+XHJcbiAgICAgICAgICB7eyBvbkRpc3BsYXlTdHJpbmcoKSB9fVxyXG4gICAgICAgIDwvbWF0LXNlbGVjdC10cmlnZ2VyPlxyXG4gICAgICAgIDxtYXQtb3B0aW9uXHJcbiAgICAgICAgICAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIG9wdGlvbnM7IHRyYWNrQnk6IHRyYWNrQnlGblwiXHJcbiAgICAgICAgICBbZGlzYWJsZWRdPVwib3B0aW9uLmRpc2FibGVkXCJcclxuICAgICAgICAgIFt2YWx1ZV09XCJvcHRpb25bdmFsdWVdXCJcclxuICAgICAgICAgIFtzdHlsZS5kaXNwbGF5XT1cImhpZGVPcHRpb24ob3B0aW9uKSA/ICdub25lJyA6ICdmbGV4J1wiXHJcbiAgICAgICAgICA+e3sgb3B0aW9uW2Rpc3BsYXldIH19XHJcbiAgICAgICAgPC9tYXQtb3B0aW9uPlxyXG4gICAgICA8L21hdC1zZWxlY3Q+XHJcbiAgICAgIDxtYXQtaGludCBzdHlsZT1cImNvbG9yOnJlZFwiICpuZ0lmPVwic2hvd0Vycm9yTXNnXCI+e3sgZXJyb3JNc2cgfX08L21hdC1oaW50PlxyXG4gICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICBgLFxyXG4gIHN0eWxlczogW1xyXG4gICAgYFxyXG4gICAgICAuYm94LXNlYXJjaCB7XHJcbiAgICAgICAgbWFyZ2luOiA4cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNiksXHJcbiAgICAgICAgICAwIDAgMCAxcHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcclxuICAgICAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDIwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgfVxyXG4gICAgICAuYm94LXNlYXJjaCBpbnB1dCB7XHJcbiAgICAgICAgZmxleDogMTtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgICAuYm94LXNlbGVjdC1hbGwge1xyXG4gICAgICAgIHdpZHRoOiAzNnB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzM3B4O1xyXG4gICAgICAgIGNvbG9yOiAjODA4MDgwO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgICAuc2VhcmNoLWJ1dHRvbiB7XHJcbiAgICAgICAgd2lkdGg6IDM2cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzNnB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzM3B4O1xyXG4gICAgICAgIGNvbG9yOiAjODA4MDgwO1xyXG4gICAgICB9XHJcbiAgICAgIC5wbC0xIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XHJcbiAgICAgIH1cclxuICAgIGBcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZWxlY3RBdXRvY29tcGxldGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIERvQ2hlY2sge1xyXG4gIEBJbnB1dCgpIHNlbGVjdFBsYWNlaG9sZGVyID0gJ3NlYXJjaC4uLic7XHJcbiAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZztcclxuICBASW5wdXQoKSBvcHRpb25zO1xyXG4gIEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgZGlzcGxheSA9ICdkaXNwbGF5JztcclxuICBASW5wdXQoKSB2YWx1ZSA9ICd2YWx1ZSc7XHJcbiAgQElucHV0KCkgZm9ybUNvbnRyb2w6IEZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKCk7XHJcbiAgQElucHV0KCkgZXJyb3JNc2cgPSAnRmllbGQgaXMgcmVxdWlyZWQnO1xyXG4gIEBJbnB1dCgpIHNob3dFcnJvck1zZyA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHNlbGVjdGVkT3B0aW9ucztcclxuICBASW5wdXQoKSBtdWx0aXBsZSA9IHRydWU7XHJcblxyXG4gIC8vIE5ldyBPcHRpb25zXHJcbiAgQElucHV0KCkgbGFiZWxDb3VudCA9IDE7XHJcbiAgQElucHV0KCkgYXBwZWFyYW5jZTogJ3N0YW5kYXJkJyB8ICdmaWxsJyB8ICdvdXRsaW5lJyA9ICdzdGFuZGFyZCc7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHNlbGVjdGlvbkNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ3NlbGVjdEVsZW0nLCB7IHN0YXRpYzogdHJ1ZSB9KSBzZWxlY3RFbGVtO1xyXG5cclxuICBmaWx0ZXJlZE9wdGlvbnM6IEFycmF5PGFueT4gPSBbXTtcclxuICBzZWxlY3RlZFZhbHVlOiBBcnJheTxhbnk+ID0gW107XHJcbiAgc2VsZWN0QWxsQ2hlY2tlZCA9IGZhbHNlO1xyXG4gIGRpc3BsYXlTdHJpbmcgPSAnJztcclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIG5nT25DaGFuZ2VzKCkge1xyXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcclxuICAgICAgdGhpcy5mb3JtQ29udHJvbC5kaXNhYmxlKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmZvcm1Db250cm9sLmVuYWJsZSgpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5maWx0ZXJlZE9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XHJcbiAgICBpZiAodGhpcy5zZWxlY3RlZE9wdGlvbnMpIHtcclxuICAgICAgdGhpcy5zZWxlY3RlZFZhbHVlID0gdGhpcy5zZWxlY3RlZE9wdGlvbnM7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuZm9ybUNvbnRyb2wudmFsdWUpIHtcclxuICAgICAgdGhpcy5zZWxlY3RlZFZhbHVlID0gdGhpcy5mb3JtQ29udHJvbC52YWx1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nRG9DaGVjaygpIHtcclxuICAgIGlmICghdGhpcy5zZWxlY3RlZFZhbHVlLmxlbmd0aCkge1xyXG4gICAgICB0aGlzLnNlbGVjdGlvbkNoYW5nZS5lbWl0KHRoaXMuc2VsZWN0ZWRWYWx1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0b2dnbGVEcm9wZG93bigpIHtcclxuICAgIHRoaXMuc2VsZWN0RWxlbS50b2dnbGUoKTtcclxuICB9XHJcblxyXG4gIHRvZ2dsZVNlbGVjdEFsbCh2YWwpIHtcclxuICAgIGlmICh2YWwuY2hlY2tlZCkge1xyXG4gICAgICB0aGlzLmZpbHRlcmVkT3B0aW9ucy5mb3JFYWNoKG9wdGlvbiA9PiB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnNlbGVjdGVkVmFsdWUuaW5jbHVkZXMob3B0aW9uW3RoaXMudmFsdWVdKSkge1xyXG4gICAgICAgICAgdGhpcy5zZWxlY3RlZFZhbHVlID0gdGhpcy5zZWxlY3RlZFZhbHVlLmNvbmNhdChbb3B0aW9uW3RoaXMudmFsdWVdXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGZpbHRlcmVkVmFsdWVzID0gdGhpcy5nZXRGaWx0ZXJlZE9wdGlvbnNWYWx1ZXMoKTtcclxuICAgICAgdGhpcy5zZWxlY3RlZFZhbHVlID0gdGhpcy5zZWxlY3RlZFZhbHVlLmZpbHRlcihcclxuICAgICAgICBpdGVtID0+ICFmaWx0ZXJlZFZhbHVlcy5pbmNsdWRlcyhpdGVtKVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZWxlY3Rpb25DaGFuZ2UuZW1pdCh0aGlzLnNlbGVjdGVkVmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgZmlsdGVySXRlbSh2YWx1ZSkge1xyXG4gICAgdGhpcy5maWx0ZXJlZE9wdGlvbnMgPSB0aGlzLm9wdGlvbnMuZmlsdGVyKFxyXG4gICAgICBpdGVtID0+IGl0ZW1bdGhpcy5kaXNwbGF5XS50b0xvd2VyQ2FzZSgpLmluZGV4T2YodmFsdWUudG9Mb3dlckNhc2UoKSkgPiAtMVxyXG4gICAgKTtcclxuICAgIHRoaXMuc2VsZWN0QWxsQ2hlY2tlZCA9IHRydWU7XHJcbiAgICB0aGlzLmZpbHRlcmVkT3B0aW9ucy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICBpZiAoIXRoaXMuc2VsZWN0ZWRWYWx1ZS5pbmNsdWRlcyhpdGVtW3RoaXMudmFsdWVdKSkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0QWxsQ2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIGlmICghdGhpcy5maWx0ZXJlZE9wdGlvbnMubGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0QWxsQ2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGlkZU9wdGlvbihvcHRpb24pIHtcclxuICAgIHJldHVybiAhKHRoaXMuZmlsdGVyZWRPcHRpb25zLmluZGV4T2Yob3B0aW9uKSA+IC0xKTtcclxuICB9XHJcblxyXG4gIC8vIFJldHVybnMgcGxhaW4gc3RyaW5ncyBhcnJheSBvZiBmaWx0ZXJlZCB2YWx1ZXNcclxuICBnZXRGaWx0ZXJlZE9wdGlvbnNWYWx1ZXMoKSB7XHJcbiAgICBjb25zdCBmaWx0ZXJlZFZhbHVlcyA9IFtdO1xyXG4gICAgdGhpcy5maWx0ZXJlZE9wdGlvbnMuZm9yRWFjaChvcHRpb24gPT4ge1xyXG4gICAgICBmaWx0ZXJlZFZhbHVlcy5wdXNoKG9wdGlvbi52YWx1ZSk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBmaWx0ZXJlZFZhbHVlcztcclxuICB9XHJcblxyXG4gIG9uRGlzcGxheVN0cmluZygpIHtcclxuICAgIHRoaXMuZGlzcGxheVN0cmluZyA9ICcnO1xyXG4gICAgLy8gY29uc29sZS5sb2coJ1ZhbG9yIHNlbGVjY2lvbmFkbzogJyArIHRoaXMuc2VsZWN0ZWRWYWx1ZSk7XHJcbiAgICBpZiAodGhpcy5zZWxlY3RlZFZhbHVlKSB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdFbnRyYSBhcXXDrS4nKTtcclxuICAgICAgbGV0IGRpc3BsYXlPcHRpb24gPSBbXTtcclxuICAgICAgaWYgKHRoaXMubXVsdGlwbGUpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnTXVsdGlwbGUnKTtcclxuICAgICAgICAvLyBNdWx0aSBzZWxlY3QgZGlzcGxheVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sYWJlbENvdW50OyBpKyspIHtcclxuICAgICAgICAgIGRpc3BsYXlPcHRpb25baV0gPSB0aGlzLm9wdGlvbnMuZmlsdGVyKFxyXG4gICAgICAgICAgICBvcHRpb24gPT4gb3B0aW9uW3RoaXMudmFsdWVdID09PSB0aGlzLnNlbGVjdGVkVmFsdWVbaV1cclxuICAgICAgICAgIClbMF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChkaXNwbGF5T3B0aW9uLmxlbmd0aCkge1xyXG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkaXNwbGF5T3B0aW9uLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChkaXNwbGF5T3B0aW9uW2ldICYmIGRpc3BsYXlPcHRpb25baV1bdGhpcy5kaXNwbGF5XSkge1xyXG4gICAgICAgICAgICAgIHRoaXMuZGlzcGxheVN0cmluZyArPSBkaXNwbGF5T3B0aW9uW2ldW3RoaXMuZGlzcGxheV0gKyAnLCc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRoaXMuZGlzcGxheVN0cmluZyA9IHRoaXMuZGlzcGxheVN0cmluZy5zbGljZSgwLCAtMSk7XHJcbiAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRWYWx1ZS5sZW5ndGggPiAxICYmXHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRWYWx1ZS5sZW5ndGggPiB0aGlzLmxhYmVsQ291bnRcclxuICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAvLyBTZSBtdWVzdHJhbiB1bm9zIHBvY29zIGVsZW1lbnRvcyBkZSBsb3Mgc2VsZWNjaW9uYWRvcyB5IHNlIG1lbmNpb25hblxyXG4gICAgICAgICAgICAvLyBxdWUgZXhpc3RlbiBuIG3DoXMuXHJcbiAgICAgICAgICAgIHRoaXMuZGlzcGxheVN0cmluZyA9XHJcbiAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgKHRoaXMuZGlzcGxheVN0cmluZy5sZW5ndGggPiA0NSkgP1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXlTdHJpbmcuc3Vic3RyKDAsIDQ1IC0gMSkgKyAnLi4uJyA6XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheVN0cmluZ1xyXG4gICAgICAgICAgICAgICkgKyBgICh5ICR7dGhpcy5zZWxlY3RlZFZhbHVlLmxlbmd0aCAtIHRoaXMubGFiZWxDb3VudH0gbcOhcylgO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnU2luZ2xlJyk7XHJcbiAgICAgICAgLy8gU2luZ2xlIHNlbGVjdCBkaXNwbGF5XHJcbiAgICAgICAgZGlzcGxheU9wdGlvbiA9IHRoaXMub3B0aW9ucy5maWx0ZXIoXHJcbiAgICAgICAgICBvcHRpb24gPT4gb3B0aW9uW3RoaXMudmFsdWVdID09PSB0aGlzLnNlbGVjdGVkVmFsdWVcclxuICAgICAgICApO1xyXG4gICAgICAgIGlmIChkaXNwbGF5T3B0aW9uLmxlbmd0aCkge1xyXG4gICAgICAgICAgdGhpcy5kaXNwbGF5U3RyaW5nID0gZGlzcGxheU9wdGlvblswXVt0aGlzLmRpc3BsYXldO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnNlbGVjdGVkVmFsdWUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5kaXNwbGF5U3RyaW5nO1xyXG4gIH1cclxuXHJcbiAgb25TZWxlY3Rpb25DaGFuZ2UodmFsKSB7XHJcbiAgICBjb25zdCBmaWx0ZXJlZFZhbHVlcyA9IHRoaXMuZ2V0RmlsdGVyZWRPcHRpb25zVmFsdWVzKCk7XHJcbiAgICBsZXQgY291bnQgPSAwO1xyXG4gICAgaWYgKHRoaXMubXVsdGlwbGUpIHtcclxuICAgICAgdGhpcy5zZWxlY3RlZFZhbHVlLmZpbHRlcihpdGVtID0+IHtcclxuICAgICAgICBpZiAoZmlsdGVyZWRWYWx1ZXMuaW5jbHVkZXMoaXRlbSkpIHtcclxuICAgICAgICAgIGNvdW50Kys7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5zZWxlY3RBbGxDaGVja2VkID0gY291bnQgPT09IHRoaXMuZmlsdGVyZWRPcHRpb25zLmxlbmd0aDtcclxuICAgIH1cclxuICAgIHRoaXMuc2VsZWN0ZWRWYWx1ZSA9IHZhbC52YWx1ZTtcclxuICAgIHRoaXMuc2VsZWN0aW9uQ2hhbmdlLmVtaXQodGhpcy5zZWxlY3RlZFZhbHVlKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB0cmFja0J5Rm4oaW5kZXgsIGl0ZW0pIHtcclxuICAgIHJldHVybiBpdGVtLnZhbHVlO1xyXG4gIH1cclxufVxyXG4iXX0=