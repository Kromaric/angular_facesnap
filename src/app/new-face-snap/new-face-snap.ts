import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { FaceSnapModel } from '../models/face-snap';
import { UpperCasePipe, DatePipe, CommonModule } from '@angular/common';
import { FaceSnapsService } from '../services/face-snaps.services';
import { Router } from '@angular/router';


@Component({
  selector: 'app-new-face-snap',
  imports: [ReactiveFormsModule, FormsModule, UpperCasePipe, DatePipe, CommonModule],
  templateUrl: './new-face-snap.html',
  styleUrl: './new-face-snap.scss'
})
export class NewFaceSnap implements OnInit {

  snapForm!: FormGroup;
  faceSnapPreview$!: Observable<FaceSnapModel>;
  urlRegex!: RegExp;

  constructor(private formBuilder: FormBuilder,
    private faceSnapService: FaceSnapsService,
    private router: Router) {}

  ngOnInit() {
    this.urlRegex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;
    this.snapForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      imageUrl: ['', [Validators.required, Validators.pattern(this.urlRegex)]],
      location: ['']
    },
    {
      updateOn: 'blur' // Update the form on blur
    }
  );
    this.faceSnapPreview$ = this.snapForm.valueChanges.pipe(
      map(formValue => ({
        ...formValue,
        createdAt: new Date(),
        id: 0,
        snaps: 0,

      }))
    );
  }

  onSubmitForm() {
    this.faceSnapService.addFaceSnap(this.snapForm.value);
    this.router.navigateByUrl('/facesnaps');
  }

}
