// Question 18
function time() {
    let d = new Date();
    console.log(d.toLocaleTimeString());
    return;
}
setInterval(time,1000);
// no stop