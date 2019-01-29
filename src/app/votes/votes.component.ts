import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'
// import { overrideComponentView } from '@angular/core/src/view';


@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css']
})
export class VotesComponent implements OnInit {

    quotes = [
        new Quote('Life is a journey not a destination','christine',0,0,'Ralph Waldo Emerson',new Date(2018,3,14)),
        new Quote('Do not cry because it is over.Smile because it happened','chantal',0,0,'by Dr.Seuss',new Date(2018,0,18)),
        new Quote( 'And now that you do not have to be perfect you can be GroupedObservable.','alice',0,0,'by John steinbeck',new Date(2018,2,14) ),
        new Quote( 'Every thing is hard before it is is','maranatha',0,0,'by Johnn wolfgang von goethe',new Date(2018,6,9)),
        new Quote('Anyone who has never made a mistake has never tried anything new','bayizere',0,0,'Albert Einstein',new Date(2018,1,12)),
        new Quote('Do not let your happiness depend on something you may lose','claudine',0,0,'C.S Lewis',new Date(2018,3,14) ),
    ]
    completequote(isComplete,index){
        if (isComplete){
            this.quotes.splice(index,1);
            }
            }


    toogleDetails(index){
      this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  constructor() { }

  ngOnInit() {
  }
}