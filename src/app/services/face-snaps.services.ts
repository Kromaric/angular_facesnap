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

    getFaceSnapById(faceSnapId: string): FaceSnapModel {
        const foundFaceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
        if (!foundFaceSnap) {
            throw new Error('FaceSnap not found!');
        }
        return foundFaceSnap;
    }

    snapFaceSnapById(faceSnapId: string, snapType: SnapType): void {
        const faceSnap: FaceSnapModel = this.getFaceSnapById(faceSnapId);
        faceSnap.snap(snapType);
    }

    addFaceSnap(formValue: { title: string; description: string; imageUrl: string; location?: string;}): void {
        const newId = this.faceSnaps.length > 0
            ? (parseInt(this.faceSnaps[this.faceSnaps.length - 1].id, 10) + 1).toString()
            : '1';
        const faceSnap = new FaceSnapModel(
            formValue.title,
            formValue.description,
            formValue.imageUrl,
            new Date(),
            0 // snaps
        );
        faceSnap.id = newId;
        if (formValue.location) {
            faceSnap.withLocation(formValue.location);
        }
        this.faceSnaps.push(faceSnap);
    }


}
