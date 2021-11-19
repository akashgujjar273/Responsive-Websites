const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

setInterval(function () {
  const now = new Date().getTime();
  const countdownValue = new Date(2021, 10, 19,14,58).getTime();
  const distance = countdownValue-now;
//   const distance = -1;

  const days = Math.floor(distance / day);
  const hours = Math.floor((distance % day) / hour);
  const minutes = Math.floor((distance % hour) / minute);
  const seconds = Math.floor((distance % minute) / second);

  //if countdown is ended
  if (distance < 0) {
    document.getElementById("quote").innerHTML = `
     <div class="quote">
       Hold Tight!!! Your life is about to blast into the stratosphere. 10, 9, 8, 7, 6, 5, 4, 3. 2 1 HAPPY BIRTHDAY!! P.S. don't forget your seatbelt.
     </div>`;

    document.getElementById("heading").innerHTML = `
     <h1>Happy Birthday</h1>`;

     document.getElementById("timer").innerHTML = `
                <div class="timer__box s1" >
                    <span>${0}</span>
                    <span>days</span>
                </div>
                <div class="timer__box s2">
                    <span>${0}</span>
                    <span>hours</span>
                </div>
                <div class="timer__box s3">
                    <span>${0}</span>
                    <span>minutes</span>
                </div>
                <div class="timer__box s4">
                    <span>${0}</span>
                    <span>seconds</span>
                </div>
    `;

     startConfetti()
     
  } else {
    //populating countdown
    document.getElementById("timer").innerHTML = `
                <div class="timer__box s1" >
                    <span>${days}</span>
                    <span>days</span>
                </div>
                <div class="timer__box s2">
                    <span>${hours}</span>
                    <span>hours</span>
                </div>
                <div class="timer__box s3">
                    <span>${minutes}</span>
                    <span>minutes</span>
                </div>
                <div class="timer__box s4">
                    <span>${seconds}</span>
                    <span>seconds</span>
                </div>
    `;
  }
}, 1000);
