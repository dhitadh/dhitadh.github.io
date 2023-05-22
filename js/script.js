// Toggle clacc active
const navbarNav = document.querySelector(".navbar-nav");
// Ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//Klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

function hitung() {
  // ambil input dari pengguna
  var v1 = document.getElementById("v1").value.split(",");
  var v2 = document.getElementById("v2").value.split(",");

  // ubah input menjadi vektor numerik
  v1 = v1.map(Number);
  v2 = v2.map(Number);

  // hitung perkalian dot vektor
  var dot = 0;
  for (var i = 0; i < v1.length; i++) {
    dot += v1[i] * v2[i];
  }

  // tampilkan hasil
  document.getElementById("hasil").innerHTML = "Hasil: " + dot;
}
