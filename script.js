// Maa Ambeshwari Medicines

document.addEventListener("DOMContentLoaded", function () {
    console.log("Website Loaded Successfully");

    const searchBtn = document.querySelector(".search-box button");
    const searchInput = document.querySelector(".search-box input");

    if (searchBtn) {
        searchBtn.addEventListener("click", function () {
            const value = searchInput.value.trim();
            if (value === "") {
                alert("Please enter a medicine name.");
            } else {
                alert("Searching for: " + value);
            }
        });
    }
});
