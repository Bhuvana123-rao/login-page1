document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault(); // page reload avvakunda stop chestundi

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // simple validation
    if (username === "admin" && password === "1234") {
        alert("Login Successful ✅");
        // next page ki redirect avvali ante:
        window.location.href = "home.html";
    } else {
        alert("Invalid Username or Password ❌");
    }
});
