import { Injectable } from '@angular/core';
import { Video } from '@core/models/video.model';
import { LocalStorageService } from './local-store.service';
import { Observable, BehaviorSubject } from 'rxjs';

import { NewVideoService } from './new-video.service';

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
		this.videosBehaviorSubject.next(this.videos);
		this.localStorageService.saveToLocalStorage(this.videos);
	}

	deleteVideo(index: number) {
		this.videos.splice(index, 1);
		this.localStorageService.saveToLocalStorage(this.videos);
		this.videosBehaviorSubject.next(this.videos);
	}

	toogleFavorite(id: number | string) {
		const videosToLove = this.videos.map(item => {
			if (item.videoId === id) {
				item.favorite = !item.favorite;
			}
			return item;
		});
		console.log(videosToLove);

		this.videosBehaviorSubject.next(videosToLove);
		this.localStorageService.saveToLocalStorage(videosToLove);
	}
}
