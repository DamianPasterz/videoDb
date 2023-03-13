import { Component, Input } from '@angular/core';
import { Video } from '@core/models/video.model';

@Component({
	selector: 'app-videos-item',
	templateUrl: './videos-item.component.html',
	styleUrls: ['./videos-item.component.scss'],
})
export class VideosItemComponent {
	@Input() video: Video;
}
