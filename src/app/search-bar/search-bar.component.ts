import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { machingPiont } from '@core/models/matching.models';
import { InputService } from '@core/services/input.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  public showValidateErrors: boolean
  public minInput = machingPiont.minInput
  
  constructor(private inputService: InputService){}

public ngOnInit():void {
 this.inputService.onProviderAndIdCheck("")
  }
public onAddvideo(form: NgForm){
  console.log(form);
  if(form.invalid) this.showValidateErrors =true
 const videoData = this.inputService.onProviderAndIdCheck(form.value.value)
  }
}
