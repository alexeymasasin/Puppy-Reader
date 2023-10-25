let userFirstName = document.querySelector("#firstname").value;
let userLastName = document.querySelector("#lastname").value;
let userEmail = document.querySelector("#email").value;
let userBirthDate = document.querySelector("#birthdate").value;

const submitBtn = document.querySelector(".form-btn-submit");

const userSex = document.querySelectorAll('input[name="sex"]');
const userVersion = document.querySelectorAll('input[name="version"]');

let sex = "";
let version = "";

submitBtn.onclick = (event) => {
  event.preventDefault();
  for (let i = 0; i < userSex.length; i++) {
    if (userSex[i].checked) {
      sex = userSex[i].value;
    }
  }
  for (let i = 0; i < userVersion.length; i++) {
    if (userVersion[i].checked) {
      version += userVersion[i].value + " ";
    }
  }
  console.log(
    `Имя пользователя: ${userFirstName}, фамилия: ${userLastName}, Email: ${userEmail}, дата рождения: ${userBirthDate}, пол: ${sex}, версии: ${version}`
  );
};
