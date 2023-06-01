import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
<h3> Counter: {{counter}} </h3>
<button (click)="increaseBy(+1)" class="btn btn-primary">+1</button>
<button (click)="reset()" class="btn btn-primary">Reset</button>
<button (click)="increaseBy(-1)" class="btn btn-primary">-1</button>
  `
})

export class CounterComponent {
  constructor() { }

  private initValue:number = 10;
  public counter:number = this.initValue;

  increaseBy(value:number): void{
    this.counter+= value;
  }

  reset(): void{
    this.counter = this.initValue;
  }
}
