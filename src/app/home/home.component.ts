import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MatDialog } from '@angular/material/dialog';
import { Subject, takeUntil } from 'rxjs';
import { DetalisComponent } from 'app/detalis/detalis.component';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnDestroy, OnInit {
	destroy = new Subject();

	constructor(public matDialog: MatDialog, public route: ActivatedRoute, public router: Router) {}

	ngOnInit() {
		this.route.params.pipe(takeUntil(this.destroy)).subscribe(params => {
			if (params['id']) {
				this.openDialog(params['id']);
			}
		});
	}

	private openDialog(id: string) {
		console.log(id);

		const currentDialog = this.matDialog.open(DetalisComponent, {
			data: { id },
		});
		currentDialog.afterClosed().subscribe(result => {
			this.router.navigateByUrl('');
		});
	}
	ngOnDestroy() {
		this.destroy.unsubscribe();
	}
}
