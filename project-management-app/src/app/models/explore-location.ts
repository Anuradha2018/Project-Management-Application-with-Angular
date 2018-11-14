import { Manager } from './manager';
import { Base } from './base';


export class ExploreLocation {
    location: Location;
    siteManager: Manager;
    siteStrength: string;
    technologies: Base[];
    projects: Base[];
    teams: Base[];
}
