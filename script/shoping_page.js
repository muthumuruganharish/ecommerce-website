document.addEventListener('DOMContentLoaded', function () {
    const g1h2 = document.querySelectorAll(".g1 h2");
    g1h2.forEach(heading => {
        heading.addEventListener("click", function () {
            const arrow = this.querySelector("span img.down-arrow, span img.down-arrow2, span img.down-arrow3");
            if (arrow) {
                arrow.classList.toggle("rotate");
            }
        });
    });

    //----------------------------------gender---------------------------------
    const gender_header = document.querySelector(".gender-container .g1 h2");
    gender_header.addEventListener("click", function () {
        const gender_type = document.querySelector(".gender-container .types1");

        if (gender_type.style.visibility === "hidden" || gender_type.style.visibility === "") {
            gender_type.style.visibility = "visible";
            gender_type.style.height = "auto";
        } else {
            gender_type.style.visibility = "hidden";
            gender_type.style.height = "0";
        }
    });

    //----------------------------------color---------------------------------
    const color_header = document.querySelector(".color .g1 h2");
    color_header.addEventListener("click", function () {
        const color_type = document.querySelector(".color .types2");

        if (color_type.style.visibility === "hidden" || color_type.style.visibility === "") {
            color_type.style.visibility = "visible";
            color_type.style.height = "auto";
        } else {
            color_type.style.visibility = "hidden";
            color_type.style.height = "0";
        }
    });

    //----------------------------------price---------------------------------
    const price_header = document.querySelector(".price .g1 h2");
    price_header.addEventListener("click", function () {
        const price_type = document.querySelector(".price .types3");
        if (price_type.style.visibility === "hidden" || price_type.style.visibility === "") {
            price_type.style.visibility = "visible";
            price_type.style.height = "auto";
        } else {
            price_type.style.visibility = "hidden";
            price_type.style.height = "0";
        }
    });

    //----------------------------------filter---------------------------------
    const genderRadios = document.querySelectorAll("input[name='filter1']");
    const allContent = document.querySelectorAll(".summer-main");
    const colorRadios=document.querySelectorAll("input[name='color']");
    const priceRadios=document.querySelectorAll("input[name='rs']");

    function filterContent() {
        const selectedGender = document.querySelector("input[name='filter1']:checked")?.value || "none";
        const selectedColor=document.querySelector("input[name='color']:checked")?.value||"none"
        const selectedPrice=document.querySelector("input[name='rs']:checked")?.value||"none"

        const genderMap = {
            male: "male",
            female: "female",
            none: null
        };
        const costMap = {
            rs500: [0, 500],
            rs1000: [500, 1000],
            rs1500: [1000, 1500],
            rs2000: [1500, 2000],
            none: null
        };
        

        const genderClass = genderMap[selectedGender];
        const costRange = costMap[selectedPrice];

        allContent.forEach(content => {



            const matchedGender = selectedGender === "none" || (genderClass && content.classList.contains(genderClass));

            const contentColor = content.getAttribute("data-color").trim()

            const matchesColor = selectedColor === "none" || contentColor === selectedColor;


            const contentCost = parseInt(content.getAttribute("data-rs"));

            const matchPrice= costRange===null || costRange&&contentCost>=costRange[0]&&contentCost<=costRange[1];
            

            if (matchedGender&&matchesColor&&matchPrice) {
                content.style.display = "block"; // Show matching content
            } else {
                content.style.display = "none"; // Hide non-matching content
            }
        });
    }

    // Attach event listeners to call filterContent when a radio button is selected
    genderRadios.forEach(radio => radio.addEventListener("change", filterContent));

    colorRadios.forEach(radio=>radio.addEventListener("change",filterContent))
    priceRadios.forEach(radio=>radio.addEventListener("change",filterContent))

    // Call filterContent initially to apply the default filter
    filterContent();
});