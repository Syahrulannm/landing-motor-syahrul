// <!-- 🌓 Toggle Mode Script -->
function gantiTema() {
  const isDark = document.documentElement.classList.contains("dark"); //Untuk manggil classlist dari "dark"
  if (isDark) {
    document.documentElement.classList.remove("dark"); //Hapus mode gelap
    localStorage.setItem("mode", "light"); //Ganti ke mode terang
  } else {
    document.documentElement.classList.add("dark"); //Tambahkan mode gelap
    localStorage.setItem("mode", "dark"); //Aktifkan mode gelap
  }
}

//Aktifkan mode dari localStorage saat saat halaman dibuka
window.onload = () => {
  if (localStorage.getItem("mode") === "dark") {
    document.documentElement.classList.add("dark");
  }
};

//Tombol Humbleger Responsive HP
const toggleBtn = document.getElementById("toggleBtn");
const mobileMenu = document.getElementById("mobileMenu");

toggleBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// <!-- AOS Script -->

AOS.init();
