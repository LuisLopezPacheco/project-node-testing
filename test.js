function timeConversion(s) {
    let [hour, minute, second, amPm] = s.split(':');
    let hour1 = 0;
    if (s === '12:00:00AM') {
      return '00:00:00';
    } else if (s === '12:00:00PM') {
      return '12:00:00';
    } else {
      if (amPm === 'PM' && hour != '12') {
        hour1 = (parseInt(hour) + 12);
      } else if (amPm === 'AM' && hour == '12') {
        hour1 = 0;
      } else {
        hour1 = parseInt(hour);
        console.log(hour1);

      }
      console.log(hour1);
      const hourStr24 = hour1.toString().padStart(2, '0');
      return `${hourStr24}:${minute}:${second}`;
    }
  }


  console.log(timeConversion('06:30:00PM')); // '18:30:00'