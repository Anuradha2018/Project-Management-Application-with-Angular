import { Manager } from './manager';
import { Base } from './base';


export class ExploreLocation {
    id: number;
    name: string;
    siteManager: Manager;
    siteStrength: number;
    technologies: Base[];
    projects: Base[];
    teams: Base[];
}
