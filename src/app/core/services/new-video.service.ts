import { Injectable } from '@angular/core';
import { VimeoResponse } from '@core/models/video-response.model';
import { Video } from '@core/models/video.model';
import { VideoServices } from '@core/models/videoServices.model';

@Injectable({
	providedIn: 'root',
})
export class NewVideoService {
	public item: Video;
	createNewViemoItem(data: VimeoResponse): Video {
		this.item = {
			title: data.title,
			provider: VideoServices.vimeo,
			favorite: false,
			videoId: data.video_id,
			img: data.thumbnail_url,
			viewCount: 0,
		};
		return this.item;
	}
}
