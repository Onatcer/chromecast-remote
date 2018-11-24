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

function loadORF3() {
    if (!session) {
        launchApp();
    }
    var waiter = setInterval(function () {
        if (session) {
            clearInterval(waiter);
        }
        loadMedia("https://orf3.cdn.ors.at/out/u/orf3/qxb/manifest_5.m3u8", "ORF III", "");
    }, 3000);
    document.querySelector("#orf3").classList = "loading";
    setTimeout(function () {
        clearactive();
        document.querySelector("#orf3").classList = "active";
    }, 3000);
}

function loadORFSP() {
    if (!session) {
        launchApp();
    }
    var waiter = setInterval(function () {
        if (session) {
            clearInterval(waiter);
        }
        loadMedia("https://orfs.cdn.ors.at/out/u/orfs/qxb/manifest_3.m3u8", "ORF Sport Plus", "");
    }, 3000);
    document.querySelector("#orfsp").classList = "loading";
    setTimeout(function () {
        clearactive();
        document.querySelector("#orfsp").classList = "active";
    }, 3000);
}

function clearactive() {
    var elems = document.querySelectorAll(".active");

    [].forEach.call(elems, function (el) {
        el.classList.remove("active");
        el.classList.remove("loading");
    });
}