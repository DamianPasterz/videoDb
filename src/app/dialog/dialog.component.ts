import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Subject, takeUntil } from 'rxjs';

@Component({
	selector: 'app-dialog',
	templateUrl: './dialog.component.html',
	styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnDestroy {
	currentDialog: MatDialogRef<any>;
	destroy = new Subject<any>();

	constructor(matDialog: MatDialog, route: ActivatedRoute, router: Router) {
		route.params.pipe(takeUntil(this.destroy)).subscribe(params => {
			if (this.currentDialog) {
				this.currentDialog.close();
			}
			this.currentDialog = matDialog.open(DialogComponent, {
				data: params,
			});
			this.currentDialog.afterClosed().subscribe(result => {
				router.navigateByUrl('/');
			});
		});
	}
	ngOnDestroy() {
		this.destroy.unsubscribe();
	}
}
