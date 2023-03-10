export const  vimeoIDLength = 9;
export const  vimeoURLLength = 12;
export const  youtubeIDLength = 11;
export const  minYoutubeURLLength = 13;
export const  minInput = 8;

export const YOUTUBE_ID_CHECK = new RegExp(/^.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/);
export const VIMEO_ID_CHECK = new RegExp(/(?:(?:https?:)?\/\/)?(?:www\.)?(?:player\.)?vimeo\.com\/(?:video\/)?(\d+)/i);
export const VIMEO_ONLY_ID_CHECK = new RegExp(/^[a-zA-Z0-9]{9}$/);
export const YOUTUBE_ONLY_ID_CHECK = new RegExp(/^[a-zA-Z0-9_.-]{11}$/);
