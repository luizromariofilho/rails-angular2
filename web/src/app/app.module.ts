import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ItemTypeComponent } from './item-type/item-type.component';
import { ItemTypeFormComponent } from './item-type/item-type-form/item-type-form.component';
import { ItemTypeService } from './item-type/shared/item-type.service';

// Adicionamos o arquivo routing
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    ItemTypeComponent,
    ItemTypeFormComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing
  ],
  providers: [ItemTypeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
