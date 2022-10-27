"use strict";
// todo Auto Implementation of Year on the footer
const yearEl = document.querySelector(".year");
const newDate = new Date().getFullYear();
yearEl.innerText = newDate;
