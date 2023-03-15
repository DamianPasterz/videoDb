import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FavouriteBarComponent } from './favourite-bar/favourite-bar.component';
import { HomeComponent } from './home/home.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { VideosContanierComponent } from './videos-contanier/videos-contanier.component';
import { VideosItemComponent } from './video-item/video-item.component';

@NgModule({
	declarations: [
		AppComponent,
		FavouriteBarComponent,
		HomeComponent,
		SearchBarComponent,
		VideosContanierComponent,
		VideosItemComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MaterialModule,
		FormsModule,
		StoreModule.forRoot({}, {}),
		HttpClientModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
