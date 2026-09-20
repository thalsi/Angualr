import { Component, computed, effect, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-signal',
  styleUrl: './signal.css',
  templateUrl: './signal.html',
})
export class Signal {

  constructor() {
  effect(() => {
    console.log(this.singleCount());
  });
}

  count:number=0;

  singleCount=signal(0);
  doubleCount:any;

  addCount(){
    this.count++;
  }

  signalRead(){
    console.log(this.singleCount());
    
  }

  addSignal(){
    this.singleCount.set(3);

    this.doubleCount=computed(()=>this.singleCount()*2);

    console.log(this.doubleCount());
    // this.doubleCount.set(23);
  }

  updateSignal(){
    this.singleCount.update(i=>i*2);
  }
}
