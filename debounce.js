// function throttle(fn = hello, time = 2000) {
//   let setTimeOutId;
//   return function () {
//     if (setTimeOutId) return;
//     setTimeOutId = setTimeout(() => fn(), time);
//   };
// }


// const callThrottle= throttle();

// callThrottle(); // this is the one that is going to be executed first
// callThrottle();
// callThrottle();
// callThrottle();


// function debounce(fn = hello, time = 2000) {
//   let setTimeOutId;
//   return function () {
//     if (setTimeOutId) clearTimeout(setTimeOutId);
//     setTimeOutId = setTimeout(() => fn(), time);
//   };
// }

// function hello() {
//   console.log("salam");
// }

// const change = debounce();
// change();
// change();
// change();
// change();
// change();
// change();
// change();
// change();
// change();
// change();
// change(); //this is the one that is going to be executed


