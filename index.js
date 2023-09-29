const radioInputs = document.querySelectorAll('input[type="radio"]');

const glider = document.querySelector(".glider");

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
        translate: "translateX(171%)",
        width: "9.2em"
    }
};

radioInputs.forEach((radioInput) => {
    if (radioInput.id === 'radio-3') {
        radioInput.click()
        glider.style.transform = transformations['radio-3'].translate;
        glider.style.width = transformations['radio-3'].width;
    }

    radioInput.addEventListener("change", () => {
        const selectedValue = radioInput.id;

        if (transformations[selectedValue]) {
            glider.style.transform = transformations[selectedValue].translate;
            glider.style.width = transformations[selectedValue].width;
        }
    });
});