import { VideoServices } from './videoServices.model';

export class Video {
	constructor(
		public provider: VideoServices,
		public favorite = false,
		public videoId?: string | number,
		public title = 'test',
		public img = 'test',
		public viewCount = 0,
	) {}
}
