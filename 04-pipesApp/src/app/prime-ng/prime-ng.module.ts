import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// PrimeNg 
import { ButtonModule } from 'primeng/button';
import {CardModule} from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { MenubarModule } from 'primeng/menubar';




@NgModule({
  exports: [
    CommonModule,
    ButtonModule,
    CardModule,
    FieldsetModule,
    MenubarModule
  ],
})
export class PrimeNgModule { } 

