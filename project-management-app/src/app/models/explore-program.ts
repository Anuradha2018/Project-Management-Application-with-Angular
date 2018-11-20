import { Manager } from './manager';
import { Base } from './base';



export class ExploreProgram {
   id: number;
   name: string;
   description: string;
   manager: Manager;
   locations: Location[];
   projects: Base[];
   technologies: Base[];
}
