var tableMain = document.getElementById("main-table");

var row = tableMain.getElementsByTagName("tr");


console.log(row.length);

var btnHide = document.getElementById("hide-show");


btnHide.addEventListener("click",hideShow);
btnHide.innerHTML = "Hide Rows";

function hideShow(){

	if(row[0].style.display == ""){
		btnHide.innerHTML = "Show Rows";
		hideRow();
	}else{
		showRow();
		// row[0].style.display = "";
		btnHide.innerHTML = "Hide Rows";

	}

}



function hideRow(){


	for (var i=0; i < row.length; i++){

		

		if(i % 2 == 0){
			row[i].style.display = "none";
			
			
		}else{
			row[i].style.display = "";

		}
	}


	
}
function showRow(){


	for (var i=0; i < row.length; i++){

	
			
			
		
			row[i].style.display = "";

		
	}


	
}


