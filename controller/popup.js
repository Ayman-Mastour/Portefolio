document.addEventListener("DOMContentLoaded", function(){
    const popup = document.getElementById("popup");
    const closeBtn = document.getElementById("close");

    closeBtn.addEventListener('click', function() {
        popup.style.display="none"
    });

    setTimeout(function () {
        popup.style.display = "block";
    }, 3000);
})