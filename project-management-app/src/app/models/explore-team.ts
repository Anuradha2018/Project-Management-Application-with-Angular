import { Manager } from './manager';
import { TeamMember } from './team-member';
import { Base } from './base';


export class ExploreTeam {
    team: Base;
    location: Location;
    manager: Manager;
    teamSize: number;
    teamMembers: TeamMember[];
    currentProjects: Base[];
    technologies: Base[];

}
