import { VideoServices } from './videoServices.model';

export interface Video {
	provider: VideoServices;
	favourite: boolean;
	videoId: string;
	title: string;
	img: string;
	viewCount?: string;
	likeCount?: string;
	createdDate: Date;
	movieUrl?: string;
}
