function showTag(coords, active, discussions){
    var r_circle = 20;

    var l = myImg.offsetLeft;
    var t = myImg.offsetTop-3;
    var w = myImg.width;
    var h = myImg.height;

    for (var i = coords.length - 1; i >= 0; i--) {
	    var offX = parseInt(coords[i][0]);
	    var offY = parseInt(coords[i][1]);
	    // alert("offX "+offX+" offY "+offY+" l "+l+" t "+t+" circle "+r_circle);
	    offX += l-r_circle;
	    offY += t-r_circle;
	    // alert("offX "+offX+" offY "+offY);

	    var newmyImg = document.createElement("img");
		newmyImg.setAttribute('style', 'overflow:hidden');
		newmyImg.onclick = (function(comments, x, y){
			return function(){
				showComments(comments, x, y);
			};
		})(discussions[i], parseInt(coords[i][0]), parseInt(coords[i][1]))
		if(active[i] == 1){
			newmyImg.setAttribute('src', '/static/pro/kauts/circle.png');
			newmyImg.setAttribute('onmouseover', "src= '/static/pro/kauts/blue-circle.png'");
			newmyImg.setAttribute('onmouseout', "src= '/static/pro/kauts/circle.png'");
		}
		else{
			newmyImg.setAttribute('src', '/static/pro/kauts/new-circle.png');
			newmyImg.setAttribute('onmouseover', "src= '/static/pro/kauts/new-red-circle.png'");
			newmyImg.setAttribute('onmouseout', "src= '/static/pro/kauts/new-circle.png'");
		}
		newmyImg.style.position = 'absolute';
		newmyImg.style.left = offX + "px";
		newmyImg.style.top = offY + "px";
		document.getElementById("On_Image").appendChild(newmyImg);
	}
}