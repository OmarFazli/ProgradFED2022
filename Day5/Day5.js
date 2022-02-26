let n = parseInt(prompt('Enter a number: '))
for(let i=0; i<=n; i++){
    if(i===5){
        console.log('continue the loop')
        continue
    }
    console.log(i + "hello");
}


/*
var - redeclared, update
let - only update, no redeclare
const - no redeclare, no update

parseInt to conv str input to int
parseFloat to conv str input to float


break and continue exist

5 loops:
for
while
do while
for in
for of


for(init/decl;condition;increm){}

init/decl
while(condition){
    increm
}


init/decl
do{
    increm
}while(condition)

*/

