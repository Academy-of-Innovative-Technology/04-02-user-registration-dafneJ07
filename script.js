
const form = document.getElementById("registrationForm");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const country = document.getElementById("country");


const savedEls = {
  first: document.getElementById("#savedFirstName"),
  last: document.getElementById("#savedLastName"),
  email: document.getElementById("#savedEmail"),
  country: document.getElementById("#savedCountry"),
  type: document.getElementById("#savedAccountType"),
  about: document.getElementById("#savedAbout"),
};

const noUser = document.getElementById("noSavedUser");
const panel = document.getElementById("savedUserPanel");

form.addEventListener("submit", e => {
  e.preventDefault();

  const selected = document.querySelector('input[name="accountType"]:checked');

  const user = {
    firstName: inputs[0].value,
    lastName: inputs[1].value,
    email: inputs[2].value,
    password: inputs[3].value,
    country: selectCountry.value,
    accountType: selected ? selected.nextElementSibling.textContent : "",
    about: about.value
  };

  localStorage.setItem("registeredUser", JSON.stringify(user));
  displayUser(user);
});

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

document.getElementById("loadUserBtn").onclick = () => {
  const data = localStorage.getItem("registeredUser");
  if (data) displayUser(JSON.parse(data));
};

document.getElementById("clearUserBtn").onclick = () => {
  localStorage.removeItem("registeredUser");
  panel.classList.add("d-none");
  noUser.classList.remove("d-none");
};

// Auto-load on refresh
const saved = localStorage.getItem("registeredUser");
if (saved) displayUser(JSON.parse(saved));

