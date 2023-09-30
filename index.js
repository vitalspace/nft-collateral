const radioInputs = document.querySelectorAll('input[type="radio"]');
const glider = document.querySelector(".glider");
const label = document.querySelector("label")

const transformations = {
    "radio-1": {
        translate: "translateX(0)",
        width: "5.5em"
    },
    "radio-2": {
        translate: "translateX(80%)",
        width: "8em"
    },
    "radio-3": {
        translate: "translateX(150%)",
        width: "10em"
    }
};

radioInputs.forEach((radioInput) => {
    if (radioInput.id === 'radio-3') {
        radioInput.click()
        glider.style.transform = transformations['radio-3'].translate;
        glider.style.width = transformations['radio-3'].width;
        document.getElementById("label-3").style.fontWeight = 800;
    }

    radioInput.addEventListener("change", (e) => {
        const selectedValue = radioInput.id;
        const targetLabelId = e.target.getAttribute('data-target');
        const targetLabel = document.getElementById(targetLabelId);

        if (transformations[selectedValue] && targetLabel) {

            document.querySelectorAll("label").forEach((label) => {
                label.style.fontWeight = "normal";
            });

            glider.style.transform = transformations[selectedValue].translate;
            glider.style.width = transformations[selectedValue].width;
            targetLabel.style.fontWeight = 800;
        }
    });
});