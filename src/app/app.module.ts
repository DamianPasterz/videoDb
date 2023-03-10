import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { StoreModule } from '@ngrx/store';
import { FavouriteBarComponent } from './favourite-bar/favourite-bar.component';
import { HomeComponent } from './home/home.component';

@NgModule({
	declarations: [AppComponent, FavouriteBarComponent, HomeComponent],
	imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MaterialModule, StoreModule.forRoot({}, {})],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
