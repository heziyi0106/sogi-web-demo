const phoneEl = document.querySelector("#phone-number")
const analyticsEl = document.querySelector("#analytics")
console.log(phoneEl, analyticsEl);

// phoneEl.value = "0988888888";

/* 綁死在該元素上的寫法
analyticsEl.addEventListener("click",analytics()) */
function analytics() {
    let phoneNumber = phoneEl.value;
    if (phoneNumber == "") {
        alert("請輸入手機號碼:");
        return
    }

    if (phoneNumber.length < 10) {
        alert("手機號碼為10個數字!");
        return
    }

    // 正則式
    /* import re (python)
    re.search(r'\d{10}',phoneNumber)*/

    //js的正則式用法==>//為正則式的開始和結束
    const re = /09\d{8}/;
    if (!re.test(phoneNumber)) {
        alert("手機號碼格式不正確!");
        return
    }

    console.log(phoneNumber);
    analyticsPhoneNumber(phoneNumber);
}

// 0968168168 取後面四個數字
function analyticsPhoneNumber(phoneNumber) {
    let fourNumber = phoneNumber.substring(phoneNumber.length - 4, phoneNumber.length);
    console.log(fourNumber);
    // 取得除以80的結果
    console.log(fourNumber / 80); //15.425
    // 取得整數的部分
    console.log(parseInt(fourNumber / 80));
    // (取得除以80的結果-整數)*80
    let code = parseInt(((fourNumber / 80) - parseInt(fourNumber / 80)) * 80)
    console.log(code);
    return code;
}