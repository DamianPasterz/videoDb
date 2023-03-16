import { Pipe, PipeTransform } from '@angular/core';
import { Video } from '@core/models/video.model';
import { VideosSort } from '@core/models/vidoes-sort.model';

@Pipe({
	name: 'sort',
})
export class SortPipe implements PipeTransform {
	transform(videos: Video[], sort: VideosSort): Video[] {
		console.log(sort);

		switch (sort) {
			case VideosSort.fromAtoZ:
				videos.sort((a, b) =>
					a.title.toLowerCase() > b.title.toLowerCase() ? 1 : b.title.toLowerCase() > a.title.toLowerCase() ? -1 : 0,
				);
				break;
			case VideosSort.fromZtoA:
				videos.sort((a, b) =>
					a.title.toLowerCase() < b.title.toLowerCase() ? 1 : b.title.toLowerCase() < a.title.toLowerCase() ? -1 : 0,
				);
				break;
			case VideosSort.fromOldToNew:
				videos.sort((a, b) => (a.createdDate < b.createdDate ? 1 : b.createdDate < a.createdDate ? -1 : 0));

				break;
			case VideosSort.fromNewToOld:
				videos.sort((a, b) => (a.createdDate > b.createdDate ? 1 : b.createdDate > a.createdDate ? -1 : 0));

				break;
			default:
				videos;
				break;
		}
		return videos;
	}
}
