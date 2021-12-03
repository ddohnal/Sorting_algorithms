var container = document.getElementById("array");
var isSorting = true;

function generatearray(n) {
  container.innerHTML = "";
	for (var i = 0; i < n; i++) {

		// Return a value from 1 to 100 (both inclusive)
		var value = Math.ceil(Math.random() * 100);

		// Creating element div
		var array_ele = document.createElement("div");

		// Adding class 'block' to div
		array_ele.classList.add("block_array");

		// Adding style to div
		array_ele.style.height = `${value * 3}px`;
		array_ele.style.transform = `translate(${i * 30}px)`;

		// Creating label element for displaying
		// size of particular block
		var array_ele_label = document.createElement("label");
		array_ele_label.classList.add("block_id");
		array_ele_label.innerText = value;

		// Appending created elements to index.html
		array_ele.appendChild(array_ele_label);
		container.appendChild(array_ele);
	}
}

async function partition(blocks, left, right) {
    var mid_index = Math.floor((right + left) / 2);
    var pivot   = Number(blocks[Math.floor((right + left) / 2)].childNodes[0].innerHTML);//middle element
    blocks[mid_index].style.backgroundColor = "#00FF00";
        i       = left; //left pointer
        j       = right; //right pointer
    while (i <= j) {
        while (Number(blocks[i].childNodes[0].innerHTML) < pivot) {

					blocks[i].style.backgroundColor = "#FCB018";

					await new Promise((resolve) =>
  	        setTimeout(() => {
  	          resolve();
  	        }, 350)
  	      );
					blocks[i].style.backgroundColor = "#979797";

            i++;
        }
        while (Number(blocks[j].childNodes[0].innerHTML) > pivot) {
					blocks[j].style.backgroundColor = "#FCB018";

					await new Promise((resolve) =>
  	        setTimeout(() => {
  	          resolve();
  	        }, 350)
  	      );       

					blocks[j].style.backgroundColor = "#979797";

            j--;
        }
        if (i <= j) {
          //changing the color of swaping elements
          blocks[i].style.backgroundColor = "#FCB018";
          blocks[j].style.backgroundColor = "#FCB018";


          await new Promise((resolve) =>
  	        setTimeout(() => {
  	          resolve();
  	        }, 350)
  	      );
          //sawpping two elements
          var temp1 = blocks[i].style.height;
          var temp2 = blocks[i].childNodes[0].innerText;


          blocks[i].style.height = blocks[j].style.height;
          blocks[i].childNodes[0].innerText = blocks[j].childNodes[0].innerText;

          blocks[j].style.height = temp1;
          blocks[j].childNodes[0].innerText = temp2;

          //Changing the color to the previous one
          blocks[i].style.backgroundColor = "#979797";
          blocks[j].style.backgroundColor = "#979797";

            i++;
            j--;
          await new Promise((resolve) =>
  	        setTimeout(() => {
  	          resolve();
  	        }, 350)
  	      );

        }
    }
    blocks[mid_index].style.backgroundColor = "#979797";
    return i;
}


async function quickSort(left, right) {
    // if (isSorting == false){
    //   return;
    var blocks = document.querySelectorAll(".block_array");
    var index;
    if (blocks.length > 1) {
        index = await partition(blocks, left, right); //index returned from partition
        //coloring subsequences
        for(var i = left;i<index;i++){
          blocks[i].style.backgroundColor = "#FF0000";
        }
        for(var i = index;i<=right;i++){
          blocks[i].style.backgroundColor = "#0000FF";
        }
        await new Promise((resolve) =>
          setTimeout(() => {
            resolve();
          }, 1000)
        );
        for(var i = 0;i<blocks.length;i++){
          blocks[i].style.backgroundColor = "#979797";
        }
        if (left < index - 1) { //more elements on the left side of the pivot
            await quickSort(left, index - 1);
        }
        if (index < right) { //more elements on the right side of the pivot
            await quickSort(index, right);
        }
    }
}

function startSorting(){
  quickSort(0, 19);
  document.getElementById("runBtn").disabled = true;
  isSorting = true;
}

function resetArray(){
  generatearray(20);
  document.getElementById("runBtn").disabled = false;
  isSorting = false;
  console.log("reset");
  // document.getElementById("resetBtn").disabled = true;
}

generatearray(20);
quickSort(0, 19);
