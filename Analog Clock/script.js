const deg = 6;
     const hr = document.querySelector('#hr');
     const min = document.querySelector('#min');
     const sec = document.querySelector('#sec');
     
     setInterval(() => {
     let day = new Date();
     let hh = day.getHours() * 30;
     let mm = day.getMinutes() * deg;
     let ss = day.getSeconds() * deg;
     let ms = day.getMilliseconds()
     
     hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
     min.style.transform = `rotateZ(${mm+ss/60}deg)`;
     sec.style.transform = `rotateZ(${ss+(ms*6/1000)}deg)`;
     
     })