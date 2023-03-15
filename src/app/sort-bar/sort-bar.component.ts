import { Component } from '@angular/core';
import { VideosListService } from '@core/services/videos-list.service';

@Component({
	selector: 'app-sort-bar',
	templateUrl: './sort-bar.component.html',
	styleUrls: ['./sort-bar.component.scss'],
})
export class SortBarComponent {
	constructor(public videosListService: VideosListService) {}

	onDeleteAll() {
		this.videosListService.deleteAllVideos();
	}

	onDemoLoad() {
		this.videosListService.addDemoList();
	}
}
