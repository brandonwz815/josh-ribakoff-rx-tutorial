import { Subject } from 'rxjs';


const s = new Subject<number>();
s.subscribe(val => console.log(val, process.hrtime()));

console.log('nexting 1...');
s.next(1);

setTimeout(() => {
  console.log('nexting 2...');
  s.next(2);
}, 1000);

setTimeout(() => {
  console.log('nexting 3...');
  s.next(3);
}, 2000);
