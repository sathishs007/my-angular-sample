import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { SampleComponent } from './sample/sample.component';
const routes: Routes = [
//
{ path: '', component: TestComponent},
    { path: 'sample', component: SampleComponent },
	{ path: '**', redirectTo: '' }
	];
	//
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
