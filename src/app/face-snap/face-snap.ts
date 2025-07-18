import { Component, Input, OnInit } from '@angular/core';
import { FaceSnapModel } from "../models/face-snap";
import { DatePipe, NgClass, NgStyle, TitleCasePipe } from '@angular/common';
import { FaceSnapsService } from '../services/face-snaps.services';
import { Router } from '@angular/router';
@Component({
  selector: 'app-face-snap',
  imports: [

    NgClass,
    TitleCasePipe
  ],
  templateUrl: './face-snap.html',
  styleUrls: ['./face-snap.scss']
})
export class FaceSnap implements OnInit {
  @Input() faceSnap!: FaceSnapModel;


  snapButtonText!: string;
  userHasSnapped!: boolean;

  constructor(private faceSnapsService: FaceSnapsService, private router: Router) { }

  onViewFaceSnap() {
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  }

  ngOnInit() {
    this.snapButtonText = "Oh Snap!";
    this.userHasSnapped = false;

  }

 onSnap() {
    if (this.userHasSnapped) {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.snapButtonText = "Oh Snap!";
      this.userHasSnapped = false;
    } else {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.snapButtonText = "Oops, unSnap!";
      this.userHasSnapped = true;
    }

  }

}
