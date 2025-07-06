import { Component, Input, OnInit } from '@angular/core';
import { FaceSnapModel } from "../models/face-snap";
import { NgClass, NgStyle } from '@angular/common';
@Component({
  selector: 'app-face-snap',
  imports: [
    NgStyle,
    NgClass
  ],
  templateUrl: './face-snap.html',
  styleUrls: ['./face-snap.scss']
})
export class FaceSnap implements OnInit {
  @Input() faceSnap!: FaceSnapModel;
  title!: string;
  description!: string;
  imageUrl!: string;
  createdAt!: Date;
  snaps!: number;

  snapButtonText!: string;
  userHasSnapped!: boolean;

  ngOnInit() {
    this.snapButtonText = "Oh Snap!";
    this.userHasSnapped = false;
  }

 onSnap() {
    if (this.userHasSnapped) {
      this.faceSnap.removeSnap();
      this.snapButtonText = "Oh Snap!";
      this.userHasSnapped = false;
    } else {
      this.faceSnap.addSnap();
      this.snapButtonText = "Oops, unSnap!";
      this.userHasSnapped = true;
    }
    
  }

}
