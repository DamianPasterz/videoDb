import { Pipe, PipeTransform } from '@angular/core';
import { Video } from '@core/models/video.model';

@Pipe({
	name: 'filterFavorite',
})
export class FilterFavoritePipe implements PipeTransform {
	transform(videos: Video[], filterFavorite: boolean): Video[] {
		return filterFavorite ? videos.filter(video => video.favourite === true) : videos;
	}
}
