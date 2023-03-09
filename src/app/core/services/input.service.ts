import { Injectable } from '@angular/core';

import { machingPiont, VIMEO_ID_CHECK, VIMEO_ONLY_ID_CHECK, YOUTUBE_ID_CHECK, YOUTUBE_ONLY_ID_CHECK } from '@core/models/matching.models';
import { InputData } from '@core/models/input.model';
import { VideoServices } from '@core/models/videoServices.model';

@Injectable({
  providedIn: 'root'
})
export class InputService { 
  public inputData: InputData 
  constructor() {}

  public onProviderAndIdCheck(url:string) {
    if(url.includes(VideoServices.vimeo) || url.match(VIMEO_ID_CHECK) ){
      this.inputData={provider: VideoServices.vimeo, id: url.match(VIMEO_ID_CHECK)![1]}
      return this.inputData
    } 
    if(url.includes(VideoServices.youtube) || url.match(YOUTUBE_ID_CHECK) ){
      this.inputData={provider: VideoServices.youtube, id: url.match(YOUTUBE_ID_CHECK)![1]}
      return this.inputData
    } 
    if(url.length === machingPiont.vimeoIDLength || url.match(VIMEO_ONLY_ID_CHECK) ){
      this.inputData={provider: VideoServices.vimeo, id: url.match(VIMEO_ONLY_ID_CHECK)![0]}
      return this.inputData
    } 
    if(url.length >= machingPiont.youtubeIDLength || url.match(YOUTUBE_ONLY_ID_CHECK) ){
      this.inputData={provider: VideoServices.youtube, id: url.match(YOUTUBE_ONLY_ID_CHECK)![0]}
      return this.inputData
    }else return  this.inputData={provider: VideoServices.incorect, id: null}
  }
}
