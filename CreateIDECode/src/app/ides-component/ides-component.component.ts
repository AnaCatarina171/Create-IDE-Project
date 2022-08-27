import { Component, OnInit } from '@angular/core';
import { IDE } from '../models/ide';
import { IDEService } from '../services/ide.service';

@Component({
  selector: 'app-ides-component',
  templateUrl: './ides-component.component.html',
  styleUrls: ['./ides-component.component.css']
})
export class IDEsComponent implements OnInit {

  public ides: IDE[] = new Array();
  public searchPhrase: string;
  public message: string;
  private ideService: IDEService = new IDEService();
  
  constructor(ideService: IDEService) { }

  ngOnInit(): void {
    this.getIDES();
  }

  public search(): void {
    this.ideService.search(this.searchPhrase).subscribe(
      result => {
        this.ides = result;
        this.message = this.ides.length + " results were found from search " + this.searchPhrase;
      }
    );
  }

  private getIDES(): void {
    this.ideService.getIDEs().subscribe(
      idesList => {
        this.ides = idesList;
      }
    );

    if(this.ides.length == 0){
        this.message = "No IDEs are created."
    }
  }
}
