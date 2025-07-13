import { Component, OnInit } from '@angular/core';
import { FaceSnapModel } from "../models/face-snap";
import { FaceSnapsService } from '../services/face-snaps.services';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DatePipe, NgClass, NgStyle, UpperCasePipe } from '@angular/common';
@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.html',
  styleUrls: ['./single-face-snap.scss'],
  imports: [NgClass, DatePipe, NgStyle, UpperCasePipe, RouterLink],

})
export class SingleFaceSnap implements OnInit {
  faceSnap!: FaceSnapModel;
  buttonText!: string;
  userHasSnapped!: boolean;

  constructor(private faceSnapsService: FaceSnapsService,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.prepareInterface();
    this.getFaceSnap();


  }

  onSnap() {
    if (this.buttonText === 'Oh Snap!') {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.buttonText = 'Oops, unSnap!';
    } else {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.buttonText = 'Oh Snap!';
    }
  }
  private prepareInterface() {
    this.buttonText = 'Oh Snap!';
    this.userHasSnapped = false;
  }

  private getFaceSnap() {
    const faceSnapId = this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapsService.getFaceSnapById(faceSnapId);
  }
}
