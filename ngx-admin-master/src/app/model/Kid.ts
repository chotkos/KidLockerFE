export class Kid {
    name: string;
    lastname: string;
    groupName: string; 
    photoUrl: string; 
    parents : Array<Adult>;
    keepers: Array<Adult>;
    id:number;

    constructor(name:string, lastname: string, groupName: string,  photoUrl:string, parents:Array<Adult>, keepers:Array<Adult>, id:number){
        this.name = name;
        this.lastname = lastname;
        this.groupName = groupName;
        this.photoUrl = photoUrl;
        this.parents = parents;
        this.keepers = keepers;
        this.id= id;
    }

 
}

export class Adult {
    name: string;
    lastname: string;
    phoneNumber: string; 
    photoUrl: string;

    constructor(name:string, lastname:string, photoUrl:string, phoneNumber:string ){
        this.name = name;
        this.lastname = lastname;
        this.photoUrl = photoUrl;
        this.phoneNumber = phoneNumber;
    }

}
