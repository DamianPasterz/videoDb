export interface VimeoResponse {
	type: string;
	version: string;
	provider_name: string;
	provider_url: string;
	title: string;
	author_name: string;
	author_url: string;
	is_plus: string;
	account_type: string;
	html: string;
	width: number;
	height: number;
	duration: number;
	description: string;
	thumbnail_url: string;
	thumbnail_width: number;
	thumbnail_height: number;
	thumbnail_url_with_play_button: string;
	upload_date: string;
	video_id: number;
	uri: string;
}

export interface YouTubeResponse {
	kind: string;
	etag: string;
	items: [
		{
			kind: string;
			etag: string;
			id: string;
			snippet: {
				publishedAt: string;
				channelId: string;
				title: string;
				description: string;
				thumbnails: {
					default: {
						url: string;
						width: number;
						height: number;
					};
					medium: {
						url: string;
						width: number;
						height: number;
					};
					high: {
						url: string;
						width: number;
						height: number;
					};
				};
				channelTitle: string;
				tags: [];
				categoryId: string;
				liveBroadcastContent: string;
				defaultLanguage: string;
				localized: {
					title: string;
					description: string;
				};
				defaultAudioLanguage: string;
			};
			statistics: {
				viewCount: string;
				likeCount: string;
				favoriteCount: string;
				commentCount: string;
			};
		},
	];
	pageInfo: {
		totalResults: 1;
		resultsPerPage: number;
	};
}
