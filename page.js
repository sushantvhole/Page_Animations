var icon=document.getElementById("dark-icon");

icon.onclick=function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src="./img/bright.png"
    }else{
        icon.src="./img/moon.png"
    }
}


function time() {
  let gm = document.getElementById("say");
  let time_diplsay = document.getElementById("time");
  let date_display = document.getElementById("date");
  let day_display = document.getElementById("day");

  const Da = new Date();
  date = Da.getDate();
  month = Da.getMonth();
  year = Da.getFullYear();
  day = Da.getDay();
  //   "Date :-"+date+":"+month+":"+year+" "+day+"<br>";

  minute = Da.getMinutes();
  hour = Da.getHours();
  sec = Da.getSeconds();
  ti = Da.getTime();

  switch (month) {
    case 0:
      month = "January";
      break;
    case 1:
      month = "February";
      break;
    case 2:
      month = "March";
      break;
    case 3:
      month = "April";
      break;
    case 4:
      month = "May";
      break;
    case 5:
      month = "June";
      break;
    case 6:
      month = "July";
      break;
    case 7:
      month = "August";
      break;
    case 8:
      month = "September";
      break;
    case 9:
      month = "October";
      break;
    case 10:
      month = "November";
      break;
    case 11:
      month = "December";
      break;
  }

  if (hour < 10) {
    hour = "0" + hour;
  }
  if (minute < 10) {
    minute = "0" + minute;
  }
  if (sec < 10) {
    sec = "0" + sec;
  }

  time_diplsay.innerHTML = `${hour} : ${minute} : ${sec} `;
  date_display.innerHTML = `${date} / ${month} / ${year}`;

  // console.log(ti)

  // hours

  if ((hour >= 4) && (hour < 12)) {
    hour = "Good Morning";
  } else if ((hour >= 12) && (hour < 17)) {
    hour = "Good Afetrnoon";
  } else if ((hour >= 17) && (hour < 22)) {
    hour = "Good Evening";
  } else {
    hour = "Good Night";
  };

  gm.innerHTML = hour;

  // day

  switch (day) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
  }

  day_display.innerHTML = day;
  setInterval(time, 1000);
}


// img change

function imgchange() {
  function img1() {
    let img1 = document.getElementById("img1");

    img1.addEventListener("mouseover", () => {
      img1.setAttribute("src", "./img/chennai2.jpg");
    });

    img1.addEventListener("mouseout", () => {
      img1.setAttribute("src", "./img/chennai.jpg");
    });
  }

  img1();

  //

  function img2() {
    let img2 = document.getElementById("img2");

    img2.addEventListener("mouseover", () => {
      img2.setAttribute("src", "./img/goa2.jpg");
    });

    img2.addEventListener("mouseout", () => {
      img2.setAttribute("src", "./img/goa.jpg");
    });
  }

  img2();
  //

  function img3() {
    let img3 = document.getElementById("img3");

    img3.addEventListener("mouseover", () => {
      img3.setAttribute("src", "./img/hyderabad2.jpg");
    });

    img3.addEventListener("mouseout", () => {
      img3.setAttribute("src", "./img/hyderabad.webp");
    });
  }

  img3();

  function img4() {
    let img4 = document.getElementById("img4");

    img4.addEventListener("mouseover", () => {
      img4.setAttribute("src", "./img/mumbai2.jpg");
    });

    img4.addEventListener("mouseout", () => {
      img4.setAttribute("src", "./img/mumbai.webp");
    });
  }

  img4();
}

imgchange();

// select all things

let form = document.querySelector("#form");
let name = document.querySelector("#name");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let confirm = document.querySelector("#confirm");
let number = document.querySelector("#number");

form.addEventListener("submit", (e) => {
  const namevalue = name.value.trim();
  const emailvalue = email.value.trim();
  const passvalue = password.value.trim();
  const confirmvalue = confirm.value.trim();
  const numbervalue = number.value.trim();

  // for name

  if (namevalue == "") {
    e.preventDefault();
    alert("pleas enter name");
    name.focus();
    return false;
  }

  if (!isNaN(namevalue)) {
    e.preventDefault();
    alert("Please enter alphabet not a number");
    name.focus();
    return false;
  }

  if (namevalue.length <= 5 || namevalue.length >= 20) {
    e.preventDefault();
    alert("please enter full name");
    name.focus();
    return false;
  }

  //   for email

  if (emailvalue == "") {
    e.preventDefault();
    alert("please enter email id");
    email.focus();
    return false;
  }

  //  for password

  if (passvalue == "") {
    e.preventDefault();
    alert("Please enter Password");
    password.focus();
    return false;
  }

  if (passvalue.length <= 5 || passvalue.length >= 15) {
    e.preventDefault();
    alert("please enter valid password");
    password.focus();
    return false;
  }

  // confirm password

  if (confirmvalue == "") {
    e.preventDefault();
    alert("please enter confirm password");
    confirm.focus();
    return false;
  }

  if (confirmvalue != passvalue) {
    e.preventDefault();
    alert("confirm pasword is not match to password");
    confirm.focus();
    return false;
  }

  //    for number

  if (numbervalue == "") {
    e.preventDefault();
    alert("please enter mobile number");
    number.focus();
    return false;
  }

  if (numbervalue.length !== 10) {
    e.preventDefault();
    alert("please enter valid mobile number");
    number.focus();
    return false;
  }
});

// accordian faq start

const accordionHead = document.querySelectorAll(".accordian-item-header");

accordionHead.forEach((accordionHead) => {
  accordionHead.addEventListener("click", () => {
    accordionHead.classList.toggle("active");
  });
});
// accordian faq end
