import { Manager } from './manager';
import { Base } from './base';

export class ExploreProject {
    id: number;
    name: string;
    description: string;
    projectManager: Manager;
    projectDeadline: Date;
    locations: Base[];
    teams: Base[];
    technologies: Base[];
}
