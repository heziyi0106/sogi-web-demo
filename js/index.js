const phoneEl = document.querySelector("#phone-number")
const analyticsEl = document.querySelector("#analytics")
console.log(phoneEl, analyticsEl);

function analytics() {
    let phoneNumber = phoneEl.value;
    console.log(phoneNumber)
}

analytics();