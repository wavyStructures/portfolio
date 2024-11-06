import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { ImprintComponent } from './imprint/imprint.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { AboveTheFoldComponent } from './main-page/above-the-fold/above-the-fold.component';
import { AboutMeComponent } from './main-page/about-me/about-me.component';
import { MySkillsComponent } from './main-page/my-skills/my-skills.component';
import { ContactformComponent } from './main-page/contactform/contactform.component';
import { ProjectsComponent } from './main-page/projects/projects.component';

export const routes: Routes = [
  { path: '', component: MainPageComponent },

 {
    path: 'imprint',
    component: ImprintComponent,
    data: { showFooter: false, preload: true },
  },

  {
    path: 'privacy-policy',
    component: PrivacyPolicyComponent,
    data: { showFooter: false },
  },
];
