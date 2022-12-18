import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {MatToolbarModule} from '@angular/material/toolbar'; 
import { MatIconModule } from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list'
import {MatButtonModule} from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsetComponent } from './skillset/skillset.component';
import { ContactsComponent } from './contacts/contacts.component';
import { WorkComponent } from './work/work.component';
import { ResearchComponent } from './research/research.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { NavtestComponent } from './navtest/navtest.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IntroductionComponent,
    ProjectsComponent,
    SkillsetComponent,
    ContactsComponent,
    WorkComponent,
    ResearchComponent,
    ExperienceComponent,
    EducationComponent,
    HobbiesComponent,
    NavtestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    CommonModule,
    FontAwesomeModule,
    MatToolbarModule,
    MatIconModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule
    // AngularFontAwesomeModule,
    // Add this in angular.json
    // "node_modules/font-awesome/css/font-awesome.css",

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
