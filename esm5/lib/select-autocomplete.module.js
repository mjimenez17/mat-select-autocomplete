import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SelectAutocompleteComponent } from './select-autocomplete.component';
import * as i0 from "@angular/core";
var SelectAutocompleteModule = /** @class */ (function () {
    function SelectAutocompleteModule() {
    }
    SelectAutocompleteModule.ɵmod = i0.ɵɵdefineNgModule({ type: SelectAutocompleteModule });
    SelectAutocompleteModule.ɵinj = i0.ɵɵdefineInjector({ factory: function SelectAutocompleteModule_Factory(t) { return new (t || SelectAutocompleteModule)(); }, imports: [[
                FormsModule,
                CommonModule,
                MatIconModule,
                MatButtonModule,
                MatSelectModule,
                MatCheckboxModule,
                MatFormFieldModule,
                ReactiveFormsModule,
            ]] });
    return SelectAutocompleteModule;
}());
export { SelectAutocompleteModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SelectAutocompleteModule, { declarations: [SelectAutocompleteComponent], imports: [FormsModule,
        CommonModule,
        MatIconModule,
        MatButtonModule,
        MatSelectModule,
        MatCheckboxModule,
        MatFormFieldModule,
        ReactiveFormsModule], exports: [SelectAutocompleteComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SelectAutocompleteModule, [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWF1dG9jb21wbGV0ZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXQtc2VsZWN0LWF1dG9jb21wbGV0ZS8iLCJzb3VyY2VzIjpbImxpYi9zZWxlY3QtYXV0b2NvbXBsZXRlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDL0QsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0saUNBQWlDLENBQUM7O0FBRTlFO0lBQUE7S0FjeUM7Z0VBQTVCLHdCQUF3QjttSUFBeEIsd0JBQXdCLGtCQWIxQjtnQkFDUCxXQUFXO2dCQUNYLFlBQVk7Z0JBQ1osYUFBYTtnQkFDYixlQUFlO2dCQUNmLGVBQWU7Z0JBQ2YsaUJBQWlCO2dCQUNqQixrQkFBa0I7Z0JBQ2xCLG1CQUFtQjthQUNwQjttQ0FwQkg7Q0F3QnlDLEFBZHpDLElBY3lDO1NBQTVCLHdCQUF3Qjt3RkFBeEIsd0JBQXdCLG1CQUhwQiwyQkFBMkIsYUFUeEMsV0FBVztRQUNYLFlBQVk7UUFDWixhQUFhO1FBQ2IsZUFBZTtRQUNmLGVBQWU7UUFDZixpQkFBaUI7UUFDakIsa0JBQWtCO1FBQ2xCLG1CQUFtQixhQUdYLDJCQUEyQjtrREFFMUIsd0JBQXdCO2NBZHBDLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsV0FBVztvQkFDWCxZQUFZO29CQUNaLGFBQWE7b0JBQ2IsZUFBZTtvQkFDZixlQUFlO29CQUNmLGlCQUFpQjtvQkFDakIsa0JBQWtCO29CQUNsQixtQkFBbUI7aUJBQ3BCO2dCQUNELFlBQVksRUFBRSxDQUFDLDJCQUEyQixDQUFDO2dCQUMzQyxPQUFPLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQzthQUN2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHsgTWF0U2VsZWN0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2VsZWN0JztcbmltcG9ydCB7IE1hdEZvcm1GaWVsZE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBNYXRCdXR0b25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuaW1wb3J0IHsgTWF0Q2hlY2tib3hNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jaGVja2JveCc7XG5pbXBvcnQgeyBTZWxlY3RBdXRvY29tcGxldGVDb21wb25lbnQgfSBmcm9tICcuL3NlbGVjdC1hdXRvY29tcGxldGUuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIEZvcm1zTW9kdWxlLFxuICAgIENvbW1vbk1vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBNYXRTZWxlY3RNb2R1bGUsXG4gICAgTWF0Q2hlY2tib3hNb2R1bGUsXG4gICAgTWF0Rm9ybUZpZWxkTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1NlbGVjdEF1dG9jb21wbGV0ZUNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtTZWxlY3RBdXRvY29tcGxldGVDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFNlbGVjdEF1dG9jb21wbGV0ZU1vZHVsZSB7IH1cbiJdfQ==