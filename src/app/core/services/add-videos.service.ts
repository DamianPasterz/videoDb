import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { VimeoResponse, YouTubeResponse } from '@core/models/video-response.model';
import { Video } from '@core/models/video.model';
import { VideoServices } from '@core/models/videoServices.model';
import { take } from 'rxjs';
import { HttpService } from './http.service';
import { InputService } from './input.service';
import { NewVideoService } from './new-video.service';
import { VideosListService } from './videos-list.service';

@Injectable({
	providedIn: 'root',
})
export class AddVideosService {
	public isValidationErrorVisible: boolean;

	constructor(
		public inputService: InputService,
		public httpService: HttpService,
		public newVideoService: NewVideoService,
		public videoListService: VideosListService,
	) {}

	public addVideo(form: NgForm): void {
		let newVideo: Video;
		if (form.invalid) this.isValidationErrorVisible = true;
		const inputData = this.inputService.onProviderAndIdCheck(form.value.value);

		if (inputData.provider === VideoServices.vimeo) {
			this.httpService
				.getVimeoData(inputData.id)
				.pipe(take(1))
				.subscribe((date: VimeoResponse) => {
					newVideo = this.newVideoService.createNewVimeoItem(date);
					this.videoListService.adVideo(newVideo);
				});
			return;
		}
		if (inputData.provider === VideoServices.youtube) {
			this.httpService
				.getYouTubeData(inputData.id)
				.pipe(take(1))
				.subscribe((date: YouTubeResponse) => {
					newVideo = this.newVideoService.createNewYouTubeItem(date);
					this.videoListService.adVideo(newVideo);
				});
			return;
		}
	}
}
