function loadNavbar() {
    fetch("/hncalc/partials/nav.html")
    .then(res => res.text())
    .then(html => {
        document.getElementById("navbar").innerHTML = html;
    });
}

function loadFooter() {
    fetch("/hncalc/partials/footer.html")
    .then(res => res.text())
    .then(html => {
        document.getElementById("footer").innerHTML = html;
    });
}