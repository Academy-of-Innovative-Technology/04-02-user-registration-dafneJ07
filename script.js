
const form = document.getElementById("registrationForm");


const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const country = document.getElementById("country");
const about = document.getElementById("about");


const savedEls = {
  first: document.getElementById("savedFirstName"),
  last: document.getElementById("savedLastName"),
  email: document.getElementById("savedEmail"),
  country: document.getElementById("savedCountry"),
  type: document.getElementById("savedAccountType"),
  about: document.getElementById("savedAbout"),
};


const noUser = document.getElementById("noSavedUser");
const panel = document.getElementById("savedUserPanel");


// SAVE FORM
form.addEventListener("submit", e => {
  e.preventDefault();


  const selected = document.querySelector('input[name="accountType"]:checked');


  const user = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    password: password.value,
    country: country.value,
    accountType: selected ? selected.nextElementSibling.textContent : "",
    about: about.value
  };


  localStorage.setItem("registeredUser", JSON.stringify(user));
  displayUser(user);
});


// DISPLAY FUNCTION
function displayUser(user) {
  savedEls.first.textContent = user.firstName;
  savedEls.last.textContent = user.lastName;
  savedEls.email.textContent = user.email;
  savedEls.country.textContent = user.country;
  savedEls.type.textContent = user.accountType;
  savedEls.about.textContent = user.about;


  noUser.classList.add("d-none");
  panel.classList.remove("d-none");
}


// LOAD BUTTON
document.getElementById("loadUserBtn").onclick = () => {
  const data = localStorage.getItem("registeredUser");
  if (data) displayUser(JSON.parse(data));
};


// CLEAR BUTTON
document.getElementById("clearUserBtn").onclick = () => {
  localStorage.removeItem("registeredUser");
  panel.classList.add("d-none");
  noUser.classList.remove("d-none");
};


// AUTO LOAD ON REFRESH
const saved = localStorage.getItem("registeredUser");
if (saved) displayUser(JSON.parse(saved));
