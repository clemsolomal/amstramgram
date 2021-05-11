import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {Routes, RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";

import {PostService} from "./service/post.service";

import { AppComponent } from './app.component';
import { PostsComponent } from './post-view/posts/posts.component';
import { NewPostFormComponent } from './new-post-form/new-post-form.component';
import { PostViewComponent } from './post-view/post-view.component';
import { SinglePostComponent } from './post-view/posts/single-post/single-post.component';

const appRoutes : Routes = [
  {path:"posts", component:PostViewComponent},
  {path:'', component:PostViewComponent},
  {path:"new-post",component:NewPostFormComponent},
  { path: 'posts/view/:id', component: SinglePostComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    NewPostFormComponent,
    PostViewComponent,
    SinglePostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
