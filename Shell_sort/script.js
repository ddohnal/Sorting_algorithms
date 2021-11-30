var container = document.getElementById("array");

// Script to open and close sidebar
function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("myOverlay").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("myOverlay").style.display = "none";
}

// Modal Image Gallery
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}

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


async function shellSort() {
  var blocks = document.querySelectorAll(".block_array");
	let n = blocks.length;

	for (let gap = Math.floor(n/2); gap > 0; gap = Math.floor(gap/2))	{
		for (let i = gap; i < n; i += 1)  {
			//let temp = arr[i];
      var value =  Number(blocks[i].childNodes[0].innerHTML);
      var tempValue1 = blocks[i].style.height;
      var tempValue2 = blocks[i].childNodes[0].innerText;

			let j;

      //coloring gaps
      for(var x = i; x >= 0 ; x -= gap){
        blocks[x].style.backgroundColor = "#4ABDFF";
      }

      await new Promise((resolve) =>
          setTimeout(() => {
              resolve();
          }, 500)
      );
      for(var x = i; x >= 0 ; x -= gap){
        blocks[x].style.backgroundColor = "#979797";
      }

			for (j = i; j >= gap && Number(blocks[j-gap].childNodes[0].innerHTML) > value; j-=gap)  {
				//arr[j] = arr[j-gap];
        blocks[j].style.backgroundColor = "#FCB018";
        blocks[j-gap].style.backgroundColor = "#FCB018";


        await new Promise((resolve) =>
    				setTimeout(() => {
    						resolve();
    				}, 250)
    		);
        var temp1 = blocks[j-gap].style.height;
        var temp2 = blocks[j-gap].childNodes[0].innerText;
        // blocks[j-gap].style.height = blocks[j].style.height;
        // blocks[j-gap].childNodes[0].innerText = blocks[j].childNodes[0].innerText;
        blocks[j].style.height = temp1;
        blocks[j].childNodes[0].innerText = temp2;

        blocks[j].style.backgroundColor = "#979797";
        blocks[j-gap].style.backgroundColor = "#979797";

			}
			//arr[j] = value;
      await new Promise((resolve) =>
  				setTimeout(() => {
  						resolve();
  				}, 250)
  		);
      blocks[j].style.height = tempValue1;
      blocks[j].childNodes[0].innerText = tempValue2;
      }
	}
  for(var i = 0; i < n; i++){
    blocks[i].style.backgroundColor = "#000";
    await new Promise((resolve) =>
        setTimeout(() => {
            resolve();
        }, 50)
    );
  }
}



function startSorting(){
  shellSort();
  document.getElementById("runBtn").disabled = true;

}

function resetArray(){
  generatearray(20);
  document.getElementById("runBtn").disabled = false;

}

// Calling generatearray function
generatearray(20);

// Calling SelectSort function
shellSort();
