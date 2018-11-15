import { Manager } from './manager';
import { Base } from './base';


export class ExploreLocation {
    location: Base;
    siteManager: Manager;
    siteStrength: number;
    technologies: Base[];
    projects: Base[];
    teams: Base[];
}
