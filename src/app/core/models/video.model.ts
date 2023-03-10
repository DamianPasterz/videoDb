import { VideoServices } from "./videoServices.model";

export interface Video  {
  provider: VideoServices;
  favorite: boolean;
  date: Date | string;
  videoId: string;
  title: string;
  img: string;
  viewCount: string;
};
