let today = document.querySelector(".today");
let thisWeek = document.querySelector(".this-week");
let thisMonth = document.querySelector(".this-month");
let allTime = document.querySelector(".all-time");



thisWeek.onclick = function () {
    document.querySelector(".week").style.display = "block";
    document.querySelector(".today-").style.display = "none";
    document.querySelector(".month").style.display = "none";
    document.querySelector(".all").style.display = "none";
  };
thisMonth.onclick = function () {
    document.querySelector(".week").style.display = "none";
    document.querySelector(".today-").style.display = "none";
    document.querySelector(".month").style.display = "block";
    document.querySelector(".all").style.display = "none";
  };
allTime.onclick = function () {
    document.querySelector(".week").style.display = "none";
    document.querySelector(".today-").style.display = "none";
    document.querySelector(".month").style.display = "none";
    document.querySelector(".all").style.display = "block";
  };
today.onclick = function () {
    document.querySelector(".week").style.display = "none";
    document.querySelector(".today-").style.display = "block";
    document.querySelector(".month").style.display = "none";
    document.querySelector(".all").style.display = "none";
  };