import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {APOLLO_OPTIONS} from 'apollo-angular';
import {HttpLink} from 'apollo-angular/http';
import {InMemoryCache} from '@apollo/client/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FriendsComponent } from './components/friends/friends.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { GraphQLModule } from './graphql.module';
import { NamesfilterPipe } from './pipes/namesfilter.pipe';
import { FisrtImagesPipe } from './pipes/fisrt-images.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import  {  NgxEmojiPickerModule  }  from  'ngx-emoji-picker';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { NgxSpinnerModule } from "ngx-spinner";
import { ChatComponent } from './components/chat/chat.component';


@NgModule({
  declarations: [
    AppComponent,
    FriendsComponent,
    NotFoundComponent,
    NamesfilterPipe,
    FisrtImagesPipe,
    ChatComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    GraphQLModule,
    HttpClientModule,
    NgbModule,
    PickerModule,
    NgxSpinnerModule,
    NgxEmojiPickerModule.forRoot()
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
     {
         provide: APOLLO_OPTIONS,
         useFactory: (httpLink: HttpLink) => {
           return {
            cache: new InMemoryCache(),
            link: httpLink.create({
            uri: ' http://localhost:4000/',
            }),
           };
          },
         deps: [HttpLink],
      }],
  bootstrap: [AppComponent]
})
export class AppModule { }
