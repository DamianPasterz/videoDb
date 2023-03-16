import { Injectable } from '@angular/core';
import { Video } from '@core/models/video.model';
import { LocalStorageService } from './local-store.service';
import { Observable, BehaviorSubject } from 'rxjs';

import { NewVideoService } from './new-video.service';
import demo from 'tools/demo';
import { VideosSort } from '@core/models/vidoes-sort.model';

@Injectable({
	providedIn: 'root',
})
export class VideosListService {
	private videos: Video[] = this.localStorageService.getLocalStorage();
	private videosBehaviorSubject = new BehaviorSubject<Video[]>([]);
	public videos$: Observable<Video[]> = this.videosBehaviorSubject.asObservable();

	public favouriteBehaviorSubject = new BehaviorSubject<boolean>(false);
	public favourite$: Observable<boolean> = this.favouriteBehaviorSubject.asObservable();

	public sortVideosBehaviorSubject = new BehaviorSubject<VideosSort>(VideosSort.fromOldToNew);
	public sortVideos$: Observable<VideosSort> = this.sortVideosBehaviorSubject.asObservable();

	constructor(public newVideoService: NewVideoService, public localStorageService: LocalStorageService) {
		this.videosBehaviorSubject.next(JSON.parse(window.localStorage.getItem('video-db')));
	}

	public adVideo(video: Video): void {
		this.videos.push(video);
		console.log(this.videos);

		this.videosBehaviorSubject.next(this.videos);
		this.localStorageService.saveToLocalStorage(this.videos);
	}

	public deleteVideo(index: number) {
		this.videos.splice(index, 1);
		this.localStorageService.saveToLocalStorage(this.videos);
		this.videosBehaviorSubject.next(this.videos);
	}

	public toogleFavorite(id: number | string) {
		const videosToLove = this.videos.map(item => {
			if (item.videoId === id) {
				item.favourite = !item.favourite;
			}
			return item;
		});

		this.videosBehaviorSubject.next(videosToLove);
		this.localStorageService.saveToLocalStorage(videosToLove);
	}

	public deleteAllVideos() {
		this.videos = [];
		this.videosBehaviorSubject.next(this.videos);
		this.localStorageService.saveToLocalStorage(this.videos);
	}

	public addDemoList() {
		this.videos = [...this.videos, ...demo];
		this.videosBehaviorSubject.next(this.videos);
		this.localStorageService.saveToLocalStorage(this.videos);
	}

	public getFavourite() {
		this.favouriteBehaviorSubject.next(true);
	}

	public getAllVideos() {
		this.favouriteBehaviorSubject.next(false);
	}

	public getSortVideos(sort: VideosSort) {
		this.sortVideosBehaviorSubject.next(sort);
	}
}
