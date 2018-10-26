import { Location } from './explore-location';
import { Technology } from './technology';

export class ExportProject {
    id: number;
    name: string;
    description: string;
    projectManager: string;
    projectDeadline: Date;
    locations: Location[];
    technologies: Technology[];
}
