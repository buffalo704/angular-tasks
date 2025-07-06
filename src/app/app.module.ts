import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/card/shared.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';

import { TasksModule } from './tasks/tasks.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent, UserComponent],
  imports: [BrowserModule, SharedModule, TasksModule],
  providers: [],
  bootstrap: [AppComponent],
  exports: [],
})
// This is the root module of the Angular application.
export class AppModule {}
