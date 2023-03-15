import { VideoServices } from './videoServices.model';

export interface Video {
	provider: VideoServices;
	favourite: boolean;
	videoId: string | number;
	title: string;
	img: string;
	viewCount?: number | string;
	likeCount?: number | string;
	createdDate: Date;
	movieUrl?: string;
}
