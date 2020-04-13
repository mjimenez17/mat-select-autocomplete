import { __decorate, __metadata } from "tslib";
import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
let SelectAutocompleteComponent = class SelectAutocompleteComponent {
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
        styles: [`
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
    `]
    }),
    __metadata("design:paramtypes", [])
], SelectAutocompleteComponent);
export { SelectAutocompleteComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWF1dG9jb21wbGV0ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXQtc2VsZWN0LWF1dG9jb21wbGV0ZS8iLCJzb3VyY2VzIjpbImxpYi9zZWxlY3QtYXV0b2NvbXBsZXRlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUVMLE1BQU0sRUFDTixTQUFTLEVBRVYsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBcUY3QyxJQUFhLDJCQUEyQixHQUF4QyxNQUFhLDJCQUEyQjtJQTBCdEM7UUF6QlMsc0JBQWlCLEdBQUcsV0FBVyxDQUFDO1FBR2hDLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsWUFBTyxHQUFHLFNBQVMsQ0FBQztRQUNwQixVQUFLLEdBQUcsT0FBTyxDQUFDO1FBQ2hCLGdCQUFXLEdBQWdCLElBQUksV0FBVyxFQUFFLENBQUM7UUFDN0MsYUFBUSxHQUFHLG1CQUFtQixDQUFDO1FBQy9CLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBRXJCLGFBQVEsR0FBRyxJQUFJLENBQUM7UUFFekIsY0FBYztRQUNMLGVBQVUsR0FBRyxDQUFDLENBQUM7UUFDZixlQUFVLEdBQW9DLFVBQVUsQ0FBQztRQUdsRSxvQkFBZSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBSXhELG9CQUFlLEdBQWUsRUFBRSxDQUFDO1FBQ2pDLGtCQUFhLEdBQWUsRUFBRSxDQUFDO1FBQy9CLHFCQUFnQixHQUFHLEtBQUssQ0FBQztRQUN6QixrQkFBYSxHQUFHLEVBQUUsQ0FBQztJQUNKLENBQUM7SUFFaEIsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQzVCO2FBQU07WUFDTCxJQUFJLENBQUMsV0FBVyxD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LFlBQVksRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQzs7K0RBQVk7QUFwQjNDLDJCQUEyQjtJQW5GdkMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLHlCQUF5QjtRQUNuQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBK0NUO2lCQUVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQTZCQztLQUVKLENBQUM7O0dBQ1csMkJBQTJCLENBb0t2QztTQXBLWSwyQkFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE91dHB1dCxcclxuICBWaWV3Q2hpbGQsXHJcbiAgRG9DaGVja1xyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbWF0LXNlbGVjdC1hdXRvY29tcGxldGUnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bWF0LWZvcm0tZmllbGQgYXBwZWFyYW5jZT1cInt7IGFwcGVhcmFuY2UgfX1cIj5cclxuICAgICAgPG1hdC1zZWxlY3RcclxuICAgICAgICAjc2VsZWN0RWxlbVxyXG4gICAgICAgIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiXHJcbiAgICAgICAgW2Zvcm1Db250cm9sXT1cImZvcm1Db250cm9sXCJcclxuICAgICAgICBbbXVsdGlwbGVdPVwibXVsdGlwbGVcIlxyXG4gICAgICAgIFsobmdNb2RlbCldPVwic2VsZWN0ZWRWYWx1ZVwiXHJcbiAgICAgICAgKHNlbGVjdGlvbkNoYW5nZSk9XCJvblNlbGVjdGlvbkNoYW5nZSgkZXZlbnQpXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJib3gtc2VhcmNoXCI+XHJcbiAgICAgICAgICA8bWF0LWNoZWNrYm94XHJcbiAgICAgICAgICAgICpuZ0lmPVwibXVsdGlwbGVcIlxyXG4gICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICBjbGFzcz1cImJveC1zZWxlY3QtYWxsXCJcclxuICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJzZWxlY3RBbGxDaGVja2VkXCJcclxuICAgICAgICAgICAgKGNoYW5nZSk9XCJ0b2dnbGVTZWxlY3RBbGwoJGV2ZW50KVwiXHJcbiAgICAgICAgICA+PC9tYXQtY2hlY2tib3g+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgI3NlYXJjaElucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgW25nQ2xhc3NdPVwieyAncGwtMSc6ICFtdWx0aXBsZSB9XCJcclxuICAgICAgICAgICAgKGlucHV0KT1cImZpbHRlckl0ZW0oc2VhcmNoSW5wdXQudmFsdWUpXCJcclxuICAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cInNlbGVjdFBsYWNlaG9sZGVyXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzPVwiYm94LXNlYXJjaC1pY29uXCJcclxuICAgICAgICAgICAgKGNsaWNrKT1cImZpbHRlckl0ZW0oJycpOyBzZWFyY2hJbnB1dC52YWx1ZSA9ICcnXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gY2xhc3M9XCJzZWFyY2gtYnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgPG1hdC1pY29uIGNsYXNzPVwibWF0LTI0XCIgYXJpYS1sYWJlbD1cIlNlYXJjaCBpY29uXCI+Y2xlYXI8L21hdC1pY29uPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxtYXQtc2VsZWN0LXRyaWdnZXI+XHJcbiAgICAgICAgICB7eyBvbkRpc3BsYXlTdHJpbmcoKSB9fVxyXG4gICAgICAgIDwvbWF0LXNlbGVjdC10cmlnZ2VyPlxyXG4gICAgICAgIDxtYXQtb3B0aW9uXHJcbiAgICAgICAgICAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIG9wdGlvbnM7IHRyYWNrQnk6IHRyYWNrQnlGblwiXHJcbiAgICAgICAgICBbZGlzYWJsZWRdPVwib3B0aW9uLmRpc2FibGVkXCJcclxuICAgICAgICAgIFt2YWx1ZV09XCJvcHRpb25bdmFsdWVdXCJcclxuICAgICAgICAgIFtzdHlsZS5kaXNwbGF5XT1cImhpZGVPcHRpb24ob3B0aW9uKSA/ICdub25lJyA6ICdmbGV4J1wiXHJcbiAgICAgICAgICA+e3sgb3B0aW9uW2Rpc3BsYXldIH19XHJcbiAgICAgICAgPC9tYXQtb3B0aW9uPlxyXG4gICAgICA8L21hdC1zZWxlY3Q+XHJcbiAgICAgIDxtYXQtaGludCBzdHlsZT1cImNvbG9yOnJlZFwiICpuZ0lmPVwic2hvd0Vycm9yTXNnXCI+e3sgZXJyb3JNc2cgfX08L21hdC1oaW50PlxyXG4gICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICBgLFxyXG4gIHN0eWxlczogW1xyXG4gICAgYFxyXG4gICAgICAuYm94LXNlYXJjaCB7XHJcbiAgICAgICAgbWFyZ2luOiA4cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNiksXHJcbiAgICAgICAgICAwIDAgMCAxcHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcclxuICAgICAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDIwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgfVxyXG4gICAgICAuYm94LXNlYXJjaCBpbnB1dCB7XHJcbiAgICAgICAgZmxleDogMTtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgICAuYm94LXNlbGVjdC1hbGwge1xyXG4gICAgICAgIHdpZHRoOiAzNnB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzM3B4O1xyXG4gICAgICAgIGNvbG9yOiAjODA4MDgwO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgICAuc2VhcmNoLWJ1dHRvbiB7XHJcbiAgICAgICAgd2lkdGg6IDM2cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzNnB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzM3B4O1xyXG4gICAgICAgIGNvbG9yOiAjODA4MDgwO1xyXG4gICAgICB9XHJcbiAgICAgIC5wbC0xIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XHJcbiAgICAgIH1cclxuICAgIGBcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZWxlY3RBdXRvY29tcGxldGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIERvQ2hlY2sge1xyXG4gIEBJbnB1dCgpIHNlbGVjdFBsYWNlaG9sZGVyID0gJ3NlYXJjaC4uLic7XHJcbiAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZztcclxuICBASW5wdXQoKSBvcHRpb25zO1xyXG4gIEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgZGlzcGxheSA9ICdkaXNwbGF5JztcclxuICBASW5wdXQoKSB2YWx1ZSA9ICd2YWx1ZSc7XHJcbiAgQElucHV0KCkgZm9ybUNvbnRyb2w6IEZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKCk7XHJcbiAgQElucHV0KCkgZXJyb3JNc2cgPSAnRmllbGQgaXMgcmVxdWlyZWQnO1xyXG4gIEBJbnB1dCgpIHNob3dFcnJvck1zZyA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHNlbGVjdGVkT3B0aW9ucztcclxuICBASW5wdXQoKSBtdWx0aXBsZSA9IHRydWU7XHJcblxyXG4gIC8vIE5ldyBPcHRpb25zXHJcbiAgQElucHV0KCkgbGFiZWxDb3VudCA9IDE7XHJcbiAgQElucHV0KCkgYXBwZWFyYW5jZTogJ3N0YW5kYXJkJyB8ICdmaWxsJyB8ICdvdXRsaW5lJyA9ICdzdGFuZGFyZCc7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHNlbGVjdGlvbkNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ3NlbGVjdEVsZW0nLCB7IHN0YXRpYzogdHJ1ZSB9KSBzZWxlY3RFbGVtO1xyXG5cclxuICBmaWx0ZXJlZE9wdGlvbnM6IEFycmF5PGFueT4gPSBbXTtcclxuICBzZWxlY3RlZFZhbHVlOiBBcnJheTxhbnk+ID0gW107XHJcbiAgc2VsZWN0QWxsQ2hlY2tlZCA9IGZhbHNlO1xyXG4gIGRpc3BsYXlTdHJpbmcgPSAnJztcclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIG5nT25DaGFuZ2VzKCkge1xyXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcclxuICAgICAgdGhpcy5mb3JtQ29udHJvbC5kaXNhYmxlKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmZvcm1Db250cm9sLmVuYWJsZSgpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5maWx0ZXJlZE9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XHJcbiAgICBpZiAodGhpcy5zZWxlY3RlZE9wdGlvbnMpIHtcclxuICAgICAgdGhpcy5zZWxlY3RlZFZhbHVlID0gdGhpcy5zZWxlY3RlZE9wdGlvbnM7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuZm9ybUNvbnRyb2wudmFsdWUpIHtcclxuICAgICAgdGhpcy5zZWxlY3RlZFZhbHVlID0gdGhpcy5mb3JtQ29udHJvbC52YWx1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nRG9DaGVjaygpIHtcclxuICAgIGlmICghdGhpcy5zZWxlY3RlZFZhbHVlLmxlbmd0aCkge1xyXG4gICAgICB0aGlzLnNlbGVjdGlvbkNoYW5nZS5lbWl0KHRoaXMuc2VsZWN0ZWRWYWx1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0b2dnbGVEcm9wZG93bigpIHtcclxuICAgIHRoaXMuc2VsZWN0RWxlbS50b2dnbGUoKTtcclxuICB9XHJcblxyXG4gIHRvZ2dsZVNlbGVjdEFsbCh2YWwpIHtcclxuICAgIGlmICh2YWwuY2hlY2tlZCkge1xyXG4gICAgICB0aGlzLmZpbHRlcmVkT3B0aW9ucy5mb3JFYWNoKG9wdGlvbiA9PiB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnNlbGVjdGVkVmFsdWUuaW5jbHVkZXMob3B0aW9uW3RoaXMudmFsdWVdKSkge1xyXG4gICAgICAgICAgdGhpcy5zZWxlY3RlZFZhbHVlID0gdGhpcy5zZWxlY3RlZFZhbHVlLmNvbmNhdChbb3B0aW9uW3RoaXMudmFsdWVdXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGZpbHRlcmVkVmFsdWVzID0gdGhpcy5nZXRGaWx0ZXJlZE9wdGlvbnNWYWx1ZXMoKTtcclxuICAgICAgdGhpcy5zZWxlY3RlZFZhbHVlID0gdGhpcy5zZWxlY3RlZFZhbHVlLmZpbHRlcihcclxuICAgICAgICBpdGVtID0+ICFmaWx0ZXJlZFZhbHVlcy5pbmNsdWRlcyhpdGVtKVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZWxlY3Rpb25DaGFuZ2UuZW1pdCh0aGlzLnNlbGVjdGVkVmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgZmlsdGVySXRlbSh2YWx1ZSkge1xyXG4gICAgdGhpcy5maWx0ZXJlZE9wdGlvbnMgPSB0aGlzLm9wdGlvbnMuZmlsdGVyKFxyXG4gICAgICBpdGVtID0+IGl0ZW1bdGhpcy5kaXNwbGF5XS50b0xvd2VyQ2FzZSgpLmluZGV4T2YodmFsdWUudG9Mb3dlckNhc2UoKSkgPiAtMVxyXG4gICAgKTtcclxuICAgIHRoaXMuc2VsZWN0QWxsQ2hlY2tlZCA9IHRydWU7XHJcbiAgICB0aGlzLmZpbHRlcmVkT3B0aW9ucy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICBpZiAoIXRoaXMuc2VsZWN0ZWRWYWx1ZS5pbmNsdWRlcyhpdGVtW3RoaXMudmFsdWVdKSkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0QWxsQ2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIGlmICghdGhpcy5maWx0ZXJlZE9wdGlvbnMubGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0QWxsQ2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGlkZU9wdGlvbihvcHRpb24pIHtcclxuICAgIHJldHVybiAhKHRoaXMuZmlsdGVyZWRPcHRpb25zLmluZGV4T2Yob3B0aW9uKSA+IC0xKTtcclxuICB9XHJcblxyXG4gIC8vIFJldHVybnMgcGxhaW4gc3RyaW5ncyBhcnJheSBvZiBmaWx0ZXJlZCB2YWx1ZXNcclxuICBnZXRGaWx0ZXJlZE9wdGlvbnNWYWx1ZXMoKSB7XHJcbiAgICBjb25zdCBmaWx0ZXJlZFZhbHVlcyA9IFtdO1xyXG4gICAgdGhpcy5maWx0ZXJlZE9wdGlvbnMuZm9yRWFjaChvcHRpb24gPT4ge1xyXG4gICAgICBmaWx0ZXJlZFZhbHVlcy5wdXNoKG9wdGlvbi52YWx1ZSk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBmaWx0ZXJlZFZhbHVlcztcclxuICB9XHJcblxyXG4gIG9uRGlzcGxheVN0cmluZygpIHtcclxuICAgIHRoaXMuZGlzcGxheVN0cmluZyA9ICcnO1xyXG4gICAgLy8gY29uc29sZS5sb2coJ1ZhbG9yIHNlbGVjY2lvbmFkbzogJyArIHRoaXMuc2VsZWN0ZWRWYWx1ZSk7XHJcbiAgICBpZiAodGhpcy5zZWxlY3RlZFZhbHVlKSB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdFbnRyYSBhcXXDrS4nKTtcclxuICAgICAgbGV0IGRpc3BsYXlPcHRpb24gPSBbXTtcclxuICAgICAgaWYgKHRoaXMubXVsdGlwbGUpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnTXVsdGlwbGUnKTtcclxuICAgICAgICAvLyBNdWx0aSBzZWxlY3QgZGlzcGxheVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sYWJlbENvdW50OyBpKyspIHtcclxuICAgICAgICAgIGRpc3BsYXlPcHRpb25baV0gPSB0aGlzLm9wdGlvbnMuZmlsdGVyKFxyXG4gICAgICAgICAgICBvcHRpb24gPT4gb3B0aW9uW3RoaXMudmFsdWVdID09PSB0aGlzLnNlbGVjdGVkVmFsdWVbaV1cclxuICAgICAgICAgIClbMF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChkaXNwbGF5T3B0aW9uLmxlbmd0aCkge1xyXG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkaXNwbGF5T3B0aW9uLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChkaXNwbGF5T3B0aW9uW2ldICYmIGRpc3BsYXlPcHRpb25baV1bdGhpcy5kaXNwbGF5XSkge1xyXG4gICAgICAgICAgICAgIHRoaXMuZGlzcGxheVN0cmluZyArPSBkaXNwbGF5T3B0aW9uW2ldW3RoaXMuZGlzcGxheV0gKyAnLCc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRoaXMuZGlzcGxheVN0cmluZyA9IHRoaXMuZGlzcGxheVN0cmluZy5zbGljZSgwLCAtMSk7XHJcbiAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRWYWx1ZS5sZW5ndGggPiAxICYmXHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRWYWx1ZS5sZW5ndGggPiB0aGlzLmxhYmVsQ291bnRcclxuICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAvLyBTZSBtdWVzdHJhbiB1bm9zIHBvY29zIGVsZW1lbnRvcyBkZSBsb3Mgc2VsZWNjaW9uYWRvcyB5IHNlIG1lbmNpb25hblxyXG4gICAgICAgICAgICAvLyBxdWUgZXhpc3RlbiBuIG3DoXMuXHJcbiAgICAgICAgICAgIHRoaXMuZGlzcGxheVN0cmluZyA9XHJcbiAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgKHRoaXMuZGlzcGxheVN0cmluZy5sZW5ndGggPiA0NSkgP1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXlTdHJpbmcuc3Vic3RyKDAsIDQ1IC0gMSkgKyAnLi4uJyA6XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheVN0cmluZ1xyXG4gICAgICAgICAgICAgICkgKyBgICh5ICR7dGhpcy5zZWxlY3RlZFZhbHVlLmxlbmd0aCAtIHRoaXMubGFiZWxDb3VudH0gbcOhcylgO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnU2luZ2xlJyk7XHJcbiAgICAgICAgLy8gU2luZ2xlIHNlbGVjdCBkaXNwbGF5XHJcbiAgICAgICAgZGlzcGxheU9wdGlvbiA9IHRoaXMub3B0aW9ucy5maWx0ZXIoXHJcbiAgICAgICAgICBvcHRpb24gPT4gb3B0aW9uW3RoaXMudmFsdWVdID09PSB0aGlzLnNlbGVjdGVkVmFsdWVcclxuICAgICAgICApO1xyXG4gICAgICAgIGlmIChkaXNwbGF5T3B0aW9uLmxlbmd0aCkge1xyXG4gICAgICAgICAgdGhpcy5kaXNwbGF5U3RyaW5nID0gZGlzcGxheU9wdGlvblswXVt0aGlzLmRpc3BsYXldO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnNlbGVjdGVkVmFsdWUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5kaXNwbGF5U3RyaW5nO1xyXG4gIH1cclxuXHJcbiAgb25TZWxlY3Rpb25DaGFuZ2UodmFsKSB7XHJcbiAgICBjb25zdCBmaWx0ZXJlZFZhbHVlcyA9IHRoaXMuZ2V0RmlsdGVyZWRPcHRpb25zVmFsdWVzKCk7XHJcbiAgICBsZXQgY291bnQgPSAwO1xyXG4gICAgaWYgKHRoaXMubXVsdGlwbGUpIHtcclxuICAgICAgdGhpcy5zZWxlY3RlZFZhbHVlLmZpbHRlcihpdGVtID0+IHtcclxuICAgICAgICBpZiAoZmlsdGVyZWRWYWx1ZXMuaW5jbHVkZXMoaXRlbSkpIHtcclxuICAgICAgICAgIGNvdW50Kys7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5zZWxlY3RBbGxDaGVja2VkID0gY291bnQgPT09IHRoaXMuZmlsdGVyZWRPcHRpb25zLmxlbmd0aDtcclxuICAgIH1cclxuICAgIHRoaXMuc2VsZWN0ZWRWYWx1ZSA9IHZhbC52YWx1ZTtcclxuICAgIHRoaXMuc2VsZWN0aW9uQ2hhbmdlLmVtaXQodGhpcy5zZWxlY3RlZFZhbHVlKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB0cmFja0J5Rm4oaW5kZXgsIGl0ZW0pIHtcclxuICAgIHJldHVybiBpdGVtLnZhbHVlO1xyXG4gIH1cclxufVxyXG4iXX0=