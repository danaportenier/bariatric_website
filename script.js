"use strict";
const wt = {
  calcheightInches: function () {
    this.heightInches = Number(
      Number(this.inputHeightFeet) * 12 + Number(this.inputHeightInches)
    );
  },

  calcweightKg: function () {
    this.weightKg = Number(this.inputWeight * 0.45359237);
    return this.weightKg;
  },

  calcheightMeterSquared: function () {
    this.heightMeterSquared = Number((this.heightInches * 0.0254) ** 2);
    return this.heightMeterSquared;
  },

  calcBMI: function () {
    this.bmi = Number(this.weightKg / this.heightMeterSquared);
    return this.bmi;
  },

  starter: function () {
    this.calcheightInches();
    this.calcweightKg();
    this.calcheightMeterSquared();
    this.calcBMI();
  },
};
// I added this bc my onclick event was triggering web page to reload causing all of my inputs to disappear it gets called in function with submit button
function preventDefaultAction(event) {
  event = event || window.event;

  if (event.preventDefault) {
    event.preventDefault();
  } else {
    event.returnValue = false;
  }
}
document
  .querySelector(".prev_bari_button_input")
  .addEventListener("change", function () {
    console.log("input");
    if (document.demographics.previous_bari_button.value === "yes") {
      console.log(document.demographics.previous_bari_button.value);
      document.querySelector(".previous_surgery").style.display =
        "inline-block";
    } else if (document.demographics.previous_bari_button.value === "no") {
      console.log(document.demographics.previous_bari_button.value);
      document.querySelector(".previous_surgery").style.display = "none";
    }
  });

const demographics_submit = document.querySelector(".demographics_button");
demographics_submit.addEventListener("submit", function () {
  const age = document.getElementById("age").value;
  console.log(age);
  const text_box = document.querySelector(".note");
  text_box.textContent = `Age is ${age}`;
  console.log(`Age is ${age}`);
  //preventDefaultAction();
});
