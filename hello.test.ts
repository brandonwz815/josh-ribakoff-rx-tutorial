import { combineLatest, merge, Subject } from 'rxjs';


it('works', () => {
  const a = new Subject<number>();
  const b = new Subject<number>();
  // const c = merge([a, b]);
  const c = combineLatest([a, b]);

  // consumer
  // c.subscribe(console.log);
  c.subscribe(([a, b]) => console.log(a + b));

  // producer
  // a.next('hello world');
  // b.next('hello world 2');
  a.next(3);
  b.next(3);
  b.next(4);
});
