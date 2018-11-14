import { Manager } from './manager';
import { Base } from './base';


export class ExploreProduct {
    id: number;
    name: string;
    description: string;
    manager: Manager;
    location: Location[];
    technologies: Base[];
    teams: Base[];
    program: Base[];

}
