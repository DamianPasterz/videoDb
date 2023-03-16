import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatMenuModule } from '@angular/material/menu';
import { MatGridListModule } from '@angular/material/grid-list';

const material = [
	MatToolbarModule,
	MatIconModule,
	MatCardModule,
	MatFormFieldModule,
	MatDialogModule,
	MatPaginatorModule,
	MatMenuModule,
	MatGridListModule,
];

@NgModule({
	imports: [...material],
	exports: [...material],
})
export class MaterialModule {}
