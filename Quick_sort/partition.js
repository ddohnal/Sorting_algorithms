var containerPartition = document.getElementById("array_partition");
var isSorting = true;

function generatearrayPartition(n) {
  containerPartition.innerHTML = "";
	for (var i = 0; i < n; i++) {

		// Return a value from 1 to 100 (both inclusive)
		var value = Math.ceil(Math.random() * 100);

		// Creating element div
		var array_ele = document.createElement("div");

		// Adding class 'block' to div
		array_ele.classList.add("block_partition");

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
		containerPartition.appendChild(array_ele);
	}
}

async function onlyPartition(left, right) {
    var blocksPartition = document.querySelectorAll(".block_partition");
    var mid_index = Math.floor((right + left) / 2);
    var pivot   = Number(blocksPartition[Math.floor((right + left) / 2)].childNodes[0].innerHTML);//middle element
    blocksPartition[mid_index].style.backgroundColor = "#00FF00";
        i       = left; //left pointer
        j       = right; //right pointer
    while (i <= j) {
        while (Number(blocksPartition[i].childNodes[0].innerHTML) < pivot) {

					blocksPartition[i].style.backgroundColor = "#FCB018";


					await new Promise((resolve) =>
  	        setTimeout(() => {
  	          resolve();
  	        }, 500)
  	      );
          if (isSorting == false){
            break;
          }
					blocksPartition[i].style.backgroundColor = "#979797";

            i++;
        }
        blocksPartition[i].style.backgroundColor = "#FCB018";


        while (Number(blocksPartition[j].childNodes[0].innerHTML) > pivot) {
					blocksPartition[j].style.backgroundColor = "#FCB018";


					await new Promise((resolve) =>
  	        setTimeout(() => {
  	          resolve();
  	        }, 500)
  	      );
          if (isSorting == false){
            break;
          }

					blocksPartition[j].style.backgroundColor = "#979797";

            j--;
        }
        blocksPartition[j].style.backgroundColor = "#FCB018";
        if (i <= j) {

          //changing the color of swaping elements
          blocksPartition[i].style.backgroundColor = "#FCB018";
          blocksPartition[j].style.backgroundColor = "#FCB018";


          await new Promise((resolve) =>
  	        setTimeout(() => {
  	          resolve();
  	        }, 500)
  	      );
          //sawpping two elements
          var temp1 = blocksPartition[i].style.height;
          var temp2 = blocksPartition[i].childNodes[0].innerText;


          blocksPartition[i].style.height = blocksPartition[j].style.height;
          blocksPartition[i].childNodes[0].innerText = blocksPartition[j].childNodes[0].innerText;

          blocksPartition[j].style.height = temp1;
          blocksPartition[j].childNodes[0].innerText = temp2;

          //Changing the color to the previous one
          // if (i == mid_index || Number(blocks[i].childNodes[0].innerHTML == pivot)){
          //   blocks[j].style.backgroundColor = "#00FF00";
          // }
          // else if (j == mid_index || Number(blocks[j].childNodes[0].innerHTML == pivot)) {
          //   blocks[i].style.backgroundColor = "#00FF00";
          // }
          // else {
          //
          // }
          blocksPartition[i].style.backgroundColor = "#979797";
          blocksPartition[j].style.backgroundColor = "#979797";



            i++;
            j--;
          await new Promise((resolve) =>
  	        setTimeout(() => {
  	          resolve();
  	        }, 500)
  	      );

        }
    }

    //coloring partition
    blocksPartition[i].style.backgroundColor = "#000";
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 500)
    );
    for(var k = left;k<i;k++){
      blocksPartition[k].style.backgroundColor = "#FF0000";
    }
    for(var k = i;k<=right;k++){
      blocksPartition[k].style.backgroundColor = "#0000FF";
    }

}

function startSorting(){
  onlyPartition(0,19);
  document.getElementById("runBtn").disabled = true;
  isSorting = true;
}

function resetArray(){
  generatearrayPartition(20);
  document.getElementById("runBtn").disabled = false;
  isSorting = false;
  console.log("reset");

}

generatearrayPartition(20);
onlyPartition(0,19);
