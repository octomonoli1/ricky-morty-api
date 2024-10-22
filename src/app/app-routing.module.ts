import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './components/content/content.component';
import { DetailComponent } from './components/detail/detail.component';

const routes: Routes = [
  {path: '', component: ContentComponent},
  {path: 'home', component: ContentComponent},
  {path: 'character', component: DetailComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
