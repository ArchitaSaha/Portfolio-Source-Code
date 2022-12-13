import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

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
// import { ProjectListComponent } from './project-list/project-list.component';

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
    // ProjectListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    CommonModule,
    FontAwesomeModule
    // AngularFontAwesomeModule,
    // Add this in angular.json
    // "node_modules/font-awesome/css/font-awesome.css",

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
