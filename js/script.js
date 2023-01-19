// Copyright (c) 2020 Brennan Lee All rights reserved
//
// Created by: Brennan Lee
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/assignment-5/sw.js", {
    scope: "/assignment-5/",
  })
}

function myButtonClicked() {
  const timesThroughLoop = parseInt(
    document.getElementById("times-through-loop").value
  )
  var counter = 0
  var piAnswer = 0

  while (counter < timesThroughLoop) {
    piAnswer = piAnswer + (4 / (1 + 2 * counter)) * (-1) ** counter
    counter++
  }

  document.getElementById("answer").innerHTML =
    "Pi to " + timesThroughLoop + " digits is " + piAnswer + "."
}
