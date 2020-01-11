let app = {

  init: function () {
    console.log('init')

    app.randomBackground()

    let deadline = 'Mar 10 2020 18:00:00'
    app.initializeClock(deadline)
  },        

  randomBackground: function () {
    let base = 'img/'
    $('#bg').backstretch([`${base}bg1.jpg`, `${base}bg2.jpg`, `${base}bg3.jpg`], { duration: 5000, fade: 1500 })
  }, 

  initializeClock: function (endtime) {      
    let daysSpan = document.getElementById('days');
    let hoursSpan = document.getElementById('hours');
    let minutesSpan = document.getElementById('minutes');
    let secondsSpan = document.getElementById('seconds');

    function updateClock () {
      let t = app.getTimeRemaining(endtime);

      daysSpan.innerHTML = t.days
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2)
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2)
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2)

      if (t.total <= 0) {
        clearInterval(timeinterval)
      }
    }

    updateClock();
    let timeinterval = setInterval(updateClock, 1000)
  },

  getTimeRemaining: function (endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date())
    let seconds = Math.floor((t / 1000) % 60)
    let minutes = Math.floor((t / 1000 / 60) % 60)
    let hours = Math.floor((t / (1000 * 60 * 60)) % 24)
    let days = Math.floor(t / (1000 * 60 * 60 * 24))
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    }
  }
};

$(app.init)
