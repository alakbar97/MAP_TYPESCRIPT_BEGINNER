import { Mappable } from './CustomMap';
import faker from 'faker';

export class Company implements Mappable {
    companyName: string;
    catchPhrase: string;
    location: {
        latitude: number;
        longitude: number;
    };
    color: string = 'orange';
    constructor() {
        this.companyName = faker.company.companyName();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            latitude: +faker.address.latitude(),
            longitude: +faker.address.longitude()
        }
    }

    markerContent(): string {
        return `Company Name : ${this.companyName}`;
    }
}