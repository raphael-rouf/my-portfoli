import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
// Define an interface for the post data
interface PostData {
  name: string;
  message: string;
  email: string;
  subject: string;
}

@Component({
  selector: 'app-portfolio-contact',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './portfolio-contact.component.html',
  styleUrl: './portfolio-contact.component.css'
})
export class PortfolioContactComponent {
  rForm: FormGroup;
  message: string = '';
  subject: string = '';
  email: string = '';
  name: string = '';

  constructor(private fb: FormBuilder) {
    this.rForm = fb.group({
      'name': [null, Validators.required],
      'message': [null, Validators.required],
      'email': [null, [Validators.required, Validators.email]],
      'subject': [null, Validators.required],
    });
  }

  addPost(post: PostData) {
    this.message = post.message;
    this.name = post.name;
    this.email = post.email;
    this.subject = post.subject;
  }
}
