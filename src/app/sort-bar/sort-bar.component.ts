import { Component } from '@angular/core';

import { VideosSort } from '@core/models/vidoes-sort.model';
import { DisplayDataService } from '@core/services/display-data.service';
import { VideosListService } from '@core/services/videos-list.service';

@Component({
	selector: 'app-sort-bar',
	templateUrl: './sort-bar.component.html',
	styleUrls: ['./sort-bar.component.scss'],
})
export class SortBarComponent {
	constructor(public videosListService: VideosListService, public displayDataService: DisplayDataService) {}

	onDeleteAll() {
		this.videosListService.deleteAllVideos();
	}

	onDemoLoad() {
		this.videosListService.addDemoList();
	}

	onFromOldToNew() {
		this.displayDataService.getSortVideos(VideosSort.fromOldToNew);
	}
	onFromNewToOld() {
		this.displayDataService.getSortVideos(VideosSort.fromNewToOld);
	}

	onFromAToZ() {
		this.displayDataService.getSortVideos(VideosSort.fromAtoZ);
	}
	onFromZToA() {
		this.displayDataService.getSortVideos(VideosSort.fromZtoA);
	}

	onDisplayGrid() {
		this.displayDataService.displayGrid();
	}
	onDisplayList() {
		this.displayDataService.displayList();
	}
}
