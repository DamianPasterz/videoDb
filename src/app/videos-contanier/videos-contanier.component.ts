import { Component, OnInit } from '@angular/core';
import { Video } from '@core/models/video.model';
import { VideosListService } from '@core/services/videos-list.service';

@Component({
	selector: 'app-videos-contanier',
	templateUrl: './videos-contanier.component.html',
	styleUrls: ['./videos-contanier.component.scss'],
})
export class VideosContanierComponent implements OnInit {
	public videos: Video[];

	constructor(private videoListService: VideosListService) {}

	ngOnInit(): void {
		this.videos = this.videoListService.getAllVideos();
	}
}
