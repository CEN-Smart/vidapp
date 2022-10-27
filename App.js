"use strict";
// todo Auto Implementation of Year on the footer
const yearEl = document.querySelector(".year");
const newDate = new Date().getFullYear();
yearEl.innerText = newDate;
// todo Making the Mobile Nav work

const mobileNavBtn = document.querySelector(".btn-open");
const navEl = document.querySelector(".nav");
mobileNavBtn.addEventListener("click", function (e) {
	e.preventDefault();
	navEl.classList.toggle("nav-open");
});
const linksEl = document.querySelectorAll(".nav-link");
linksEl.forEach((link) =>
	link.addEventListener("click", function (e) {
		e.preventDefault();
		if (link.classList.contains("nav-link")) navEl.classList.toggle("nav-open");
	})
);
