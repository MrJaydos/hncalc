function goToResults() {
  //Assign consts based on inputs on the page
  const rrp = document.getElementById("rrp").value;
  const discount = document.getElementById("discount").value || 0;
  const category = document.getElementById("category").value;

  if (!rrp) {
    alert("Please enter the product RRP.");
    return;
  }

  //Save Inputs to local storage
  localStorage.setItem("rrp", rrp);
  localStorage.setItem("discount", discount);
  localStorage.setItem("category", category);

  //Redirect to results page.
  window.location.href = "pc-calc-results.html";
}

function calculateCare(rrp, discount, category) {
  rrp = Number(rrp);
  discount = Number(discount || 0);
    // Add extra categories by duplicating the below if statement along with the nested if statement.
  let care;
  if (category === "computer") {
    if (rrp <= 299) care = { y1: 49, y2: 69, y3: 89 };
    else if (rrp <= 499) care = { y1: 69, y2: 119, y3: 169 };
    else care = { y1: "TBD", y2: "TBD", y3: "TBD" };
  } else if (category === "camera") {
    if (rrp <= 299) care = { y1: 49, y2: 69, y3: 89 };
    else if (rrp <= 499) care = { y1: 69, y2: 119, y3: 169 };
    else care = { y1: "TBD", y2: "TBD", y3: "TBD" };
  } else care = { y1: "TBD", y2: "TBD", y3: "TBD" };

  // Estimated cost (internal only)
  const costPercent = { y1: 0.40, y2: 0.50, y3: 0.55 };
  const estimatedCost = {
    y1: (typeof care.y1 === 'number') ? care.y1 * costPercent.y1 : null,
    y2: (typeof care.y2 === 'number') ? care.y2 * costPercent.y2 : null,
    y3: (typeof care.y3 === 'number') ? care.y3 * costPercent.y3 : null
  };

  // Apply discount but never go below estimated cost
  const finalPrice = {
    y1: (typeof care.y1 === 'number') ? Math.max(care.y1 - discount, estimatedCost.y1) : care.y1,
    y2: (typeof care.y2 === 'number') ? Math.max(care.y2 - discount, estimatedCost.y2) : care.y2,
    y3: (typeof care.y3 === 'number') ? Math.max(care.y3 - discount, estimatedCost.y3) : care.y3
  };

  return finalPrice;
}

