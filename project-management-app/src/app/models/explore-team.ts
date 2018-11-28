import { Manager } from './manager';
import { TeamMember } from './team-member';
import { Base } from './base';


export class ExploreTeam {
    id: number;
    name: string;
    location: Base;
    manager: Manager;
    teamSize: number;
    teamMembers: TeamMember[];
    currentProjects: Base[];
    technologies: Base[];

}
