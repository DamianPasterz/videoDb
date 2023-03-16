import { Component } from '@angular/core';
import { VideosSort } from '@core/models/vidoes-sort.model';
import { VideosListService } from '@core/services/videos-list.service';

@Component({
	selector: 'app-sort-bar',
	templateUrl: './sort-bar.component.html',
	styleUrls: ['./sort-bar.component.scss'],
})
export class SortBarComponent {
	VideosSort: VideosSort;
	constructor(public videosListService: VideosListService) {}

	onDeleteAll() {
		this.videosListService.deleteAllVideos();
	}

	onDemoLoad() {
		this.videosListService.addDemoList();
	}

	onFromOldToNew() {
		this.videosListService.getSortVideos(VideosSort.fromOldToNew);
	}
	onFromNewToOld() {
		this.videosListService.getSortVideos(VideosSort.fromNewToOld);
	}

	onFromAToZ() {
		this.videosListService.getSortVideos(VideosSort.fromAtoZ);
	}
	onFromZToA() {
		this.videosListService.getSortVideos(VideosSort.fromZtoA);
	}
}
