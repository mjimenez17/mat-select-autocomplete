import { ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, ɵɵgetCurrentView, ɵɵelementStart, ɵɵlistener, ɵɵrestoreView, ɵɵnextContext, ɵɵelementEnd, ɵɵproperty, ɵɵtext, ɵɵstyleProp, ɵɵadvance, ɵɵtextInterpolate1, ɵɵtextInterpolate, EventEmitter, ɵɵdefineComponent, ɵɵstaticViewQuery, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵNgOnChangesFeature, ɵɵtemplate, ɵɵreference, ɵɵpropertyInterpolate, ɵɵpureFunction1, Component, Input, Output, ViewChild, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { FormControl, NgControlStatus, FormControlDirective, NgModel, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatHint, MatFormFieldModule } from '@angular/material/form-field';
import { MatSelect, MatSelectTrigger, MatSelectModule } from '@angular/material/select';
import { NgIf, NgClass, NgForOf, CommonModule } from '@angular/common';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatCheckbox, MatCheckboxModule } from '@angular/material/checkbox';
import { MatOption } from '@angular/material/core';

class SelectAutocompleteService {
    constructor() {
    }
}
SelectAutocompleteService.ɵfac = function SelectAutocompleteService_Factory(t) { return new (t || SelectAutocompleteService)(); };
SelectAutocompleteService.ɵprov = ɵɵdefineInjectable({ token: SelectAutocompleteService, factory: SelectAutocompleteService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SelectAutocompleteService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

const _c0 = ["selectElem"];
function SelectAutocompleteComponent_mat_checkbox_4_Template(rf, ctx) { if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-checkbox", 12);
    ɵɵlistener("ngModelChange", function SelectAutocompleteComponent_mat_checkbox_4_Template_mat_checkbox_ngModelChange_0_listener($event) { ɵɵrestoreView(_r6); const ctx_r5 = ɵɵnextContext(); return ctx_r5.selectAllChecked = $event; })("change", function SelectAutocompleteComponent_mat_checkbox_4_Template_mat_checkbox_change_0_listener($event) { ɵɵrestoreView(_r6); const ctx_r7 = ɵɵnextContext(); return ctx_r7.toggleSelectAll($event); });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngModel", ctx_r1.selectAllChecked);
} }
function SelectAutocompleteComponent_mat_option_13_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-option", 13);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const option_r8 = ctx.$implicit;
    const ctx_r3 = ɵɵnextContext();
    ɵɵstyleProp("display", ctx_r3.hideOption(option_r8) ? "none" : "flex");
    ɵɵproperty("disabled", option_r8.disabled)("value", option_r8[ctx_r3.value]);
    ɵɵadvance(1);
    ɵɵtextInterpolate1("", option_r8[ctx_r3.display], " ");
} }
function SelectAutocompleteComponent_mat_hint_14_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-hint", 14);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r4.errorMsg);
} }
const _c1 = function (a0) { return { "pl-1": a0 }; };
class SelectAutocompleteComponent {
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
SelectAutocompleteComponent.ɵcmp = ɵɵdefineComponent({ type: SelectAutocompleteComponent, selectors: [["mat-select-autocomplete"]], viewQuery: function SelectAutocompleteComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵstaticViewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.selectElem = _t.first);
    } }, inputs: { selectPlaceholder: "selectPlaceholder", placeholder: "placeholder", options: "options", disabled: "disabled", display: "display", value: "value", formControl: "formControl", errorMsg: "errorMsg", showErrorMsg: "showErrorMsg", selectedOptions: "selectedOptions", multiple: "multiple", labelCount: "labelCount", appearance: "appearance" }, outputs: { selectionChange: "selectionChange" }, features: [ɵɵNgOnChangesFeature], decls: 15, vars: 14, consts: [[3, "appearance"], [3, "placeholder", "formControl", "multiple", "ngModel", "ngModelChange", "selectionChange"], ["selectElem", ""], [1, "box-search"], ["color", "primary", "class", "box-select-all", 3, "ngModel", "ngModelChange", "change", 4, "ngIf"], ["type", "text", 3, "ngClass", "placeholder", "input"], ["searchInput", ""], [1, "box-search-icon", 3, "click"], ["mat-icon-button", "", 1, "search-button"], ["aria-label", "Search icon", 1, "mat-24"], [3, "disabled", "value", "display", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["style", "color:red", 4, "ngIf"], ["color", "primary", 1, "box-select-all", 3, "ngModel", "ngModelChange", "change"], [3, "disabled", "value"], [2, "color", "red"]], template: function SelectAutocompleteComponent_Template(rf, ctx) { if (rf & 1) {
        const _r9 = ɵɵgetCurrentView();
        ɵɵelementStart(0, "mat-form-field", 0);
        ɵɵelementStart(1, "mat-select", 1, 2);
        ɵɵlistener("ngModelChange", function SelectAutocompleteComponent_Template_mat_select_ngModelChange_1_listener($event) { return ctx.selectedValue = $event; })("selectionChange", function SelectAutocompleteComponent_Template_mat_select_selectionChange_1_listener($event) { return ctx.onSelectionChange($event); });
        ɵɵelementStart(3, "div", 3);
        ɵɵtemplate(4, SelectAutocompleteComponent_mat_checkbox_4_Template, 1, 1, "mat-checkbox", 4);
        ɵɵelementStart(5, "input", 5, 6);
        ɵɵlistener("input", function SelectAutocompleteComponent_Template_input_input_5_listener() { ɵɵrestoreView(_r9); const _r2 = ɵɵreference(6); return ctx.filterItem(_r2.value); });
        ɵɵelementEnd();
        ɵɵelementStart(7, "div", 7);
        ɵɵlistener("click", function SelectAutocompleteComponent_Template_div_click_7_listener() { ɵɵrestoreView(_r9); const _r2 = ɵɵreference(6); ctx.filterItem(""); return _r2.value = ""; });
        ɵɵelementStart(8, "button", 8);
        ɵɵelementStart(9, "mat-icon", 9);
        ɵɵtext(10, "clear");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(11, "mat-select-trigger");
        ɵɵtext(12);
        ɵɵelementEnd();
        ɵɵtemplate(13, SelectAutocompleteComponent_mat_option_13_Template, 2, 5, "mat-option", 10);
        ɵɵelementEnd();
        ɵɵtemplate(14, SelectAutocompleteComponent_mat_hint_14_Template, 2, 1, "mat-hint", 11);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵpropertyInterpolate("appearance", ctx.appearance);
        ɵɵadvance(1);
        ɵɵproperty("placeholder", ctx.placeholder)("formControl", ctx.formControl)("multiple", ctx.multiple)("ngModel", ctx.selectedValue);
        ɵɵadvance(3);
        ɵɵproperty("ngIf", ctx.multiple);
        ɵɵadvance(1);
        ɵɵproperty("ngClass", ɵɵpureFunction1(12, _c1, !ctx.multiple))("placeholder", ctx.selectPlaceholder);
        ɵɵadvance(7);
        ɵɵtextInterpolate1(" ", ctx.onDisplayString(), " ");
        ɵɵadvance(1);
        ɵɵproperty("ngForOf", ctx.options)("ngForTrackBy", ctx.trackByFn);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.showErrorMsg);
    } }, directives: [MatFormField, MatSelect, NgControlStatus, FormControlDirective, NgIf, NgClass, MatButton, MatIcon, MatSelectTrigger, NgForOf, MatCheckbox, NgModel, MatOption, MatHint], styles: [".box-search[_ngcontent-%COMP%] {\n        margin: 8px;\n        border-radius: 2px;\n        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16),\n          0 0 0 1px rgba(0, 0, 0, 0.08);\n        transition: box-shadow 200ms cubic-bezier(0.4, 0, 0.2, 1);\n        display: flex;\n      }\n      .box-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n        flex: 1;\n        border: none;\n        outline: none;\n      }\n      .box-select-all[_ngcontent-%COMP%] {\n        width: 36px;\n        line-height: 33px;\n        color: #808080;\n        text-align: center;\n      }\n      .search-button[_ngcontent-%COMP%] {\n        width: 36px;\n        height: 36px;\n        line-height: 33px;\n        color: #808080;\n      }\n      .pl-1[_ngcontent-%COMP%] {\n        padding-left: 1rem;\n      }"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SelectAutocompleteComponent, [{
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

class SelectAutocompleteModule {
}
SelectAutocompleteModule.ɵmod = ɵɵdefineNgModule({ type: SelectAutocompleteModule });
SelectAutocompleteModule.ɵinj = ɵɵdefineInjector({ factory: function SelectAutocompleteModule_Factory(t) { return new (t || SelectAutocompleteModule)(); }, imports: [[
            FormsModule,
            CommonModule,
            MatIconModule,
            MatButtonModule,
            MatSelectModule,
            MatCheckboxModule,
            MatFormFieldModule,
            ReactiveFormsModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(SelectAutocompleteModule, { declarations: [SelectAutocompleteComponent], imports: [FormsModule,
        CommonModule,
        MatIconModule,
        MatButtonModule,
        MatSelectModule,
        MatCheckboxModule,
        MatFormFieldModule,
        ReactiveFormsModule], exports: [SelectAutocompleteComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(SelectAutocompleteModule, [{
        type: NgModule,
        args: [{
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
            }]
    }], null, null); })();

/*
 * Public API Surface of select-autocomplete
 */

/**
 * Generated bundle index. Do not edit.
 */

export { SelectAutocompleteComponent, SelectAutocompleteModule, SelectAutocompleteService };
//# sourceMappingURL=mat-select-autocomplete.js.map
