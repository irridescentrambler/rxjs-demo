import subject from './subject.js'

var observer1 = subject.subscribe(
  (x) => { console.log("Observer1 :-" + x) }
)

var observer2 = subject.subscribe(
  (x) => { console.log("Observer2 :-" + x) }
)

subject.next("Hello");

observer2.unsubscribe();

subject.next("World");
