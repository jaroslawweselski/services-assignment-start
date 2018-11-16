export class CounterService {
  counter: number = 1;

  constructor() { }

  onClick() {
    console.log('Log ' + this.counter);
    this.counter++;
  }
}
