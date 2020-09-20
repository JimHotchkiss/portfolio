window.addEventListener("load", (event) => {
  handleMenuClick();
});

const handleMenuClick = () => {
  const menuDiv = document.getElementById("menu-div");
  menuDiv.addEventListener("click", () => {
    changeHamburger();
    changeMenuList();
  });
};

const changeMenuList = () => {
  const menuList = document.getElementById("menu-list");
  menuList.classList.toggle("active");
};

const changeHamburger = () => {
  const first = document.getElementById("first");
  const second = document.getElementById("second");
  const third = document.getElementById("third");
  first.classList.toggle("active");
  second.classList.toggle("active");
  third.classList.toggle("active");
};
