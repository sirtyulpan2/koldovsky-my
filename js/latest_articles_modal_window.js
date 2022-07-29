(function () {
    let modal = document.getElementById("main__articles_modal_window");
    let btn_meal = document.getElementById("main__articles_btn_meal");
    let btn_care = document.getElementById("main__articles_btn_care");
    let btn_health = document.getElementById("main__articles_btn_health");
    let span = document.getElementsByClassName("main__articles_modal_close")[0];
    btn_meal.onclick = function () {
        modal.style.display = "block";
    }
    btn_care.onclick = function () {
        modal.style.display = "block";
    }
    btn_health.onclick = function () {
        modal.style.display = "block";
    }
    span.onclick = function () {
        modal.style.display = "none";
    }
    window.onclick = function (event) {
        if (event.target == btn_meal || event.target == btn_care || event.target == btn_health) {
            event.preventDefault();
        }
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
})();