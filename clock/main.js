
// SCRIPT FOR THE FUNCTIONALITY OF CLOCK

const deg = 6;
      const hour_hand = document.querySelector("#hour_hand");
      const minute_hand = document.querySelector("#minute_hand");
      const second_hand = document.querySelector("#second_hand");

      setInterval(() => {
        let day = new Date();
        let hh = day.getHours() * 30;
        let mm = day.getMinutes() * deg;
        let ss = day.getSeconds() * deg;

        hour_hand.style.transform = `rotateZ(${hh + mm / 12}deg)`;
        minute_hand.style.transform = `rotateZ(${mm}deg)`;
        second_hand.style.transform = `rotateZ(${ss}deg)`;
      });
