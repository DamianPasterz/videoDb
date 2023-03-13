import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { fetchURL } from '@core/models/video-fetch.config';
import { Observable } from 'rxjs';
import { VimeoResponse } from '@core/models/video-response.model';

@Injectable({
	providedIn: 'root',
})
export class VimeoService {
	constructor(private http: HttpClient) {}

	public getVimeoData(vimeoId: string): Observable<VimeoResponse> {
		return this.http.get<VimeoResponse>(`${fetchURL.VimeoFetchUrl}/${vimeoId}`);
	}
}
