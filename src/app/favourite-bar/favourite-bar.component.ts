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

	public onFavourite(): void {
		this.displayDataService.getFavourite();
	}

	public onAllVideos(): void {
		this.displayDataService.getAllVideos();
	}
}
