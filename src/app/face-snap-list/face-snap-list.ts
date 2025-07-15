import { Component, OnInit, OnDestroy } from '@angular/core';
import { FaceSnap } from "../face-snap/face-snap";
import { FaceSnapModel } from "../models/face-snap";
import { FaceSnapsService } from '../services/face-snaps.services';
import { Observable, interval, Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'app-face-snap-list',
  standalone: true,
  imports: [FaceSnap],
  templateUrl: './face-snap-list.html',
  styleUrls: ['./face-snap-list.scss']
})
export class FaceSnapList implements OnInit, OnDestroy {
  faceSnaps!: FaceSnapModel[];
  private destroy$!: Subject<boolean>;

  constructor(private faceSnapsService: FaceSnapsService) {}

  ngOnInit() {
    this.destroy$ = new Subject<boolean>();
    this.faceSnaps = this.faceSnapsService.getFaceSanps();

    interval(1000).pipe(
      takeUntil(this.destroy$),
      tap(console.log)
    ).subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
  }
}


