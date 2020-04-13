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
        this.disableOptionCentering = false;
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
        template: `
    <mat-form-field appearance="{{ appearance }}">
      <mat-select
        #selectElem
        [placeholder]="placeholder"
        [formControl]="formControl"
        [multiple]="multiple"
        [(ngModel)]="selectedValue"
        (selectionChange)="onSelectionChange($event)"
        disableOptionCentering="disableOptionCentering"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWF1dG9jb21wbGV0ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXQtc2VsZWN0LWF1dG9jb21wbGV0ZS8iLCJzb3VyY2VzIjpbImxpYi9zZWxlY3QtYXV0b2NvbXBsZXRlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUVMLE1BQU0sRUFDTixTQUFTLEVBRVYsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBc0Y3QyxJQUFhLDJCQUEyQixHQUF4QyxNQUFhLDJCQUEyQjtJQTJCdEM7UUExQlMsc0JBQWlCLEdBQUcsV0FBVyxDQUFDO1FBR2hDLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsWUFBTyxHQUFHLFNBQVMsQ0FBQztRQUNwQixVQUFLLEdBQUcsT0FBTyxDQUFDO1FBQ2hCLGdCQUFXLEdBQWdCLElBQUksV0FBVyxFQUFFLENBQUM7UUFDN0MsYUFBUSxHQUFHLG1CQUFtQixDQUFDO1FBQy9CLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBRXJCLGFBQVEsR0FBRyxJQUFJLENBQUM7UUFFekIsY0FBYztRQUNMLGVBQVUsR0FBRyxDQUFDLENBQUM7UUFDZixlQUFVLEdBQW9DLFVBQVUsQ0FBQztRQUN6RCwyQkFBc0IsR0FBRyxLQUFLLENBQUM7UUFHeEMsb0JBQWUsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUl4RCxvQkFBZSxHQUFlLEVBQUUsQ0FBQztRQUNqQyxrQkFBYSxHQUFlLEVBQUUsQ0FBQztRQUMvQixxQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFDekIsa0JBQWEsR0FBRyxFQUFFLENBQUM7SUFDSixDQUFDO0lBRWhCLFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUM1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R3hDO0lBREMsTUFBTSxFQUFFOzhCQUNRLFlBQVk7b0VBQTJCO0FBRWI7SUFBMUMsU0FBUyxDQUFDLFlBQVksRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQzs7K0RBQVk7QUFyQjNDLDJCQUEyQjtJQXBGdkMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLHlCQUF5QjtRQUNuQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWdEVDtpQkFFQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0E2QkM7S0FFSixDQUFDOztHQUNXLDJCQUEyQixDQXFLdkM7U0FyS1ksMkJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPdXRwdXQsXHJcbiAgVmlld0NoaWxkLFxyXG4gIERvQ2hlY2tcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ21hdC1zZWxlY3QtYXV0b2NvbXBsZXRlJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG1hdC1mb3JtLWZpZWxkIGFwcGVhcmFuY2U9XCJ7eyBhcHBlYXJhbmNlIH19XCI+XHJcbiAgICAgIDxtYXQtc2VsZWN0XHJcbiAgICAgICAgI3NlbGVjdEVsZW1cclxuICAgICAgICBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIlxyXG4gICAgICAgIFtmb3JtQ29udHJvbF09XCJmb3JtQ29udHJvbFwiXHJcbiAgICAgICAgW211bHRpcGxlXT1cIm11bHRpcGxlXCJcclxuICAgICAgICBbKG5nTW9kZWwpXT1cInNlbGVjdGVkVmFsdWVcIlxyXG4gICAgICAgIChzZWxlY3Rpb25DaGFuZ2UpPVwib25TZWxlY3Rpb25DaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICAgICAgZGlzYWJsZU9wdGlvbkNlbnRlcmluZz1cImRpc2FibGVPcHRpb25DZW50ZXJpbmdcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImJveC1zZWFyY2hcIj5cclxuICAgICAgICAgIDxtYXQtY2hlY2tib3hcclxuICAgICAgICAgICAgKm5nSWY9XCJtdWx0aXBsZVwiXHJcbiAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgIGNsYXNzPVwiYm94LXNlbGVjdC1hbGxcIlxyXG4gICAgICAgICAgICBbKG5nTW9kZWwpXT1cInNlbGVjdEFsbENoZWNrZWRcIlxyXG4gICAgICAgICAgICAoY2hhbmdlKT1cInRvZ2dsZVNlbGVjdEFsbCgkZXZlbnQpXCJcclxuICAgICAgICAgID48L21hdC1jaGVja2JveD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAjc2VhcmNoSW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBbbmdDbGFzc109XCJ7ICdwbC0xJzogIW11bHRpcGxlIH1cIlxyXG4gICAgICAgICAgICAoaW5wdXQpPVwiZmlsdGVySXRlbShzZWFyY2hJbnB1dC52YWx1ZSlcIlxyXG4gICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwic2VsZWN0UGxhY2Vob2xkZXJcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3M9XCJib3gtc2VhcmNoLWljb25cIlxyXG4gICAgICAgICAgICAoY2xpY2spPVwiZmlsdGVySXRlbSgnJyk7IHNlYXJjaElucHV0LnZhbHVlID0gJydcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBjbGFzcz1cInNlYXJjaC1idXR0b25cIj5cclxuICAgICAgICAgICAgICA8bWF0LWljb24gY2xhc3M9XCJtYXQtMjRcIiBhcmlhLWxhYmVsPVwiU2VhcmNoIGljb25cIj5jbGVhcjwvbWF0LWljb24+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPG1hdC1zZWxlY3QtdHJpZ2dlcj5cclxuICAgICAgICAgIHt7IG9uRGlzcGxheVN0cmluZygpIH19XHJcbiAgICAgICAgPC9tYXQtc2VsZWN0LXRyaWdnZXI+XHJcbiAgICAgICAgPG1hdC1vcHRpb25cclxuICAgICAgICAgICpuZ0Zvcj1cImxldCBvcHRpb24gb2Ygb3B0aW9uczsgdHJhY2tCeTogdHJhY2tCeUZuXCJcclxuICAgICAgICAgIFtkaXNhYmxlZF09XCJvcHRpb24uZGlzYWJsZWRcIlxyXG4gICAgICAgICAgW3ZhbHVlXT1cIm9wdGlvblt2YWx1ZV1cIlxyXG4gICAgICAgICAgW3N0eWxlLmRpc3BsYXldPVwiaGlkZU9wdGlvbihvcHRpb24pID8gJ25vbmUnIDogJ2ZsZXgnXCJcclxuICAgICAgICAgID57eyBvcHRpb25bZGlzcGxheV0gfX1cclxuICAgICAgICA8L21hdC1vcHRpb24+XHJcbiAgICAgIDwvbWF0LXNlbGVjdD5cclxuICAgICAgPG1hdC1oaW50IHN0eWxlPVwiY29sb3I6cmVkXCIgKm5nSWY9XCJzaG93RXJyb3JNc2dcIj57eyBlcnJvck1zZyB9fTwvbWF0LWhpbnQ+XHJcbiAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gIGAsXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgXHJcbiAgICAgIC5ib3gtc2VhcmNoIHtcclxuICAgICAgICBtYXJnaW46IDhweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KSxcclxuICAgICAgICAgIDAgMCAwIDFweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMjAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICB9XHJcbiAgICAgIC5ib3gtc2VhcmNoIGlucHV0IHtcclxuICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICB9XHJcbiAgICAgIC5ib3gtc2VsZWN0LWFsbCB7XHJcbiAgICAgICAgd2lkdGg6IDM2cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMzcHg7XHJcbiAgICAgICAgY29sb3I6ICM4MDgwODA7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB9XHJcbiAgICAgIC5zZWFyY2gtYnV0dG9uIHtcclxuICAgICAgICB3aWR0aDogMzZweDtcclxuICAgICAgICBoZWlnaHQ6IDM2cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMzcHg7XHJcbiAgICAgICAgY29sb3I6ICM4MDgwODA7XHJcbiAgICAgIH1cclxuICAgICAgLnBsLTEge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMXJlbTtcclxuICAgICAgfVxyXG4gICAgYFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNlbGVjdEF1dG9jb21wbGV0ZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgRG9DaGVjayB7XHJcbiAgQElucHV0KCkgc2VsZWN0UGxhY2Vob2xkZXIgPSAnc2VhcmNoLi4uJztcclxuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIG9wdGlvbnM7XHJcbiAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcclxuICBASW5wdXQoKSBkaXNwbGF5ID0gJ2Rpc3BsYXknO1xyXG4gIEBJbnB1dCgpIHZhbHVlID0gJ3ZhbHVlJztcclxuICBASW5wdXQoKSBmb3JtQ29udHJvbDogRm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woKTtcclxuICBASW5wdXQoKSBlcnJvck1zZyA9ICdGaWVsZCBpcyByZXF1aXJlZCc7XHJcbiAgQElucHV0KCkgc2hvd0Vycm9yTXNnID0gZmFsc2U7XHJcbiAgQElucHV0KCkgc2VsZWN0ZWRPcHRpb25zO1xyXG4gIEBJbnB1dCgpIG11bHRpcGxlID0gdHJ1ZTtcclxuXHJcbiAgLy8gTmV3IE9wdGlvbnNcclxuICBASW5wdXQoKSBsYWJlbENvdW50ID0gMTtcclxuICBASW5wdXQoKSBhcHBlYXJhbmNlOiAnc3RhbmRhcmQnIHwgJ2ZpbGwnIHwgJ291dGxpbmUnID0gJ3N0YW5kYXJkJztcclxuICBASW5wdXQoKSBkaXNhYmxlT3B0aW9uQ2VudGVyaW5nID0gZmFsc2U7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHNlbGVjdGlvbkNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ3NlbGVjdEVsZW0nLCB7IHN0YXRpYzogdHJ1ZSB9KSBzZWxlY3RFbGVtO1xyXG5cclxuICBmaWx0ZXJlZE9wdGlvbnM6IEFycmF5PGFueT4gPSBbXTtcclxuICBzZWxlY3RlZFZhbHVlOiBBcnJheTxhbnk+ID0gW107XHJcbiAgc2VsZWN0QWxsQ2hlY2tlZCA9IGZhbHNlO1xyXG4gIGRpc3BsYXlTdHJpbmcgPSAnJztcclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIG5nT25DaGFuZ2VzKCkge1xyXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcclxuICAgICAgdGhpcy5mb3JtQ29udHJvbC5kaXNhYmxlKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmZvcm1Db250cm9sLmVuYWJsZSgpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5maWx0ZXJlZE9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XHJcbiAgICBpZiAodGhpcy5zZWxlY3RlZE9wdGlvbnMpIHtcclxuICAgICAgdGhpcy5zZWxlY3RlZFZhbHVlID0gdGhpcy5zZWxlY3RlZE9wdGlvbnM7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuZm9ybUNvbnRyb2wudmFsdWUpIHtcclxuICAgICAgdGhpcy5zZWxlY3RlZFZhbHVlID0gdGhpcy5mb3JtQ29udHJvbC52YWx1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nRG9DaGVjaygpIHtcclxuICAgIGlmICghdGhpcy5zZWxlY3RlZFZhbHVlLmxlbmd0aCkge1xyXG4gICAgICB0aGlzLnNlbGVjdGlvbkNoYW5nZS5lbWl0KHRoaXMuc2VsZWN0ZWRWYWx1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0b2dnbGVEcm9wZG93bigpIHtcclxuICAgIHRoaXMuc2VsZWN0RWxlbS50b2dnbGUoKTtcclxuICB9XHJcblxyXG4gIHRvZ2dsZVNlbGVjdEFsbCh2YWwpIHtcclxuICAgIGlmICh2YWwuY2hlY2tlZCkge1xyXG4gICAgICB0aGlzLmZpbHRlcmVkT3B0aW9ucy5mb3JFYWNoKG9wdGlvbiA9PiB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnNlbGVjdGVkVmFsdWUuaW5jbHVkZXMob3B0aW9uW3RoaXMudmFsdWVdKSkge1xyXG4gICAgICAgICAgdGhpcy5zZWxlY3RlZFZhbHVlID0gdGhpcy5zZWxlY3RlZFZhbHVlLmNvbmNhdChbb3B0aW9uW3RoaXMudmFsdWVdXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGZpbHRlcmVkVmFsdWVzID0gdGhpcy5nZXRGaWx0ZXJlZE9wdGlvbnNWYWx1ZXMoKTtcclxuICAgICAgdGhpcy5zZWxlY3RlZFZhbHVlID0gdGhpcy5zZWxlY3RlZFZhbHVlLmZpbHRlcihcclxuICAgICAgICBpdGVtID0+ICFmaWx0ZXJlZFZhbHVlcy5pbmNsdWRlcyhpdGVtKVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZWxlY3Rpb25DaGFuZ2UuZW1pdCh0aGlzLnNlbGVjdGVkVmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgZmlsdGVySXRlbSh2YWx1ZSkge1xyXG4gICAgdGhpcy5maWx0ZXJlZE9wdGlvbnMgPSB0aGlzLm9wdGlvbnMuZmlsdGVyKFxyXG4gICAgICBpdGVtID0+IGl0ZW1bdGhpcy5kaXNwbGF5XS50b0xvd2VyQ2FzZSgpLmluZGV4T2YodmFsdWUudG9Mb3dlckNhc2UoKSkgPiAtMVxyXG4gICAgKTtcclxuICAgIHRoaXMuc2VsZWN0QWxsQ2hlY2tlZCA9IHRydWU7XHJcbiAgICB0aGlzLmZpbHRlcmVkT3B0aW9ucy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICBpZiAoIXRoaXMuc2VsZWN0ZWRWYWx1ZS5pbmNsdWRlcyhpdGVtW3RoaXMudmFsdWVdKSkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0QWxsQ2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIGlmICghdGhpcy5maWx0ZXJlZE9wdGlvbnMubGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0QWxsQ2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGlkZU9wdGlvbihvcHRpb24pIHtcclxuICAgIHJldHVybiAhKHRoaXMuZmlsdGVyZWRPcHRpb25zLmluZGV4T2Yob3B0aW9uKSA+IC0xKTtcclxuICB9XHJcblxyXG4gIC8vIFJldHVybnMgcGxhaW4gc3RyaW5ncyBhcnJheSBvZiBmaWx0ZXJlZCB2YWx1ZXNcclxuICBnZXRGaWx0ZXJlZE9wdGlvbnNWYWx1ZXMoKSB7XHJcbiAgICBjb25zdCBmaWx0ZXJlZFZhbHVlcyA9IFtdO1xyXG4gICAgdGhpcy5maWx0ZXJlZE9wdGlvbnMuZm9yRWFjaChvcHRpb24gPT4ge1xyXG4gICAgICBmaWx0ZXJlZFZhbHVlcy5wdXNoKG9wdGlvbi52YWx1ZSk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBmaWx0ZXJlZFZhbHVlcztcclxuICB9XHJcblxyXG4gIG9uRGlzcGxheVN0cmluZygpIHtcclxuICAgIHRoaXMuZGlzcGxheVN0cmluZyA9ICcnO1xyXG4gICAgLy8gY29uc29sZS5sb2coJ1ZhbG9yIHNlbGVjY2lvbmFkbzogJyArIHRoaXMuc2VsZWN0ZWRWYWx1ZSk7XHJcbiAgICBpZiAodGhpcy5zZWxlY3RlZFZhbHVlKSB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdFbnRyYSBhcXXDrS4nKTtcclxuICAgICAgbGV0IGRpc3BsYXlPcHRpb24gPSBbXTtcclxuICAgICAgaWYgKHRoaXMubXVsdGlwbGUpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnTXVsdGlwbGUnKTtcclxuICAgICAgICAvLyBNdWx0aSBzZWxlY3QgZGlzcGxheVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sYWJlbENvdW50OyBpKyspIHtcclxuICAgICAgICAgIGRpc3BsYXlPcHRpb25baV0gPSB0aGlzLm9wdGlvbnMuZmlsdGVyKFxyXG4gICAgICAgICAgICBvcHRpb24gPT4gb3B0aW9uW3RoaXMudmFsdWVdID09PSB0aGlzLnNlbGVjdGVkVmFsdWVbaV1cclxuICAgICAgICAgIClbMF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChkaXNwbGF5T3B0aW9uLmxlbmd0aCkge1xyXG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkaXNwbGF5T3B0aW9uLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChkaXNwbGF5T3B0aW9uW2ldICYmIGRpc3BsYXlPcHRpb25baV1bdGhpcy5kaXNwbGF5XSkge1xyXG4gICAgICAgICAgICAgIHRoaXMuZGlzcGxheVN0cmluZyArPSBkaXNwbGF5T3B0aW9uW2ldW3RoaXMuZGlzcGxheV0gKyAnLCc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRoaXMuZGlzcGxheVN0cmluZyA9IHRoaXMuZGlzcGxheVN0cmluZy5zbGljZSgwLCAtMSk7XHJcbiAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRWYWx1ZS5sZW5ndGggPiAxICYmXHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRWYWx1ZS5sZW5ndGggPiB0aGlzLmxhYmVsQ291bnRcclxuICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAvLyBTZSBtdWVzdHJhbiB1bm9zIHBvY29zIGVsZW1lbnRvcyBkZSBsb3Mgc2VsZWNjaW9uYWRvcyB5IHNlIG1lbmNpb25hblxyXG4gICAgICAgICAgICAvLyBxdWUgZXhpc3RlbiBuIG3DoXMuXHJcbiAgICAgICAgICAgIHRoaXMuZGlzcGxheVN0cmluZyA9XHJcbiAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgKHRoaXMuZGlzcGxheVN0cmluZy5sZW5ndGggPiA0NSkgP1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXlTdHJpbmcuc3Vic3RyKDAsIDQ1IC0gMSkgKyAnLi4uJyA6XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheVN0cmluZ1xyXG4gICAgICAgICAgICAgICkgKyBgICh5ICR7dGhpcy5zZWxlY3RlZFZhbHVlLmxlbmd0aCAtIHRoaXMubGFiZWxDb3VudH0gbcOhcylgO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnU2luZ2xlJyk7XHJcbiAgICAgICAgLy8gU2luZ2xlIHNlbGVjdCBkaXNwbGF5XHJcbiAgICAgICAgZGlzcGxheU9wdGlvbiA9IHRoaXMub3B0aW9ucy5maWx0ZXIoXHJcbiAgICAgICAgICBvcHRpb24gPT4gb3B0aW9uW3RoaXMudmFsdWVdID09PSB0aGlzLnNlbGVjdGVkVmFsdWVcclxuICAgICAgICApO1xyXG4gICAgICAgIGlmIChkaXNwbGF5T3B0aW9uLmxlbmd0aCkge1xyXG4gICAgICAgICAgdGhpcy5kaXNwbGF5U3RyaW5nID0gZGlzcGxheU9wdGlvblswXVt0aGlzLmRpc3BsYXldO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnNlbGVjdGVkVmFsdWUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5kaXNwbGF5U3RyaW5nO1xyXG4gIH1cclxuXHJcbiAgb25TZWxlY3Rpb25DaGFuZ2UodmFsKSB7XHJcbiAgICBjb25zdCBmaWx0ZXJlZFZhbHVlcyA9IHRoaXMuZ2V0RmlsdGVyZWRPcHRpb25zVmFsdWVzKCk7XHJcbiAgICBsZXQgY291bnQgPSAwO1xyXG4gICAgaWYgKHRoaXMubXVsdGlwbGUpIHtcclxuICAgICAgdGhpcy5zZWxlY3RlZFZhbHVlLmZpbHRlcihpdGVtID0+IHtcclxuICAgICAgICBpZiAoZmlsdGVyZWRWYWx1ZXMuaW5jbHVkZXMoaXRlbSkpIHtcclxuICAgICAgICAgIGNvdW50Kys7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5zZWxlY3RBbGxDaGVja2VkID0gY291bnQgPT09IHRoaXMuZmlsdGVyZWRPcHRpb25zLmxlbmd0aDtcclxuICAgIH1cclxuICAgIHRoaXMuc2VsZWN0ZWRWYWx1ZSA9IHZhbC52YWx1ZTtcclxuICAgIHRoaXMuc2VsZWN0aW9uQ2hhbmdlLmVtaXQodGhpcy5zZWxlY3RlZFZhbHVlKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB0cmFja0J5Rm4oaW5kZXgsIGl0ZW0pIHtcclxuICAgIHJldHVybiBpdGVtLnZhbHVlO1xyXG4gIH1cclxufVxyXG4iXX0=