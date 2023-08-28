let submitButton = document.querySelector("#PrincipalContainer > button");

let principalContainer = document.querySelector("#PrincipalContainer");

let ratingButtons = document.querySelectorAll("#RatingButtonContainer > div");

let value;

for (let rb of ratingButtons) {
  rb.addEventListener("click", () => {
    if (value)
      ratingButtons[value - 1].setAttribute("class", "DefaultCircleBackground");

    value = rb.getAttribute("data-value");

    rb.setAttribute("class", "DefaultCircleBackground ActiveCircleBackground");
  });
}

submitButton.addEventListener("click", () => {
  if (!value) return;

  principalContainer.outerHTML =
    '<div id="PrincipalContainer" class="ThankYouScreen">' +
    '<figure>' +
    '  <img src="./assets/illustration-thank-you.svg" alt="Star" />' +
    '</figure>' +
    '<article id="ThankYouTextContainer">' +
    '  <p>You selected ' +
    value +
    ' out of 5</p>' +
    '  <h1>Thank you!</h1>' +
    '  <p>' +
    '    We appreciate you taking the time to give a rating. If you ever need' +
    '    more support, don’t hesitate to get in touch!' +
    '  </p>' +
    '</article>';
});