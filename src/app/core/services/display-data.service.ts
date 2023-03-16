import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

import { VideosSort } from '@core/models/vidoes-sort.model';

@Injectable({
	providedIn: 'root',
})
export class DisplayDataService {
	public favouriteBehaviorSubject = new BehaviorSubject<boolean>(false);
	public favourite$: Observable<boolean> = this.favouriteBehaviorSubject.asObservable();

	public sortVideosBehaviorSubject = new BehaviorSubject<VideosSort>(VideosSort.fromOldToNew);
	public sortVideos$: Observable<VideosSort> = this.sortVideosBehaviorSubject.asObservable();

	public gridBehaviorSubject = new BehaviorSubject<boolean>(true);
	public grid$: Observable<boolean> = this.gridBehaviorSubject.asObservable();

	public getFavourite() {
		this.favouriteBehaviorSubject.next(true);
	}

	public getAllVideos() {
		this.favouriteBehaviorSubject.next(false);
	}

	public getSortVideos(sort: VideosSort) {
		this.sortVideosBehaviorSubject.next(sort);
	}

	public displayGrid() {
		console.log('grid');

		this.gridBehaviorSubject.next(true);
		console.log(this.grid$);
	}
	public displayList() {
		console.log('list');

		this.gridBehaviorSubject.next(false);
		console.log(this.grid$);
	}
}