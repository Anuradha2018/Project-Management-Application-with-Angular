import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
    this.router.navigate(['/explore/projects']);
  }
  /*public redirect123(dropdownValue) {
    console.log(dropdownValue);
    this.router.navigate(['/' + dropdownValue]);

  }*/
}
