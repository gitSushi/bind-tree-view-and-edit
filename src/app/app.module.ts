import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TreeMenuComponent } from './tree-menu/tree-menu.component';
import { ReadTreeComponent } from './read-tree/read-tree.component';

@NgModule({
  declarations: [AppComponent, TreeMenuComponent, ReadTreeComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
