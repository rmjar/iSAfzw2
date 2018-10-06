function setResetButton() {
    const resetButton = document.getElementById("reset");
    resetButton.addEventListener("click", function () {
        if (window.confirm("Are you sure, you want to reset?")) {
            window.location.reload();
        }
    });
}