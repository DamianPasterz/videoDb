export interface VimeoResponse {
	provider_name: string;
	provider_url: string;
	title: string;
	description: string;
	thumbnail_url: string;
	video_id: string;
}

export interface YouTubeResponse {
	items: YouTubeResponseItem[];
}

export interface YouTubeResponseItem {
	id: string;
	snippet: YouTubeResponseSnippet;
	statistics: YouTubeResponseStatistics;
}

export interface YouTubeResponseSnippet {
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
}

export interface YouTubeResponseStatistics {
	viewCount: string;
	likeCount: string;
}
