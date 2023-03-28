import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { minInput } from '@core/models/matching.models';
import { AddVideosService } from '@core/services/add-videos.service';

@Component({
	selector: 'app-search-bar',
	templateUrl: './search-bar.component.html',
	styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent {
	public isValidationErrorVisible: boolean;
	public minInput = minInput;

	constructor(public addVideosService: AddVideosService) {}

	public onAddVideo(form: NgForm): void {
		this.addVideosService.addVideo(form);
	}
}
