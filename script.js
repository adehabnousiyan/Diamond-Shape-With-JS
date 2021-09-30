var star = document.querySelector(".star");
var n = +prompt("enter a number between 0-100");
function diamond (n) {
    if (n <= 100 && n >= 1) {
        for (let i = 0; i <= n; i++) {
            for (let j = n - 1; j >= i ; j--) {
                star.innerHTML += " ";
            }
            for (let k = 0; k <= i ; k++) {
                star.innerHTML += "* ";
            }
            star.innerHTML += "<br>"
        }
        for (let i = 0; i <= n - 1; i++) {
            for (let k = 0; k <= i; k++) {
                star.innerHTML += " ";
            }
            for (let j = n - 1; j >= i ; j--) {
                star.innerHTML += "* ";  
            }
            star.innerHTML += "<br>"
        }
    }
    else if (n === 0) {
        return;
    }
    else
    {
        n = +prompt("The number you've entered was not between 0-100. enter a number between 0-100:");
        diamond(n)
    }
    
}
diamond(n);