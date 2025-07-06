import { Injectable } from "@angular/core";
import { FaceSnapModel } from "../models/face-snap";
import { SnapType } from "../models/snap-type.type";



@Injectable({
    providedIn: 'root'
})
export class FaceSnapsService {
    private faceSnaps: FaceSnapModel[] = [

        new FaceSnapModel(

            "Romaric au salon de l'innovation",
            "C'est mon snap",
            "https://picsum.photos/200/300",
            new Date(),
            10
        ).withLocation("Paris, France"),
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
        ).withLocation("Lyon, France")
    ];
    getFaceSanps(): FaceSnapModel[] {
        return [...this.faceSnaps];
    }

    snapFaceSnapById(faceSnapId: string, snapType: SnapType): void {
        const foundFaceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
        if (!foundFaceSnap) {
            throw new Error('FaceSnap not found!');
        }
        foundFaceSnap.snap(snapType);
    }


}
