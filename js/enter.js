//регистрация
let user = document.getElementById("userForm");
let enter = document.getElementById("userBtn");
let promo = document.getElementById("promo");
//Форма
let formName = document.getElementById("form_name");
let formEmail = document.getElementById("form_email");
let formPassword = document.getElementById("form_password");
let formSubmit = document.getElementById("form_submit");
// Кобинет
let name = document.getElementById("name");

// Закрыть
let closeBtnUser = document.getElementById("closeBtnUser");
let userСabinet = document.getElementById("userСabinet");
//курс
let apiBank = "https://www.nbrb.by/API/ExRates/Rates?Periodicity=0";
let curs = document.getElementById("curs");
let cursUsd = document.getElementById("cursUsd");
let valueUsd = document.getElementById("valueUsd");
let cursEuro = document.getElementById("cursEuro");
let valueEuro = document.getElementById("valueEuro");
let cursRu = document.getElementById("cursRu");
let valueRu = document.getElementById("valueRu");

enter.addEventListener("click", () => {
  if (user.style.display == "flex") {
    user.style.display = "none";
  } else {
    user.style.display = "flex";
  }
});

user.addEventListener("click", () => {
  event.stopPropagation(); // все просто) обработчик на дочерний элемент и все)
});

function checkName() {
  if (formName.value.length > 3 && formName.value.trim() !== "") {
    alert(`Здравствуйте ${formName.value}`);
    return true;
  } else {
    alert("Введите имя  ");
  }
}

function checkEmail() {
  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

  if (reg.test(formEmail.value) !== false) {
    alert(`Мы свяжимся с вами по : ${formEmail.value}`);
    return true;
  } else {
    alert("Введите почту");
  }
}
function checkPassword() {
  let reg = /[0 - 9]/;
  if (formPassword.value.length > 4 && reg.test(formPassword.value) == false) {
    return true;
  } else {
    alert("Введите пороль больше 4");
  }
}

formSubmit.addEventListener("click", () => {
  if (checkName() == true && checkEmail() == true && checkPassword() == true) {
    let person = new Person(
      formName.value,
      formEmail.value,
      formPassword.value
    );
    console.log(person);
    name.innerHTML = formName.value;
    userСabinet.style.display = "grid";
    promo.style.display = "none";
    user.style.display = "none";
  } else {
    alert("Попробуй еще");
  }
});

class Person {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }
}

closeBtnUser.addEventListener("click", () => {
  userСabinet.style.display = "none";
  promo.style.display = "flex";
});

async function usd(apiBank) {
  fetch(apiBank).then((response) =>
    response.json().then((data) => {
      (cursUsd.innerHTML = data[4].Cur_Name),
        (valueUsd.innerHTML = data[4].Cur_OfficialRate.toFixed(3));
    })
  );
}
usd(apiBank);

async function euro(apiBank) {
  fetch(apiBank).then((response) =>
    response.json().then((data) => {
      (cursEuro.innerHTML = data[5].Cur_Name),
        (valueEuro.innerHTML = data[5].Cur_OfficialRate.toFixed(3));
    })
  );
}
euro(apiBank);

async function ru(apiBank) {
  fetch(apiBank).then((response) =>
    response.json().then((data) => {
      (cursRu.innerHTML = data[16].Cur_Name),
        (valueRu.innerHTML = data[16].Cur_OfficialRate.toFixed(3));
    })
  );
}
ru(apiBank);
