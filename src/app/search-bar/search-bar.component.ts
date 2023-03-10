import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { minInput } from '@core/models/matching.models';
import { InputService } from '@core/services/input.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  public isValidationErrorVisible : boolean
  public minInput = minInput
  
  constructor(private inputService: InputService) {}

  public onAddVideo(form: NgForm) {
    if (form.invalid) this.isValidationErrorVisible  = true
    const videoData = this.inputService.onProviderAndIdCheck(form.value.value)
  }
}
