import { Team } from './team';
import { Project } from './project';

export class ExploreTeam {
    teamId: number;
    locationName: string;
    teamLead: string;
    teamSize: number;
    teamMembers: Team[];
    currentProjects: Project[];

}
