import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { FeatureComponent } from './feature/feature.component';
import { SkillsComponent } from './skills/skills.component';
import { BlogsComponent } from './blogs/blogs.component';
import { PlateformComponent } from './plateform/plateform.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    FeatureComponent,
    SkillsComponent,
    BlogsComponent,
    PlateformComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
