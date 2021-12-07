var container = document.getElementById("array_merge");
var containerSubMerge_1 = document.getElementById("array_submerge_1");
var containerSubMerge_2 = document.getElementById("array_submerge_2");

var delay = 100;


function generateArray(n)  {
  container.innerHTML = "";
  // var values = [1, 5, 7, 9, 11, 27, 30, 60, 71,95, 9, 10, 21, 28, 30, 38, 50, 57, 78,88];

	for (var i = 0; i < n;i++) {

		// Return a value from 1 to 100 (both inclusive)
		var value = Math.ceil(Math.random() * 100);

		// Creating element div
		var array_ele = document.createElement("div");

		// Adding class 'block' to div
		array_ele.classList.add("block_merge");

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

function generateSubArray_1(n, values)  {
  containerSubMerge_1.innerHTML = "";

	for (var i = 0; i < values.length;i++) {

		// Return a value from 1 to 100 (both inclusive)
		var value = values[i];

		// Creating element div
		var array_ele = document.createElement("div");

		// Adding class 'block' to div
		array_ele.classList.add("block_submerge_1");

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
		containerSubMerge_1.appendChild(array_ele);

	}
}
function generateSubArray_2(n, values)  {
  containerSubMerge_2.innerHTML = "";

	for (var i = 0; i < values.length;i++) {

		// Return a value from 1 to 100 (both inclusive)
		var value = values[i];

		// Creating element div
		var array_ele = document.createElement("div");

		// Adding class 'block' to div
		array_ele.classList.add("block_submerge_2");

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
		containerSubMerge_2.appendChild(array_ele);

	}
}

async function merge(left, middle, right){
  var blocks = document.querySelectorAll(".block_merge");
  var sizeLeft = middle - left + 1;
  var sizeRight = right - middle;

  // create temp array to store values
  var leftArray = Array(sizeLeft);
  var rightArray = Array(sizeRight);

  // copy data to temp arrays
  for(var i = 0; i < sizeLeft;i++){
    leftArray[i] = Number(blocks[left+i].childNodes[0].innerHTML);
  }
  for(var i = 0; i < sizeRight;i++){
    rightArray[i] = Number(blocks[middle+1+i].childNodes[0].innerHTML);
  }

  //creating subArrayMerge
  // const subArray = leftArray.concat(rightArray);
  generateSubArray_1(sizeLeft, leftArray);
  var blocksSubMerge_1 = document.querySelectorAll(".block_submerge_1");

  generateSubArray_2(sizeRight, rightArray);
  var blocksSubMerge_2 = document.querySelectorAll(".block_submerge_2");

  // for(var i = middle+1;i<=right;i++){
  //   blocksSubMerge[i].style.marginLeft = "50px";
  // }



  // MERGING TEMP ARRAYS

  // create indices of left and right arrays
  var leftIndex = 0;
  var rightIndex = 0;



  // index of final merged array
  var finalIndex = left;

  // start MERGING
  while(leftIndex < sizeLeft && rightIndex < sizeRight){

    //pause
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, delay)
    );
    //end of pause

    //coloring pair to swap
    blocksSubMerge_1[leftIndex].style.backgroundColor = "#4ABDFF";
    blocksSubMerge_2[rightIndex].style.backgroundColor = "#4ABDFF";

    if (leftArray[leftIndex] <= rightArray[rightIndex]){

      //pause
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, delay)
      );
      //end of pause

      blocksSubMerge_1[leftIndex].style.backgroundColor = "#FCB018";
      // blocksSubMerge[middle+1+rightIndex].style.backgroundColor = "#979797";

      //pause
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, delay)
      );
      //end of pause

      blocksSubMerge_1[leftIndex].style.backgroundColor = "#979797";

      blocks[finalIndex].style.height = `${leftArray[leftIndex] * 3}px`;
      blocks[finalIndex].childNodes[0].innerText = leftArray[leftIndex];
      blocks[finalIndex].style.backgroundColor = "#FCB018";
      //pause
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, delay)
      );
      //end of pause
      blocks[finalIndex].style.backgroundColor = "#979797";

      leftIndex++;

    }
    else {

      //pause
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, delay)
      );
      //end of pause

      // blocksSubMerge[left+leftIndex].style.backgroundColor = "#979797";
      blocksSubMerge_2[rightIndex].style.backgroundColor = "#FCB018";

      //pause
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, delay)
      );
      //end of pause

      blocks[finalIndex].style.height = `${rightArray[rightIndex] * 3}px`;
      blocks[finalIndex].childNodes[0].innerText = rightArray[rightIndex];
      blocks[finalIndex].style.backgroundColor = "#FCB018";
      //pause
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, delay)
      );
      //end of pause
      blocks[finalIndex].style.backgroundColor = "#979797";

      blocksSubMerge_2[rightIndex].style.backgroundColor = "#979797";

      rightIndex++;
    }
    finalIndex++;
  }

  //copy remaining elements of left array (if existx)
  while (leftIndex < sizeLeft){
    blocksSubMerge_1[leftIndex].style.backgroundColor = "#4ABDFF";
    //pause
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, delay)
    );
    //end of pause

    blocks[finalIndex].style.height = `${leftArray[leftIndex] * 3}px`;
    blocks[finalIndex].childNodes[0].innerText = leftArray[leftIndex];
    //pause
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, delay)
    );
    //end of pause
    blocks[finalIndex].style.backgroundColor = "#FCB018";
    //pause
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, delay)
    );
    //end of pause
    blocksSubMerge_1[leftIndex].style.backgroundColor = "#979797";
    //pause
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, delay)
    );
    //end of pause
    blocks[finalIndex].style.backgroundColor = "#979797";
    leftIndex++;
    finalIndex++;
  }

  //copy remaining elements of rightarray (if existx)
  while (rightIndex < sizeRight){
    blocksSubMerge_2[rightIndex].style.backgroundColor = "#4ABDFF";
    //pause
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, delay)
    );
    //end of pause

    blocks[finalIndex].style.height = `${rightArray[rightIndex] * 3}px`;
    blocks[finalIndex].childNodes[0].innerText = rightArray[rightIndex];
    //pause
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, delay)
    );
    //end of pause
    blocks[finalIndex].style.backgroundColor = "#FCB018";
    //pause
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, delay)
    );
    //end of pause

    blocksSubMerge_2[rightIndex].style.backgroundColor = "#979797";
    //pause
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, delay)
    );
    //end of pause
    blocks[finalIndex].style.backgroundColor = "#979797";
    rightIndex++;
    finalIndex++;
  }

  //Stop MERGING

  // for(var i = 0; i < blocks.length; i++){
  //   blocks[i].style.backgroundColor = "#000";
  //   //pause
  //   await new Promise((resolve) =>
  //     setTimeout(() => {
  //       resolve();
  //     }, 50)
  //   );
  //   //end of pause
  //
  // }
}



async function mergeSort(left, right){
  var blocks = document.querySelectorAll(".block_merge");
  if (left< right){
    //calculate middle index
    var middle = Math.floor((right + left) / 2);

    //coloring first half
    for(var i= left; i<= middle;i++){
      blocks[i].style.backgroundColor= "F00";
    }
    //coloring second half
    for(var i=middle+1;i<= right;i++){
      blocks[i].style.backgroundColor= "00F";
    }
    //pause
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 500)
    );

    //recursive calling
    await mergeSort(left, middle);
    await mergeSort(middle+1, right);

    await merge(left, middle, right);
  }
}

generateArray(20);
mergeSort(0,19);
