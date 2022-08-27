import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IDE } from '../models/ide';
import { IDEService } from '../services/ide.service';
import { NgForm } from '@angular/forms';
import { formatCurrency } from '@angular/common';

@Component({
  selector: 'app-idedetails-component',
  templateUrl: './idedetails-component.component.html',
  styleUrls: ['./idedetails-component.component.css']
})
export class IDEDetailsComponent implements OnInit {

  public ide: IDE = new IDE();
  public displayForm: boolean;
  public currentYear: number = new Date().getFullYear();
  public message: string = '';
  public savedMessage: string;
  public isValidFormSubmitted: boolean = false;
  //private route: ActivatedRoute = new ActivatedRoute();
  private ideService: IDEService = new IDEService();

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    if(window.location.href != 'http://localhost:4200/ide/create'){
      this.getIDE();
    }
  }

  private getIDE(): void {
    let idParam = this.route.snapshot.paramMap.get('id');

    const id: number = parseInt(idParam);

    if(isNaN(id)){
      this.message = 'Error: invalid id "' + idParam + '"';
      return;
    }

    this.ideService.getIDE(id).subscribe(
      result => {
        if(result.id){
          this.ide = result;
        }
        else {
          this.message = 'IDE not found';
        }
      }
    )
  }

  public onFormSubmit(form: NgForm): void {

    this.message = '';
    this.savedMessage = '';
    this.isValidFormSubmitted = false;

    if(form.invalid)
      return;

    this.ide = form.value;

    if(window.location.href == 'http://localhost:4200/ide/create'){

      this.createIDE(form);

    } else {

      this.saveIDE();
    }
  }

  private createIDE(form: NgForm): void {

    this.ideService.createIDE(this.ide).subscribe(
      id => {
        if (id > 0){
          this.savedMessage = 'The IDE was created. Id: ' + id.toString();
          this.ide = new IDE();
          form.resetForm();
          this.isValidFormSubmitted = true;

        } else {
          this.message = 'An Error occurred. Provide all the information.';
        }
      }
    )
  }

  private saveIDE(): void {
    this.ideService.saveIDE(this.ide).subscribe(
      result => {
        if (result) {
          this.savedMessage = 'The IDE with id ' + this.ide.id + ' was saved';
        }
      }
    )
  }
}
