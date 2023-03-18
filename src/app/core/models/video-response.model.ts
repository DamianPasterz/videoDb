export interface VimeoResponse {
	provider_name: string;
	provider_url: string;
	title: string;
	description: string;
	thumbnail_url: string;
	video_id: number;
}

export interface YouTubeResponse {
	items: [
		{
			id: string;
			snippet: {
				publishedAt: string;
				title: string;
				description: string;
				thumbnails: {
					default: {
						url: string;
						width: number;
						height: number;
					};
				};
			};
			statistics: {
				viewCount: string;
				likeCount: string;
			};
		},
	];
}
