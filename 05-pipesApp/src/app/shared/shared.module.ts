import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { PrimeNGModule } from '../prime-ng/prime-ng.module';
import { MenubarModule } from 'primeng/menubar';



@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    PrimeNGModule,
    MenubarModule,
  ],
  exports:[
    MenuComponent,
  ]
})
export class SharedModule { }
