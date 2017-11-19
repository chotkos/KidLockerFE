import {Kid, Adult} from './Kid';

export class MockData{

    parentsMock:Array<Array<Adult>> = [
        [
            new Adult("Jan","Okraska", "adult1.jpg", "+48690333939"),
        ],
        [
            new Adult("Rafał","Margas", "adult2.jpg", "+48696479436"),
        ],
        [
            new Adult("Mateusz","Chodkowski", "adult3.jpg", "+48514899374"),
            new Adult("Marta","Kołbuk", "adult4.jpg", "+48514280410"),
        ]
    ];

    keepersMock:Array<Array<Adult>> = [
        [
            new Adult("Jan","Okraska", "adult1.jpg", "+48690333939"),
            new Adult("Rafał","Margas", "adult2.jpg", "+48696479436"),
        ],[
            new Adult("Mateusz","Chodkowski", "adult3.jpg", "+48514899374"),
        ],[
            new Adult("Marta","Kołbuk", "adult4.jpg", "+48514280410"),
            new Adult("Mateusz","Chodkowski", "adult3.jpg", "+48514899374"),
        ],[
            new Adult("Rafał","Margas", "adult2.jpg", "+48696479436"),
        ],[
            new Adult("Jan","Okraska", "adult1.jpg", "+48690333939"),
        ]
    ];

    groupsMock:Array<string> = [
        "Pszczółki", "Misie", "Żabki", "Zajączki", "Bociany", "Myszki"
    ];

    groupImageUrl: Array<string> = [
      "006-animal.png",
      "004-animal-1.png",
      "003-animal-2.png",
      "001-animals.png",
      "005-people.png",
      "002-mouse.png"
    ];


    kidsMock:Array<Kid> = [];

    constructor(){
        var counter=0;
        for(var i=0;i<6;i++){
            var newKids = [
                new Kid("Adam","Chodkowski", this.groupsMock[i],"boy1.jpg",this.parentsMock[2], this.keepersMock[0], counter++),
                new Kid("Andrzej","Chodkowski", this.groupsMock[i],"boy2.jpg",this.parentsMock[2], this.keepersMock[0], counter++),
                new Kid("Konrad","Chodkowski", this.groupsMock[i],"boy3.jpg",this.parentsMock[2], this.keepersMock[0], counter++),
                new Kid("Zuzanna","Chodkowska", this.groupsMock[i],"girl1.jpg",this.parentsMock[2], this.keepersMock[0], counter++),
                new Kid("Ola","Chodkowska", this.groupsMock[i],"girl2.jpg",this.parentsMock[2], this.keepersMock[0], counter++),
                new Kid("Anna","Chodkowska", this.groupsMock[i],"girl3.jpg",this.parentsMock[2], this.keepersMock[0], counter++),
                new Kid("Tomasz","Margas", this.groupsMock[i],"boy4.jpg",this.parentsMock[1], this.keepersMock[2], counter++),
                new Kid("Marcin","Margas", this.groupsMock[i],"boy5.jpg",this.parentsMock[1], this.keepersMock[2], counter++),
                new Kid("Jan","Margas", this.groupsMock[i],"boy6.jpg",this.parentsMock[1], this.keepersMock[2], counter++),
                new Kid("Marta","Margas", this.groupsMock[i],"girl4.jpg",this.parentsMock[1], this.keepersMock[2], counter++),
                new Kid("Jola","Margas", this.groupsMock[i],"girl5.jpg",this.parentsMock[1], this.keepersMock[4], counter++),
                new Kid("Kasia","Margas", this.groupsMock[i],"girl6.jpg",this.parentsMock[1], this.keepersMock[4], counter++),
                new Kid("Antoni","Okraska", this.groupsMock[i],"boy7.jpg",this.parentsMock[0], this.keepersMock[2], counter++),
                new Kid("Andrzej","Margas", this.groupsMock[i],"boy8.jpg",this.parentsMock[0], this.keepersMock[2], counter++),
                new Kid("Konrad","Margas", this.groupsMock[i],"boy9.jpg",this.parentsMock[0], this.keepersMock[2], counter++),
                new Kid("Zuzanna","Margas", this.groupsMock[i],"girl7.jpg",this.parentsMock[0], this.keepersMock[2], counter++),
                new Kid("Ola","Margas", this.groupsMock[i],"girl8.jpg",this.parentsMock[0], this.keepersMock[3], counter++),
                new Kid("Anna","Margas", this.groupsMock[i],"girl9.jpg",this.parentsMock[0], this.keepersMock[3], counter++)];


            this.kidsMock = this.kidsMock.concat(newKids);
        }
    }

    GetKidsMock():Array<Kid> {
        return this.kidsMock;
    }

    GetGroupsMock():Array<string> {
        return this.groupsMock;
    }

    GetGroupsImageUrls():Array<string> {
      return this.groupImageUrl;
    }
}
