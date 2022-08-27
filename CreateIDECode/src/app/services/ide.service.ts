import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IDE } from '../models/ide';

@Injectable({
  providedIn: 'root'
})
export class IDEService {

  private ides: Array<IDE> = new Array();

  constructor() {
  }

  /**
   * Create a new IDE
   * @param ide IDE
   * @returns number 0 for failed, 1 for successful
   */
  public createIDE(ide: IDE): Observable<number>{
    this.getIDEs();

    if(this.ides.length == 0)
      this.ides = new Array();

    try{
      ide.id = this.ides.length + 1;

      this.ides.push(ide);
      console.log(this.ides);
      localStorage.setItem('ides', JSON.stringify(this.ides));
  
      return of(ide.id);
    }
    catch {
      return of(0);
    }
  }

  /**
   * Return the IDEs created
   * @returns list of IDEs
   */
  public getIDEs(): Observable<IDE[]>{
    let local = localStorage.getItem('ides');

    if(local){
      this.ides = <IDE[]>(JSON.parse(local));
    }

    return of(this.ides);
  }

  /**
   * Return IDE based on its id
   * @param id number current id
   * @returns id
   */
  public getIDE(id: number): Observable<IDE>{
    let local = <IDE[]>(JSON.parse(localStorage.getItem('ides')));

    let currentIDE: IDE = new IDE();

      //checking for duplication
    local.findIndex((obj) => {
      if(obj.id == id)
        return currentIDE = obj;
      return 0;
      })

    return of(currentIDE);
  }

  /**
   * Update an IDE
   * @param ide IDE to update
   * @returns boolean true or false
   */
  public saveIDE(ide: IDE): Observable<boolean> {
    try{

      this.getIDEs();

      //checking for duplication
      let isDuplicated = this.ides.findIndex((obj) => {
        return obj.name == ide.name 
                && obj.company == ide.company 
                && obj.description == ide.description
                && obj.initialReleaseYear == ide.initialReleaseYear;
                //&& obj.logo == ide.logo; 
      }) != -1;

      if (isDuplicated) {
        console.log('This IDE already exists');
        return of(false);

      } else {
        this.ides[ide.id - 1] = ide;

        localStorage.setItem('ides', JSON.stringify(this.ides));

        return of(true);
      }
    } catch(e)  {
      console.log(e.message);
      return of(false);

    }
  }

  /**
   * Search IDEs by the company name
   * @param searchPhrase string search phrase
   * @returns list of IDEs
   */
  public search(searchPhrase: string): Observable<IDE[]>{
    let local = <IDE[]>(JSON.parse(localStorage.getItem('ides')));

    let query = local.filter(i => i.company.toLowerCase() == searchPhrase.toLowerCase());

    return of(query);
  }

  /**
   * delete a specific IDE
   * @param index index of the selected IDE
   */
     deleteIDE(index:number) : void {
      this.ides.splice(index, 1);
  
      localStorage.setItem('ides', JSON.stringify(this.ides));
    }
}
