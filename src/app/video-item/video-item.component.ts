import { Component, Input } from '@angular/core';
import { Video } from '@core/models/video.model';
import { VideosListService } from '@core/services/videos-list.service';

@Component({
	selector: 'app-video-item',
	templateUrl: './video-item.component.html',
	styleUrls: ['./video-item.component.scss'],
})
export class VideosItemComponent {
	@Input() video: Video;
	@Input() index: number;

	constructor(public videosListService: VideosListService) {}

	toogleFavorite() {
		this.videosListService.toogleFavorite(this.video.videoId);
	}

	onClickVideo(index: number) {
		this.videosListService.deleteVideo(index);
	}
}
