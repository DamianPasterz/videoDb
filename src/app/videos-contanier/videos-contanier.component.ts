import { Component, OnDestroy, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs';

import { Video } from '@core/models/video.model';
import { VideosSort } from '@core/models/vidoes-sort.model';

import { DisplayDataService } from '@core/services/display-data.service';
import { VideosListService } from '@core/services/videos-list.service';
import { finalize } from 'rxjs';

@Component({
	selector: 'app-videos-contanier',
	templateUrl: './videos-contanier.component.html',
	styleUrls: ['./videos-contanier.component.scss'],
})
export class VideosContanierComponent implements OnInit, OnDestroy {
	public videos$: Observable<Video[]>;
	public favourite$: Observable<boolean>;
	public sortVideos$: Observable<VideosSort>;
	public grid$: Observable<boolean>;

	protected videosList: Video[] = [];
	protected pageIndex = 0;
	protected pageSize = 6;
	protected firstPage = this.pageIndex * this.pageSize;
	protected secondPage = (this.pageIndex + 1) * this.pageSize;
	protected pageEvent: PageEvent;
	protected subscription: Subscription;

	constructor(private videoListService: VideosListService, public displayDataService: DisplayDataService) {
		this.videos$ = this.videoListService.videos$;
		this.favourite$ = this.displayDataService.favourite$;
		this.sortVideos$ = this.displayDataService.sortVideos$;
		this.grid$ = this.displayDataService.grid$;
	}

	public ngOnInit(): void {
		this.subscription = this.videoListService.videos$.subscribe(item => (this.videosList = item));
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

	ngOnDestroy(): void {
		this.subscription.unsubscribe();
	}
}
