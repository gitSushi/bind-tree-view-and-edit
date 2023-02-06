import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReadTreeComponent } from './read-tree/read-tree.component';

const routes: Routes = [
  // { path: 'root-node', component: ReadTreeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
