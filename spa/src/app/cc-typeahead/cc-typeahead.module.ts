// Core dependencies
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule, MatInputModule } from "@angular/material";

// App dependencies
import { CcTypeaheadComponent } from "./cc-typeahead.component";

@NgModule({
    imports: [
        CommonModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule
    ],
    declarations: [CcTypeaheadComponent],
    exports: [CcTypeaheadComponent]
})
export class CcTypeaheadModule {
}
