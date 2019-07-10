import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonToggleModule } from '@angular/material';
import { MatIconModule } from '@angular/material';

const modules = [ BrowserModule, CommonModule, HttpClientModule, BrowserAnimationsModule, MatButtonToggleModule, MatIconModule ];

@NgModule({
  imports: [ ...modules ],
  exports: [ ...modules ],
})
export class SharedModule { }
