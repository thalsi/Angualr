import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, of, ReplaySubject, Subject, Subscriber } from 'rxjs';

@Component({
  imports: [],
  selector: 'app-rxjs',
  styleUrl: './rxjs.css',
  templateUrl: './rxjs.html',
})
export class Rxjs implements OnInit{
  normalName:string='name';
  name$=of('John', 'Ali', 'Ahmed');

  nameList$=new Observable<string>(subscriber=>{
    subscriber.next("John");
    subscriber.next("Ali");
    subscriber.next("Ahmed");
    subscriber.complete();
  })

  subject$=new Subject<string>();

  user$ = new BehaviorSubject<string>('Guest');
  replaySubject$ = new ReplaySubject<string>(2);
  
  constructor(){

  }

  ngOnInit(): void {

    this.replaySubject$.next('a');
    this.replaySubject$.next('b');
    this.replaySubject$.next('c');
    this.replaySubject$.subscribe(observer=>{
      console.log(observer);
      
    })

    console.log('-----------------');
    this.user$.next('next 1');
    this.user$.next('next 2');
    this.user$.subscribe(value => {
      console.log(value);
    });
    console.log('-----------------');
    
    console.log(this.name$);
    console.log(this.normalName);

    this.name$.subscribe(name=>{
      console.log('...',name);
    })
    
    this.name$.subscribe(name=>{
       console.log('...',name);
    })
    
    this.nameList$.subscribe(sub=>{
      console.log(sub);
      
    })

    this.nameList$.subscribe({
      next: value => {
        console.log(value);
      },

      error: error => {
        console.error(error);
      },

      complete: () => {
        console.log('Finished');
      }
    });

    this.subject$.subscribe(obser=>{
      console.log(obser);
      
    })

    this.subject$.next(' This is A war')
    this.subject$.next(' This is A war of WW')

    this.subject$.subscribe(name => {
      console.log('Subscriber 1:', name);
    });

    this.subject$.subscribe(name => {
      console.log('Subscriber 2:', name);
    });

    this.subject$.next(' === Subject==')
  }

}
