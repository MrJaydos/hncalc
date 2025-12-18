function goToResults() {
    //Assign consts based on inputs on the page
    const rrp = document.getElementById('rrp').value;
    const discount = document.getElementById('discount').value || 0;
    const category = document.getElementById('category').value;

    if (!rrp) {
        alert('Please enter the product RRP.');
        return;
    }

    //Save Inputs to local storage
    localStorage.setItem('rrp', rrp);
    localStorage.setItem('discount', discount)
    localStorage.setItem('category', category)

    //Redirect to results page.
    window.location.href = 'pc-calc-results.html'
}