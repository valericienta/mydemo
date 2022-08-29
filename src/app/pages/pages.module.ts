import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarComponent } from './listar/listar.component';
import { CrearComponent } from './crear/crear.component';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StocklevelPipe } from '../pipes/stocklevel.pipe';



@NgModule({
  declarations: [
    ListarComponent,
    CrearComponent,
    StocklevelPipe
  ],
  
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule
  ]
})
export class PagesModule { }
