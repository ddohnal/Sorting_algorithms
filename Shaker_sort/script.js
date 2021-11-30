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
			},  250);
		});
	});
}

// Asynchronous BubbleSort function
async function ShakerSort(delay = 100) {
	var blocks = document.querySelectorAll(".block_array");

	// BubbleSort Algorithm
	for (var i = 0; i < blocks.length; i += 1) {
		for (var j = i; j < blocks.length - i - 1; j += 1) {

            // To change background-color of the
            // blocks to be compared
            blocks[j].style.backgroundColor = "#FCB018";
            blocks[j + 1].style.backgroundColor = "#FCB018";

            // To wait for .1 sec
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                },  250)
            );

            console.log("run");
            var value1 = Number(blocks[j].childNodes[0].innerHTML);
            var value2 = Number(blocks[j + 1]
                        .childNodes[0].innerHTML);

            // To compare value of two blocks
            if (value1 > value2) {
                await swap(blocks[j], blocks[j + 1]);
                blocks = document.querySelectorAll(".block_array");
            }

            // Changing the color to the previous one
            blocks[j].style.backgroundColor = "#979797";
            blocks[j + 1].style.backgroundColor = "#979797";
        }

        //changing the color of greatest element
        //found in the above traversal
        blocks[blocks.length - i - 1]
                .style.backgroundColor = "#000";

		for (var j =  blocks.length -2-i; j > i  ; j -= 1) {

			// To change background-color of the
			// blocks to be compared
			blocks[j].style.backgroundColor = "#FCB018";
			blocks[j - 1].style.backgroundColor = "#FCB018";

			// To wait for .1 sec
			await new Promise((resolve) =>
				setTimeout(() => {
					resolve();
				},  250)
			);

			console.log("run");
			var value1 = Number(blocks[j].childNodes[0].innerHTML);
			var value2 = Number(blocks[j - 1]
						.childNodes[0].innerHTML);

			// To compare value of two blocks
			if (value1 < value2) {
				await swap(blocks[j-1], blocks[j]);
				blocks = document.querySelectorAll(".block_array");
			}

			// Changing the color to the previous one
			blocks[j].style.backgroundColor = "#979797";
			blocks[j - 1].style.backgroundColor = "#979797";
		}

		//changing the color of greatest element
		//found in the above traversal
		blocks[i]
				.style.backgroundColor = "#000";
	}
}

function startSorting(){
  ShakerSort();
  document.getElementById("runBtn").disabled = true;

}

function resetArray(){
  generatearray(20);
  document.getElementById("runBtn").disabled = false;

}

// Calling generatearray function
generatearray(20);

// Calling SelectSort function
ShakerSort();
