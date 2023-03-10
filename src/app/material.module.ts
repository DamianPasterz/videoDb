import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';

const material = [MatToolbarModule, MatIconModule, MatCardModule, MatFormFieldModule];

@NgModule({
	imports: [...material],
	exports: [...material],
})
export class MaterialModule {}
