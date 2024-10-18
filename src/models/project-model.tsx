export class ProjectModel {
    constructor(public id: number, public title: string, public description: string | null, public image: string | null, public type: string) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.image = image;
    }
}