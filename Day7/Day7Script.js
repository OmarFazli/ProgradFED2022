function displayElement(n1,n2){
    let a = prompt('What is your name')
    alert('Hi ' + a)
    console.log(n1 + " " + n2)
}


function dummy(){
    displayElement(10,20)
}

function greet(){
    let name = document.getElementById("in").value
    document.getElementById("out").value = "Hi " + name
    document.getElementById("txt").value = "Hi " + name
    document.getElementById("para").innerHTML = '<h1>' + "Hi " + name + "</h1>"

}