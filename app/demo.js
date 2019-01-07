import { Observable } from 'rxjs';

const observable = Observable.create(function (observer) {
  setInterval(() => {
    var currentDate = new Date();
    var currentTime = {
      hours: currentDate.getHours(),
      minutes: currentDate.getMinutes(),
      seconds: currentDate.getSeconds()
    }
    observer.next(currentTime);
  }, 1000);
});

console.log(Observable);

export default observable;
