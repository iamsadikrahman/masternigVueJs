import { operations } from "./operations.js";

export function fullSeasonCalculation() {
  let paddyResult;
  let potatoResult;
  let totalCost;
  let currentDue;
  let finalDue;
  // paddy Season
  document
    .getElementById("total-paddy-irrigation-cost")
    .addEventListener("click", function () {
      const landSize = document.getElementById("pals").value;
      const irrigationCost = document.getElementById("paic").value;
      paddyResult = operations.paddySeasonCost(landSize, irrigationCost);
      document.getElementById("tpaic").value = paddyResult;
    });
  // Potato Season
  document
    .getElementById("total-potato-irrigation-cost")
    .addEventListener("click", function () {
      const landSize = document.getElementById("pols").value;
      const irrigationCost = document.getElementById("poic").value;
      potatoResult = operations.potatoSeasonCost(landSize, irrigationCost);
      document.getElementById("tpoic").value = potatoResult;
      // Total Cost
      totalCost = document.getElementById("tc").value =
        parseInt(paddyResult) + parseInt(potatoResult);
    });

  // Advance paid

  document.getElementById("ap").addEventListener("input", function () {
    const advancePaid = document.getElementById("ap").value;
    currentDue = document.getElementById("cd").value = totalCost - advancePaid;
  });
  // Today Paid

  document.getElementById("tp").addEventListener("input", function () {
    const todaypaid = document.getElementById("tp").value;
    finalDue = document.getElementById("fd").value = currentDue - todaypaid;
  });

  document
    .getElementById("customer-type")
    .addEventListener("click", function () {
      if (finalDue <= 0) {
        document.getElementById("paid-or-due").textContent =
          "You are  a Paid Customer";
      } else {
        document.getElementById("paid-or-due").textContent =
          "You are  a Due Customer";
      }
    });
}
