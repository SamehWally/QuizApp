import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';

// PrimeNG
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { PaginatorModule } from 'primeng/paginator';
import { MessageModule } from 'primeng/message';
import { Dialog } from 'primeng/dialog';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { TableModule } from 'primeng/table';

import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { Tag } from 'primeng/tag';
import { InputIcon } from 'primeng/inputicon';
import { IconField } from 'primeng/iconfield';
import { HttpClientModule } from '@angular/common/http';
import { MultiSelectModule } from 'primeng/multiselect';
import { InputTextModule } from 'primeng/inputtext';
import { Slider } from 'primeng/slider';
import { ProgressBar } from 'primeng/progressbar';

@NgModule({
  declarations: [SidebarComponent],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    FormsModule,
    DropdownModule,
    ButtonModule,
    PaginatorModule,
    MessageModule,
    Dialog,
    AutoCompleteModule,

    
    TableModule,
    Tag,
    ButtonModule,
    IconField,
    InputIcon,
    HttpClientModule,
  ],
  exports: [
    SidebarComponent,
    TranslateModule,
    FormsModule,
    DropdownModule,
    ButtonModule,
    PaginatorModule,
    MessageModule,
    Dialog,
    AutoCompleteModule,
    TableModule,
    Tag,
    ButtonModule,
    IconField,
    InputIcon,
    HttpClientModule,
  ],
})
export class SharedModule {}
