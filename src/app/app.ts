import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from "./face-snap/face-snap";
import {FaceSnapModel} from "./models/face-snap";


@Component({
  selector: 'app-root',
  
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [FaceSnap]
})
export class App implements OnInit {
  faceSnaps!: FaceSnapModel[];

  ngOnInit() {
    this.faceSnaps = [
      new FaceSnapModel(
        "Romaric",
        "C'est mon snap",
        "https://picsum.photos/200/300",
        new Date(),
        10
      ),
      new FaceSnapModel(
        "Romaric",
        "C'est un autre snap",
        "https://picsum.photos/200/300",
        new Date(),
        6
      ),
      new FaceSnapModel(
        "Romaric",
        "C'est mon dernier snap",
        "https://picsum.photos/200/300",
        new Date(),
        160
      )
    ];
    
    this.faceSnaps[0].setLocation("Paris");
    this.faceSnaps[2].setLocation("Lyon");
  }
 
}
