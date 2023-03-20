import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { minInput } from '@core/models/matching.models';
import { VideoServices } from '@core/models/videoServices.model';
import { VimeoService as HttpService } from '@core/services/http.service';
import { InputService } from '@core/services/input.service';
import { Video } from '@core/models/video.model';
import { VimeoResponse, YouTubeResponse } from '@core/models/video-response.model';
import { NewVideoService } from '@core/services/new-video.service';
import { VideosListService } from '@core/services/videos-list.service';

@Component({
	selector: 'app-search-bar',
	templateUrl: './search-bar.component.html',
	styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent {
	public isValidationErrorVisible: boolean;
	public minInput = minInput;

	constructor(
		public inputService: InputService,
		public httpService: HttpService,
		public newVideoService: NewVideoService,
		public videoListService: VideosListService,
	) {}

	public onAddVideo(form: NgForm): void {
		let newVideo: Video;
		if (form.invalid) this.isValidationErrorVisible = true;
		const inputData = this.inputService.onProviderAndIdCheck(form.value.value);

		if (inputData.provider === VideoServices.vimeo) {
			this.httpService.getVimeoData(inputData.id).subscribe((date: VimeoResponse) => {
				newVideo = this.newVideoService.createNewVimeoItem(date);
				this.videoListService.adVideo(newVideo);
			});
			return;
		}
		if (inputData.provider === VideoServices.youtube) {
			this.httpService.getYouTubeData(inputData.id).subscribe((date: YouTubeResponse) => {
				newVideo = this.newVideoService.createNewYouTubeItem(date);
				this.videoListService.adVideo(newVideo);
			});
			return;
		}
	}
}
