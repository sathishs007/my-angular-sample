import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { routing }        from './app.routing';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { SampleComponent } from './sample/sample.component';
import { FormsModule }   from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    SampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
	//routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
