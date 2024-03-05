let docTitile = document.title;

window.addEventListener("blur", () => {
    document.title = "Ruko abhi shadi baki hai...";
});

window.addEventListener("focus", () => {
    document.title = docTitile;
});
