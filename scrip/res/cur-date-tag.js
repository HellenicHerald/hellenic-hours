
// cur-date-tag.js - Generates link to current date of Hellenic Hours
// Copyright (C) 2024  Sophia Elizabeth Shapira
//
// This program is free software; you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation; either version 2 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License along
// with this program; if not, write to the Free Software Foundation, Inc.,
// 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.



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

