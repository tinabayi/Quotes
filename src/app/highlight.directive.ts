// import { Directive,ElementRef} from '@angular/core';

// @Directive({
//   selector: '[appHihglight]'
// })
// export class HighlightDirective {

//   constructor(private elem:ElementRef){
//     this.elem.nativeElement.style.backgroundColor='blue';
//   }
// }
import { Directive,ElementRef,HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective { 
  


    
  constructor(private elem:ElementRef){
    this.elem.nativeElement.style.backgroundColor='yellow';
  }

  @HostListener("click") onClicks(){
    this.textDeco("yellow")
  }

  @HostListener("dblclick") onDoubleClicks(){
    this.textDeco("None")
  }

  private textDeco(action:string){
    this.elem.nativeElement.style.textDecoration=action;

  }
}
