import BehaviorSubject from './behavior_subject.js';

var behaviourSubject = new BehaviorSubject(0);

behaviourSubject.next(1);

var observer1 = behaviourSubject.subscribe(
  (x) => {
    console.log("observer1 received :- " + x);
  }
);

behaviourSubject.next(2);
behaviourSubject.next(3);

var observer2 = behaviourSubject.subscribe(
  (x) => {
    console.log("observer2 received :- " + x);
  }
);
