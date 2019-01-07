import ReplaySubject from './replay_subject.js';

var replaySubject = new ReplaySubject(4);

replaySubject.next(1);
replaySubject.next(2);
replaySubject.next(3);
replaySubject.next(4);
replaySubject.next(5);
replaySubject.next(6);

var observer1 = replaySubject.subscribe(
  (x) => {
    console.log("observer1 says :- " + x);
  }
);
