import { VideoServices } from './videoServices.model';

export interface Video {
	provider: VideoServices;
	favorite: boolean;
	videoId: string | number;
	title: string;
	img: string;
	viewCount: number | string;
	createdDate: Date;
}
