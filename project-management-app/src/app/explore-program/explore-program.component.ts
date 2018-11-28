import { ExploreProgramService } from './../services/explore-program.service';
import { Component, OnInit } from '@angular/core';
import { ExploreProgram } from '../models/explore-program';

@Component({
  selector: 'app-explore-program',
  templateUrl: './explore-program.component.html',
  styleUrls: ['./explore-program.component.css']
})
export class ExploreProgramComponent implements OnInit {
  programs: ExploreProgram[];
  programDetail: ExploreProgram;

  constructor(private exploreProgramService: ExploreProgramService) { }

  ngOnInit() {
    this.getPrograms();
  }
  getPrograms() {
    this.exploreProgramService.getPrograms()
    .subscribe((programs) => {
      this.programs = programs;
      this.getProgramDetail(this.programs[0].id);
    });
  }
    getProgramDetail(id) {
      this.programDetail = this.getProgramById(id);
    }
    getProgramById(id): ExploreProgram {
      for (let i = 0; i < this.programs.length; i++) {
        if (id === this.programs[i].id) {
          return this.programs[i];
        }
    }
  }

}
