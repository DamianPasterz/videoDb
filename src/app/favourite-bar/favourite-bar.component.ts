import { Component } from '@angular/core';
import { DisplayDataService } from '@core/services/display-data.service';
import { VideosListService } from '@core/services/videos-list.service';

@Component({
	selector: 'app-favourite-bar',
	templateUrl: './favourite-bar.component.html',
	styleUrls: ['./favourite-bar.component.scss'],
})
export class FavouriteBarComponent {
	constructor(public videosListService: VideosListService, public displayDataService: DisplayDataService) {}

	onFavourite() {
		this.displayDataService.getFavourite();
	}

	onAllVideos() {
		this.displayDataService.getAllVideos();
	}
}
