export class User{
    public age: number;
    public familyName: string;
    public givenName: string;
    constructor(familyName: string, givenName: string, age: number){
        this.familyName = familyName;
        this.givenName = givenName;
        this.age = age;
    }
}