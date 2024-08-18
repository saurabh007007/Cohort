let ctr = 0;
function callback() {
    console.log(ctr);
    const el = document.querySelectorAll("h2")[1]

    ctr = ctr + 1;
    el.innerHTML()
}
setInterval(callback, 1000);