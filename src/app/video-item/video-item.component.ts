import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

import { Video } from '@core/models/video.model';
import { VideosListService } from '@core/services/videos-list.service';
import { DisplayDataService } from '@core/services/display-data.service';

@Component({
	selector: 'app-video-item',
	templateUrl: './video-item.component.html',
	styleUrls: ['./video-item.component.scss'],
})
export class VideosItemComponent {
	public grid$: Observable<boolean>;

	@Input() video: Video;
	@Input() index: number;

	constructor(public videosListService: VideosListService, public displayDataService: DisplayDataService) {
		this.grid$ = this.displayDataService.grid$;
	}

	toogleFavorite() {
		this.videosListService.toogleFavorite(this.video.videoId);
	}

	onClickVideo(index: number) {
		this.videosListService.deleteVideo(index);
	}
}
