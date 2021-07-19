import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DictionaryCreateComponent } from './dictionary/dictionary-create/dictionary-create.component';
import { DictionaryDetailComponent } from './dictionary/dictionary-detail/dictionary-detail.component';
import { DictionaryHomeComponent } from './dictionary/dictionary-home/dictionary-home.component';

const routes: Routes = [
  {
    path: 'dictionary/list',
    component: DictionaryHomeComponent
  },
  {
    path: 'dictionary/detail/:id',
    component: DictionaryDetailComponent
  }
  ,
  {
    path: 'dictionary/create',
    component: DictionaryCreateComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
