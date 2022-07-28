(function () {
    const form = document.querySelector(".main__questions-form");
    function handleSubmit(event) {
        if (!form.checkValidity()) return;
        event.preventDefault();
        const status = document.querySelector(".questions-form-status");
        fetch("https://formspree.io/f/xlevrrop", {
            method: "POST",
            body: new FormData(form),
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                status.innerHTML = "Thanks for your submission!";
                form.reset();
            } else {
                response.json().then(data => {
                    if (Object.hasOwn(data, 'errors')) {
                        status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
                    } else {
                        status.innerHTML = "Oops! There was a problem submitting your form"
                    }
                })
            }
        }).catch(error => {
            status.innerHTML = "Oops! There was a problem submitting your form"
        });
    }
    document.querySelector('.button-submit').addEventListener("click", handleSubmit);
})();