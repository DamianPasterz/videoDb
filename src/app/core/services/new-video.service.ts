import { Injectable } from '@angular/core';

import { VimeoResponse, YouTubeResponse } from '@core/models/video-response.model';
import { Video } from '@core/models/video.model';
import { VideoServices } from '@core/models/videoServices.model';

@Injectable({
	providedIn: 'root',
})
export class NewVideoService {
	public item: Video;

	public createNewVimeoItem(data: VimeoResponse): Video {
		this.item = {
			title: data.title,
			provider: VideoServices.vimeo,
			favourite: false,
			videoId: data.video_id,
			img: data.thumbnail_url,
			viewCount: '0',
			createdDate: new Date(),
		};
		return this.item;
	}
	public createNewYouTubeItem(data: YouTubeResponse): Video {
		this.item = {
			title: data.items[0].snippet.title,
			provider: VideoServices.youtube,
			favourite: false,
			videoId: data.items[0].id,
			img: data.items[0].snippet.thumbnails.default.url,
			viewCount: data.items[0].statistics.viewCount,
			createdDate: new Date(),
		};
		return this.item;
	}
}
