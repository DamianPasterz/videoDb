import { Injectable } from '@angular/core';

import {
	vimeoIDLength,
	VIMEO_ID_CHECK,
	VIMEO_ONLY_ID_CHECK,
	youtubeIDLength,
	YOUTUBE_ID_CHECK,
	YOUTUBE_ONLY_ID_CHECK,
} from '@core/models/matching.models';
import { InputData } from '@core/models/input.model';
import { VideoServices } from '@core/models/videoServices.model';
// import { Video } from '@core/models/video.model';

@Injectable({
	providedIn: 'root',
})
export class InputService {
	public onProviderAndIdCheck(url: string): InputData {
		console.log(url);

		let inputData: InputData = { provider: VideoServices.incorect, id: null };

		if (url.includes(VideoServices.vimeo) || url.match(VIMEO_ID_CHECK)) {
			return (inputData = { provider: VideoServices.vimeo, id: url.match(VIMEO_ID_CHECK)[1] });
		}

		if (url.includes(VideoServices.youtube) || url.match(YOUTUBE_ID_CHECK)) {
			return (inputData = { provider: VideoServices.youtube, id: url.match(YOUTUBE_ID_CHECK)[1] });
		}

		if (url.length === vimeoIDLength || url.match(VIMEO_ONLY_ID_CHECK)) {
			return (inputData = { provider: VideoServices.vimeo, id: url.match(VIMEO_ONLY_ID_CHECK)[0] });
		}

		if (url.length >= youtubeIDLength || url.match(YOUTUBE_ONLY_ID_CHECK)) {
			return (inputData = { provider: VideoServices.youtube, id: url.match(YOUTUBE_ONLY_ID_CHECK)[0] });
		}

		return inputData;
	}
}
