import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasicComponent } from './Basics/Basic.component';
import { SortingComponent } from './Sorting/Sorting.component';
import { PagingComponent } from './Paging/Paging.component';

const appRoutes: Routes = [
  { path: '', component: BasicComponent },
  { path: 'sorting', component: SortingComponent },
  { path: 'paging', component: PagingComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);