import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';

import { fetchURL } from '@core/models/video-fetch.config';
import { VimeoResponse, YouTubeResponse } from '@core/models/video-response.model';

@Injectable({
	providedIn: 'root',
})
export class VimeoService {
	constructor(private http: HttpClient) {}

	public getVimeoData(vimeoId: string): Observable<VimeoResponse> {
		return this.http.get<VimeoResponse>(`${fetchURL.VimeoFetchUrl}/${vimeoId}`);
	}
	public getYouTubeData(YouTubeId: string): Observable<YouTubeResponse> {
		return this.http.get<YouTubeResponse>(
			`${fetchURL.YouTubFetchUrl}${YouTubeId}&key=${environment.APP_KEY_YOUTUBE_API}${fetchURL.YouTubeSnipetPartUrl}`,
		);
	}
}
