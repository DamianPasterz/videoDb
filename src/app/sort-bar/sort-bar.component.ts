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

	public onDeleteAll(): void {
		this.videosListService.deleteAllVideos();
	}

	public onDemoLoad(): void {
		this.videosListService.addDemoList();
	}

	public onFromOldToNew(): void {
		this.displayDataService.getSortVideos(VideosSort.fromOldToNew);
	}

	public onFromNewToOld(): void {
		this.displayDataService.getSortVideos(VideosSort.fromNewToOld);
	}

	public onFromAToZ(): void {
		this.displayDataService.getSortVideos(VideosSort.fromAtoZ);
	}

	public onFromZToA(): void {
		this.displayDataService.getSortVideos(VideosSort.fromZtoA);
	}

	public onDisplayGrid(): void {
		this.displayDataService.displayGrid();
	}

	public onDisplayList(): void {
		this.displayDataService.displayList();
	}
}
