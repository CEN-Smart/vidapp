"use strict";
// todo Auto Implementation of Year on the footer
const yearEl = document.querySelector(".year");
const newDate = new Date().getFullYear();
yearEl.innerText = newDate;
// todo Making the Mobile Nav work

const mobileNavBtn = document.querySelector(".btn-open");
const navEl = document.querySelector(".nav");
const ctaBtn = document.querySelector(".col-white");
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
ctaBtn.addEventListener("click", function () {
	navEl.classList.toggle("nav-open");
});
// todo sticky navigation
const sectionEl = document.querySelector(".accordian");
const obs = new IntersectionObserver(
	function (entries) {
		const ent = entries[0];
		if (!ent.isIntersecting) {
			document.body.classList.add("sticky");
		} else {
			document.body.classList.remove("sticky");
		}
	},
	{
		root: null,
		threshold: 0,
		rootMargin: "-50px",
	}
);
obs.observe(sectionEl);
console.log(navEl.getBoundingClientRect().height);
