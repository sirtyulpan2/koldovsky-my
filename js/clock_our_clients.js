(function () {
    const clockContainer = document.querySelector(".my-clock"); // DOM, Document Object Model Tree

    function updateClock() {
        clockContainer.innerText = new Date().toLocaleTimeString();
    }

    setInterval(updateClock, 1000);
})();