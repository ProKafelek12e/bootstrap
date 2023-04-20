const bar = document.getElementById("progress-bar")
var wartosc = 50
console.log(wartosc)
function down(){
    wartosc= wartosc-10
    bar.style.width = `${wartosc}%`  
}
function up(){
    wartosc = wartosc+10
    bar.style.width = `${wartosc}%`
}