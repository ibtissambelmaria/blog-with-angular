import { PageNotFundComponent } from './components/shared/page-not-fund/page-not-fund.component';
import { LoginComponent } from './components/backoffice/login/login.component';
import { RegisterComponent } from './components/backoffice/register/register.component';
import { ArticlesEditComponent } from './components/backoffice/articles-edit/articles-edit.component';
import { ArticlesAddComponent } from './components/backoffice/articles-add/articles-add.component';
import { ArticlesListComponent } from './components/backoffice/articles-list/articles-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: "blog", component: ArticlesListComponent },
  { path: "create", component: ArticlesAddComponent },
  { path: "blog/:id/edit", component: ArticlesEditComponent},
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  { path: "**", component: PageNotFundComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
