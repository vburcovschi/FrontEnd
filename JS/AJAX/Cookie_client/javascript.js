console.log("document.cookie", document.cookie);

function setCookie() {
    document.cookie = "test_cookie_client=testCookie; max-age=3600;";

    console.log("document.cookie", document.cookie);
}

const btn = document.querySelector(".j-btn-set-cookie");
btn.addEventListener("click", setCookie);
