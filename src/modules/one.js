const pasteDate = () => {

  const body = document.querySelector('body')
  
  const elementsObj = {
    hello: document.createElement('div'),
    currentDay: document.createElement('div'),
    currentTime: document.createElement('div'),
    newYear: document.createElement('div'),
  }

  for(let key in elementsObj){
    body.append(elementsObj[key]);
  }

  const getAllDate = () => {
    let date = new Date()
    const getDate = () => {
      let newYear = new Date('1 january 2023').getTime();
      let year = date.getTime();
      let getDaysOfNewYear = newYear - year
      let day = date.getDay()
      let time = date.toLocaleTimeString('en');
      getDaysOfNewYear = Math.floor((getDaysOfNewYear / 1000 / 60 / 60) / 24)
      return {day, time, getDaysOfNewYear}
    }
  
    const getCurrentDay = () => {
      const getDay = getDate();
      const dayArray = ["Понедельник", 'Вторник','Среда','Четверг','Пятница','Суббота','Воскресенье']
      function findDay () {
        dayArray.forEach((item, index) => {
          if((index) == getDay.day) {
            elementsObj.currentDay.textContent = 'Сегодня: ' + item
          } else {
            return false
          }
        });
      }
  
      findDay()
    }
  
    const greeting = () => {
      let time = date
      let timeStr = time.toLocaleTimeString('ru');
      timeStr = +timeStr.substr(0, 2);
  
      if(timeStr >= 12 && timeStr < 16) {
        elementsObj.hello.textContent = "Добрый день"
      } else if (timeStr >= 16) {
        elementsObj.hello.textContent = "Добрый вечер"
      } else if (timeStr == 0 || timeStr < 4) {
        elementsObj.hello.textContent = "Доброй ночи"
      } else if (timeStr >= 4 && timeStr < 12 ) {
        elementsObj.hello.textContent = "Доброй утро"
      }
    }
  
    const getCurrentTime = () => {
      let time = getDate();
      elementsObj.currentTime.textContent = 'Текущее время: ' + time.time
    }
  
    const happyNewYear = () => {
      let year = getDate();
      elementsObj.newYear.textContent = 'До нового года осталось ' + year.getDaysOfNewYear + ' дней'
    }

    getCurrentDay()
    greeting()
    getCurrentTime()
    happyNewYear()
  }



  setInterval(getAllDate, 1000);

}

export default pasteDate