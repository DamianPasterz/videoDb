import { Component } from '@angular/core';
import { VideosListService } from '@core/services/videos-list.service';

@Component({
	selector: 'app-favourite-bar',
	templateUrl: './favourite-bar.component.html',
	styleUrls: ['./favourite-bar.component.scss'],
})
export class FavouriteBarComponent {
	constructor(public videosListService: VideosListService) {}

	onFavourite() {
		this.videosListService.getFavourite();
	}

	onAllVideos() {
		this.videosListService.getAllVideos();
	}
}
