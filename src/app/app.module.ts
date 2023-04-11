import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BanerComponent } from './baner/baner.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { EducationComponent } from './education/education.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { ResponsiveDirective } from './directives/responsive.directive';

@NgModule({
  declarations: [AppComponent, BanerComponent, PersonalInformationComponent, EducationComponent, WorkExperienceComponent, SkillsComponent, ProjectsComponent, ContactComponent, ResponsiveDirective],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
