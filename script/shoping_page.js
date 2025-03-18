document.addEventListener('DOMContentLoaded', function () {
    const g1h2 = document.querySelectorAll(".g1 h2")
    g1h2.forEach(heading => {
        heading.addEventListener("click", function () {
            const arrow = this.querySelector("span img.down-arrow, span img.down-arrow2, span img.down-arrow3");
            if (arrow) {
                arrow.classList.toggle("rotate");
            }
        })
    })

    //----------------------------------gender---------------------------------
    const gender_header = document.querySelector(".gender-container .g1 h2")
    gender_header.addEventListener("click", function () {
        const gender_type = document.querySelector(".gender-container .types1")
    
        if (gender_type.style.display === "none" || gender_type.style.display === "") {
            gender_type.style.display = "block";
        } else {
            gender_type.style.display = "none";
        }
    })

    //----------------------------------color---------------------------------
    const color_header = document.querySelector(".color .g1 h2")
    color_header.addEventListener("click", function () {
        const color_type = document.querySelector(".color .types2")

        if (color_type.style.display === "none" || color_type.style.display === "") {
            color_type.style.display = "block";
        } else {
            color_type.style.display = "none";
        }
    })

    //----------------------------------price---------------------------------
    const price_header = document.querySelector(".price .g1 h2")
    price_header.addEventListener("click", function () {
        const price_type = document.querySelector(".price .types3")
        if (price_type.style.display === "none" || price_type.style.display === "") {
            price_type.style.display = "block";
        } else {
            price_type.style.display = "none";
        }
    })
})