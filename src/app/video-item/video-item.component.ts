import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Video } from '@core/models/video.model';
import { VideosListService } from '@core/services/videos-list.service';
import { DisplayDataService } from '@core/services/display-data.service';

@Component({
	selector: 'app-video-item',
	templateUrl: './video-item.component.html',
	styleUrls: ['./video-item.component.scss'],
})
export class VideosItemComponent implements OnInit {
	public grid$: Observable<boolean>;

	@Input() video: Video;
	@Input() index: number;

	constructor(public videosListService: VideosListService, public displayDataService: DisplayDataService) {}

	public ngOnInit(): void {
		this.grid$ = this.displayDataService.grid$;
	}

	public toogleFavorite(): void {
		this.videosListService.toogleFavorite(this.video.videoId);
	}

	public onClickVideo(index: number): void {
		this.videosListService.deleteVideo(index);
	}
}
