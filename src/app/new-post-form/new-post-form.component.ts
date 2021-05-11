import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Post } from './../model/post.model';
import { PostService } from './../service/post.service';

@Component({
  selector: 'app-new-post-form',
  templateUrl: './new-post-form.component.html',
  styleUrls: ['./new-post-form.component.scss']
})
export class NewPostFormComponent implements OnInit {

  postForm!: FormGroup;
  fileIsUploading = false;
  fileUrl!: string;
  fileUploaded = false;

  constructor(private formBuilder: FormBuilder, private postService: PostService,
              private router: Router) { }
              
  ngOnInit() {
    this.initForm();
  }
  
  initForm() {
    this.postForm = this.formBuilder.group({
      title: ['', Validators.required],
      message: ''
    });
  }

  onSavePost(){
    const title =  this.postForm.get('title')!.value;
    const message = this.postForm.get('message')!.value;
    const newPost = new Post(title, message);

    newPost.likes = 0;
    if(this.fileUrl && this.fileUrl !== '') {
      newPost.photo = this.fileUrl;
    }
    this.postService.createNewPost(newPost);
    this.router.navigate(['/posts']);
  }

  onUploadFile(file: File) {
    this.fileIsUploading = true;
    this.postService.uploadFile(file).then(
      (url: string) => {
        this.fileUrl = url;
        this.fileIsUploading = false;
        this.fileUploaded = true;
      }
    );
  }

  detectFiles(event: any) {
    this.onUploadFile(event.target.files[0]);
  }

}
