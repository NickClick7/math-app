import { Routes } from '@angular/router';
import { MultiplicationComponent } from './multiplication/multiplication.component';
import { HomeComponent } from './home/home.component';
import { AdditionComponent } from './addition/addition.component';
import { SubtractionComponent } from './subtraction/subtraction.component';
import { DivisonComponent } from './divison/divison.component';

export const routes: Routes = [
  {path: 'addition', component: AdditionComponent},
  {path: 'subtraction', component: SubtractionComponent},
  {path: 'multiplication', component: MultiplicationComponent},
  {path: 'division', component: DivisonComponent},
  {path: '', component: HomeComponent},
];
