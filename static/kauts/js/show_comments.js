function showComments(comments, PosX, PosY){
	var myNode = document.getElementById("comment_box");
	while (myNode.firstChild) {
	    myNode.removeChild(myNode.firstChild);
	}
	for (var i = 0; i < comments.length; i++) {
		var newbox = document.createElement("div");
		newbox.className = "box with-border";
		var newcomment = document.createElement("p");
		newcomment.style.padding = "5px 0px 5px 10px";
		newcomment.innerHTML = comments[i];
		newbox.appendChild(newcomment);
		document.getElementById("comment_box").appendChild(newbox);
	}
	// setting coordinates of tag
	document.getElementById("tag_x").value = PosX;
  	document.getElementById("tag_y").value = PosY;
}