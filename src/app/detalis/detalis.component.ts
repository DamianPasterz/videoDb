import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { VideosListService } from '@core/services/videos-list.service';
import { Video } from '@core/models/video.model';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
	selector: 'app-detalis',
	templateUrl: './detalis.component.html',
	styleUrls: ['./detalis.component.scss'],
})
export class DetalisComponent implements OnInit, OnDestroy {
	protected link: SafeResourceUrl;
	private subscription: Subscription;
	public video: Video;
	constructor(
		@Inject(MAT_DIALOG_DATA) public data: { id: string },
		private videosListServic: VideosListService,
		private sanitizer: DomSanitizer,
	) {}

	ngOnInit() {
		this.subscription = this.videosListServic.videos$.subscribe(videos => {
			this.video = videos.find(video => video.videoId === this.data.id);
		});
		this.link = this.sanitizer.bypassSecurityTrustResourceUrl(this.video.movieUrl);
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}
}
