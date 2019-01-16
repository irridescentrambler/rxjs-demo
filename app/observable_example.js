import { Observable } from 'rxjs'

var observable = Observable.create((observable) => {
  observable.next(1);
});

var observer1 = observable.subscribe(
  (x) => {
    console.log("observer1 says-- Got " + x)
  }
);
