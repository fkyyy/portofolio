// Toggle & responsive navigation
const navSlide = () => {
    const burger = document.querySelector(".burger"); // Pilih elemen burger
    const navLists = document.querySelector("nav"); // Pilih elemen nav

    // Pastikan elemen ditemukan sebelum menambahkan event listener
    if (burger && navLists) {
        burger.addEventListener("click", () => {
            // Toggle class untuk navigasi
            navLists.classList.toggle("nav-active");
            // Toggle class untuk animasi burger
            burger.classList.toggle("toggle-burger");
        });
    }
};

// Jalankan fungsi
navSlide();

//clear form before unload//

window.onbeforeunload = () => {
    for (const form of document.getelementbytagname("form")){
        form.reset();
    }
};
