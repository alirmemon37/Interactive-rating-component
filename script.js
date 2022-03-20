"use strict";

const ratingUI = document.querySelector(".rating");
const thankYouUI = document.querySelector(".thank-you");

const ratingBtns = document.getElementsByClassName("rating-btn");
const submitBtn = document.querySelector(".rating-submit");
const ratingLabel = document.querySelector(".thank-you-rating");

let rating;
let isRated = false;
for (const btn of ratingBtns) {
    btn.addEventListener("click", function () {
        if (btn.classList.contains("clicked")) {
            btn.classList.remove("clicked");
            isRated = false;
        } else {
            for (const b of ratingBtns) {
                if (b.classList.contains("clicked")) {
                    b.classList.remove("clicked");
                }
            }
            btn.classList.add("clicked");
            rating = Number(btn.textContent);
            isRated = true;
        }
    });
}

submitBtn.addEventListener("click", function () {
    console.log("Clicked");
    if (isRated) {
        ratingUI.classList.add("hidden");
        thankYouUI.classList.remove("hidden");
        ratingLabel.textContent = `You selected ${rating} out of 5`;
    } 
    else {
        alert("Please select a rating!");
    }
});

