import { Injectable } from '@angular/core';

import { Video } from '@core/models/video.model';

@Injectable({
	providedIn: 'root',
})
export class LocalStorageService {
	private localStorageName = 'video-db';

	public saveToLocalStorage(videosList: Video[]): void {
		localStorage.setItem(this.localStorageName, JSON.stringify(videosList));
	}
}
