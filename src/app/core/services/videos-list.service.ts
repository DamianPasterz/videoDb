import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

import { Video } from '@core/models/video.model';
import { LocalStorageService } from './local-store.service';
import { NewVideoService } from './new-video.service';
import demo from '@tools/demo';

@Injectable({
	providedIn: 'root',
})
export class VideosListService {
	private videos: Video[] = this.localStorageService.getLocalStorage();

	private videosBehaviorSubject = new BehaviorSubject<Video[]>([]);
	public videos$: Observable<Video[]> = this.videosBehaviorSubject.asObservable();

	constructor(public newVideoService: NewVideoService, public localStorageService: LocalStorageService) {
		this.videosBehaviorSubject.next(JSON.parse(window.localStorage.getItem('video-db')));
	}

	public adVideo(video: Video): void {
		this.videos.push(video);
		this.setVidoes();
	}

	public deleteVideo(index: number): void {
		this.videos.splice(index, 1);
		this.setVidoes();
	}

	public toogleFavorite(id: number | string): void {
		this.videos = this.videos.map(item => {
			if (item.videoId === id) {
				item.favourite = !item.favourite;
			}
			return item;
		});
		this.setVidoes();
	}

	public deleteAllVideos(): void {
		this.videos = [];
		this.setVidoes();
	}

	public addDemoList(): void {
		this.videos = [...this.videos, ...demo];
		this.setVidoes();
	}

	private setVidoes(): void {
		this.videosBehaviorSubject.next(this.videos);
		this.localStorageService.saveToLocalStorage(this.videos);
	}
}
