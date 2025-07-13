import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from "../face-snap/face-snap";
import {FaceSnapModel} from "../models/face-snap";
import { FaceSnapsService } from '../services/face-snaps.services';

@Component({
  selector: 'app-face-snap-list',
  imports: [FaceSnap],
  templateUrl: './face-snap-list.html',
  styleUrl: './face-snap-list.scss'
})
export class FaceSnapList implements OnInit {
 faceSnaps!: FaceSnapModel[];

 constructor(private faceSnapsService: FaceSnapsService) {}

  ngOnInit() {
    this.faceSnaps = this.faceSnapsService.getFaceSanps();
  }


}
