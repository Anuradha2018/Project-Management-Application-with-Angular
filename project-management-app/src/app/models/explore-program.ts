import { Manager } from './manager';
import { Base } from './base';



export class Program {
   id: number;
   name: string;
   description: string;
   manager: Manager;
   locations: Location[];
   projects: Base[];
   technologies: Base[];
}
