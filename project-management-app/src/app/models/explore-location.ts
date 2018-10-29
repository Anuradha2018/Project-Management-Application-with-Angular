import { Technology } from './technology';
import { Project } from './project';
import { Team } from './team';

export class Location {
    locationId: string;
    locationName: string;
    siteManager: string;
    siteStrength: string;
    technologies: Technology[];
    projects: Project[];
    teams: Team[];
}
