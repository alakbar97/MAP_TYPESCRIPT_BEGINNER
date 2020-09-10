import { Mappable } from './CustomMap';
import faker from 'faker';

export class User implements Mappable {
    name: string;
    location: {
        longitude: number;
        latitude: number
    }
    color: string = "red";
    constructor() {
        this.name = faker.name.firstName();
        this.location = {
            longitude: +faker.address.longitude(),
            latitude: +faker.address.latitude()
        }
    }

    markerContent(): string {
        return `User Name : ${this.name}`;
    }
}