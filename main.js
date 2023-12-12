let output=null;
document.querySelector('#Output-temp').value=output;
function tempconverter(){
    let fahrenheit = document.querySelector('#Input-temp').value;
    console.log(fahrenheit)
    let celsius = (fahrenheit - 32) * 5/9;
    document.querySelector('#Output-temp').value=celsius;
    console.log(celsius)
}
function resetval(){
    document.querySelector('#Output-temp').value=null;
    document.querySelector('#Input-temp').value=null;
}