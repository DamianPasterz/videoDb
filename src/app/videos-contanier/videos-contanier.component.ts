import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Video } from '@core/models/video.model';
import { VideosListService } from '@core/services/videos-list.service';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-videos-contanier',
	templateUrl: './videos-contanier.component.html',
	styleUrls: ['./videos-contanier.component.scss'],
})
export class VideosContanierComponent implements OnInit {
	public videos$: Observable<Video[]>;

	protected videosList: Video[] = [];
	protected pageIndex = 0;
	protected pageSize = 9;
	protected firstPage = this.pageIndex * this.pageSize;
	protected secondPage = (this.pageIndex + 1) * this.pageSize;
	protected pageSizeOptions = [2, 18, 27];
	protected pageEvent: PageEvent;

	constructor(private videoListService: VideosListService) {
		this.videos$ = this.videoListService.videos$;
	}

	public ngOnInit(): void {
		this.videoListService.videos$.subscribe(item => (this.videosList = item));
		this.pageEvent = {
			pageIndex: this.pageIndex,
			pageSize: this.pageSize,
			length: this.videosList.length,
		};
	}
	public setPaginator(pageEvent: PageEvent): PageEvent {
		this.firstPage = pageEvent.pageIndex * pageEvent.pageSize;
		this.secondPage = (pageEvent.pageIndex + 1) * pageEvent.pageSize;
		return pageEvent;
	}
}
