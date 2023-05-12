function togglePasswordVisibility(id, icon) {
    var passwordInput = document.getElementById(id);
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    } else {
        passwordInput.type = "password";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    }
}
const moraleForm = document.getElementById("moraleForm");
const physiqueForm = document.getElementById("physiqueForm");
const moraleRadio = document.getElementById("morale");
const physiqueRadio = document.getElementById("physique");

moraleRadio.addEventListener("change", () => {
    if (moraleRadio.checked) {
        physiqueForm.classList.add("hidden");
        setTimeout(() => {
            physiqueForm.style.display = "none";
            moraleForm.style.display = "block";
            moraleForm.classList.remove("hidden");
        }, 400);
    }
});

physiqueRadio.addEventListener("change", () => {
    if (physiqueRadio.checked) {
        moraleForm.classList.add("hidden");
        setTimeout(() => {
            moraleForm.style.display = "none";
            physiqueForm.style.display = "block";
            physiqueForm.classList.remove("hidden");
        }, 400);
    }
});

const selectBtns = document.querySelectorAll(".select-btn"),
      itemLists = document.querySelectorAll(".list-items");

selectBtns.forEach(selectBtn => {
    selectBtn.addEventListener("click", (event) => {
        event.stopPropagation(); // Prevents the event from bubbling up to the document
        selectBtn.classList.toggle("open");
    });
});

itemLists.forEach(list => {
    const items = list.querySelectorAll(".item");
    items.forEach(item => {
        let checkbox = item.querySelector(".checkbox-input");
        let label = item.querySelector(".item-text");
        item.addEventListener("click", (event) => {
            event.stopPropagation(); // Prevents the event from bubbling up to the document and the list
            checkbox.checked = !checkbox.checked; // Toggle the checked property of the checkbox
            checkbox.dispatchEvent(new Event('change')); // Dispatch the change event
        });

        checkbox.addEventListener("change", () => {
            let checked = list.querySelectorAll(".checkbox-input:checked"),
                btnText = list.previousElementSibling.querySelector(".btn-text");

            if(checked && checked.length > 0){
                let selectedItems = Array.from(checked).map(input => input.nextElementSibling.textContent);
                btnText.innerText = selectedItems.join(', ');
            }else{
                btnText.innerText = "Choisir...";
            }
        });
    });
});

// Add event listener for click events on the document
document.addEventListener('click', (event) => {
    selectBtns.forEach(selectBtn => {
        // Check if the click event's target is inside the dropdown
        if (!selectBtn.contains(event.target)) {
            selectBtn.classList.remove("open"); // Close the dropdown
        }
    });
});
