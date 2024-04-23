import { NgModule } from '@angular/core';
import { MatAccordion, MatExpansionPanel } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatButton } from '@angular/material/button';


@NgModule({
  imports: [
    MatAccordion, 
    MatExpansionPanel, 
    MatInputModule, 
    MatFormFieldModule, 
    MatExpansionModule,
    MatToolbarModule,
    MatButtonModule,
    MatButton
  ],
  exports: [
    MatAccordion, 
    MatExpansionPanel, 
    MatInputModule, 
    MatFormFieldModule, 
    MatExpansionModule,
    MatToolbarModule,
    MatButtonModule,
    MatButton
  ],
  declarations: [ ],
  bootstrap: [ ]
})
export class MaterialModule { }