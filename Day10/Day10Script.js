let arr = [1,2,3.25,"Pro"]
console.log(arr);
console.log(arr.length);
console.log(arr[arr.length-1]);


for(let i = 0; i<arr.length;i++){
    console.log(arr[i]);
}

//for of, all iteratable, not only array
for (const iterator of arr){
    console.log(iterator);
}


//string conversion
let arr2 = ["Apple", 'Banana', 'Cherry']
console.log(arr2);

let str1 = arr2.toString();
console.log(str1)

let str2 = arr2.join(' * ')
console.log(str2);


//push and pop
let data = []
for(let i=0;i<5;i++){
    let num = parseInt(prompt())
    data.push(num)
}
console.log(data)

data.pop();
console.log(data);


//shift and unshift to add/del from beginning
//delete: delete elem from wherever, may cause holes, not recom

//splice: ass new elem in desired place, can rmv elem too
//splice(posn, no.of elem deleted, new elems, new elems2, ...)
let arr4 = [10,20,30,40,50,60];
arr4.splice(1,0,'Apple', 'orange')
console.log(arr4)
arr4.splice(2,3); //delete using splice

//slice: cut part of array to store under new name
//used to delete without leaving hole
//slice(start idx incl, end idx excl)
//slice(start) this will take from index till end
let arr5 = [10,20,30,40,50,60]
let newArr = arr.slice(1,2)
console.log(arr5);
console.log(newArr);



//i/o with html elements
/*let arr3;
function addEnd(){
    let ele = document.getElementById('in').value;
    arr3.push(ele);
    document.getElementById('out').innerHTML = arr3.toString()
}*/