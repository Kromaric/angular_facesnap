import { Component, OnInit } from '@angular/core';
import { FaceSnapModel } from "../models/face-snap";
import { FaceSnapsService } from '../services/face-snaps.services';
import { ActivatedRoute } from '@angular/router';
import { DatePipe, NgClass, NgStyle, TitleCasePipe, UpperCasePipe } from '@angular/common';
@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.html',
  styleUrls: ['./single-face-snap.scss'],
  imports: [NgClass, DatePipe, NgStyle, UpperCasePipe],

})
export class SingleFaceSnap implements OnInit {
  faceSnap!: FaceSnapModel;
  buttonText!: string;

  constructor(private faceSnapsService: FaceSnapsService,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.buttonText = 'Oh Snap!';
    const faceSnapId = this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapsService.getFaceSnapById(faceSnapId);
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
}
