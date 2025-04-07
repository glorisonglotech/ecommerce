const increment = document.getElementById('increment');
const decrement = document.getElementById('decrement');
const updateItems = document.getElementById('update-itmes');

let intialValue = 0;
increment.onclick = ()=>{
   intialValue++;
   updateItems.innerHTML = intialValue;
}
decrement.onclick =()=>{
    intialValue--;
    updateItems.innerHTML = intialValue;
}