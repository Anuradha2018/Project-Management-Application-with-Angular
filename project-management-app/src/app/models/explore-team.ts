import { Team } from './team';
import { Project } from './project';

export class ExploreTeam {
    locationName: string;
    teamLead: string;
    teamSize: number;
    teamMembers: Team[];
    currentProjects: Project[];

}
