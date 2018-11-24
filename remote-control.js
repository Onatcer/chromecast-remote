function loadORF1() {
    if (!session) {
        launchApp();
    }
    var waiter = setInterval(function () {
        if (session) {
            clearInterval(waiter);
        }
        loadMedia("https://orf1.cdn.ors.at/out/u/orf1/qxb/manifest_6.m3u8", "ORF eins", "");
    }, 3000);
    clearactive();
    document.querySelector("#orf1").classList = "loading";
    setTimeout(function () {
        clearactive();
        document.querySelector("#orf1").classList = "active";

    }, 3000);

}

function loadORF2() {
    if (!session) {
        launchApp();
    }
    var waiter = setInterval(function () {
        if (session) {
            clearInterval(waiter);
        }
        loadMedia("https://orf2.cdn.ors.at/out/u/orf2/qxb/manifest_6.m3u8", "ORF 2", "");
    }, 3000);
    document.querySelector("#orf2").classList = "loading";
    setTimeout(function () {
        clearactive();
        document.querySelector("#orf2").classList = "active";
    }, 3000);
}

function clearactive() {
    var elems = document.querySelectorAll(".active");

    [].forEach.call(elems, function (el) {
        el.classList.remove("active");
        el.classList.remove("loading");
    });
}