import { getCounterSelector } from './../store/counter.selectors';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.scss'],
})
export class CounterOutputComponent implements OnInit {
  counter: number;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select(getCounterSelector).subscribe((counter) => {
      this.counter = counter;
    });
  }
}
