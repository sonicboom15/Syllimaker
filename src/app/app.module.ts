import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';
import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider } from 'angularx-social-login';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ParticlesDirective } from './particles-directive';
import { DaycompComponent } from './daycomp/daycomp.component';
import { TopiccompComponent } from './topiccomp/topiccomp.component';
import { EditorcompComponent } from './editorcomp/editorcomp.component'

const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("936953089183-5erkjvqnece3ant5hh3tk0c7ls355c06.apps.googleusercontent.com")
  },
]);

export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    ParticlesDirective,
    DaycompComponent,
    TopiccompComponent,
    EditorcompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SocialLoginModule,
    NgbModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
