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

// Construct animation
var container = document.getElementById("array");


// Function to generate the array of blocks
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

// Promise to swap two blocks
function swap(el1, el2) {
	return new Promise((resolve) => {

		// For exchanging styles of two blocks
		var temp = el1.style.transform;
		el1.style.transform = el2.style.transform;
		el2.style.transform = temp;

		window.requestAnimationFrame(function() {

			// For waiting for .25 sec
			setTimeout(() => {
				container.insertBefore(el2, el1);
				resolve();
			}, 100);
		});
	});
}

// Asynchronous SelectSort function
async function SelectSort(delay = 100) {
	var blocks = document.querySelectorAll(".block_array");

	// SelectSort Algorithm
	var min_idx = 0;

	for (var i = 0; i < blocks.length; i += 1){
		min_idx = i;
		blocks[i].style.backgroundColor = "#FCB018";
		for(var j = i + 1;j < blocks.length; j += 1){
			blocks[j].style.backgroundColor = "#FC1818";


				await new Promise((resolve) =>
	        setTimeout(() => {
	          resolve();
	        }, 100)
	      );
				console.log("run");
				var value1 = Number(blocks[j].childNodes[0].innerHTML);
				var value2 = Number(blocks[min_idx].childNodes[0].innerHTML);

				if (value1 < value2){
					if (min_idx !== i) {


          blocks[min_idx].style.backgroundColor = "#979797";
        	}
					min_idx = j;
					blocks[min_idx].style.backgroundColor = "#FF4949";
					} else{
						blocks[j].style.backgroundColor = " #979797";
					}

		}
		await new Promise((resolve) =>
				setTimeout(() => {
						resolve();
				}, 100)
		);
		blocks[min_idx].style.backgroundColor = "#979797";
		var temp1 = blocks[min_idx].style.height;
    var temp2 = blocks[min_idx].childNodes[0].innerText;
    blocks[min_idx].style.height = blocks[i].style.height;
    blocks[i].style.height = temp1;
    blocks[min_idx].childNodes[0].innerText = blocks[i].childNodes[0].innerText;
    blocks[i].childNodes[0].innerText = temp2;
		blocks[i].style.backgroundColor = "#000";

	}
}

function startSorting(){
  SelectSort();
  document.getElementById("runBtn").disabled = true;

}

function resetArray(){
  generatearray(20);
  document.getElementById("runBtn").disabled = false;

}

// Calling generatearray function
generatearray(20);

// Calling SelectSort function
SelectSort();
