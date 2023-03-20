import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { VideosListService } from '@core/services/videos-list.service';
import { Video } from '@core/models/video.model';

@Component({
	selector: 'app-detalis',
	templateUrl: './detalis.component.html',
	styleUrls: ['./detalis.component.scss'],
})
export class DetalisComponent implements OnInit, OnDestroy {
	private subscription: Subscription;
	public video: Video;
	constructor(@Inject(MAT_DIALOG_DATA) public data: { id: string }, private videosListServic: VideosListService) {}

	ngOnInit() {
		this.subscription = this.videosListServic.videos$.subscribe(videos => {
			this.video = videos.find(video => video.videoId === this.data.id);
		});
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}
}
