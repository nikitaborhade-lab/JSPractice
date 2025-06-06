// 1.
for (var i = 1; i <= 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, i * 1000);
}

// 2.
for (let i = 1; i <= 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, i * 1000);
}

// 3.
for (var i = 1; i <= 5; i++) {
  (function(i) {
    setTimeout(() => {
      console.log(i);
    }, i*1000);
  })(i);
}

// 4.
for (let i = 1; i <= 3; i++) {
  setTimeout(() => {
    console.log(`Message ${i} at ${i} second(s)`);
  }, i* 1000);
}
