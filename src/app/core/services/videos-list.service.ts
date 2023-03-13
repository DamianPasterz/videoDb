import { Injectable } from '@angular/core';
import { Video } from '@core/models/video.model';

import { NewVideoService } from './new-video.service';

@Injectable({
	providedIn: 'root',
})
export class VideosListService {
	public videos: Video[] = [];

	constructor(public newVideoService: NewVideoService) {}

	public adVideo(video: Video): void {
		this.videos.push(video);
	}

	public getAllVideos(): Video[] {
		return this.videos;
	}
}
