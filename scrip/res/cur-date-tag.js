

//document.getElementById("todaylink").addEventListener("load", CurrenDateOfLiturgy);

CurrenDateOfLiturgy();

function CurrenDateOfLiturgy() {
  const todayis = new Date();
  const monthray = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  const weekray = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];
  
  var nwtx = '<a href = "';
  
  nwtx += 'pz-';
  nwtx += todayis.toLocaleString('default',{year: 'numeric'});
  nwtx += '-' + todayis.toLocaleString('default',{month: '2-digit'});
  nwtx += '-' + todayis.toLocaleString('default',{day: '2-digit'});
  nwtx += '-main.html';
  
  nwtx += '">';
  
  nwtx += 'Today is ' + weekray[todayis.getDay()];
  nwtx += ', ' + monthray[todayis.getMonth()];
  nwtx += ' ' + todayis.getDate();
  nwtx += ', ' + todayis.getFullYear();
  
  nwtx += '</a>';
  
  document.getElementById("todaylink").innerHTML = nwtx;
}

