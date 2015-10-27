// {% for photo in photos %}
//   {% if photo.is_prophoto_active %}
//     <div class="item" id="active_photos">
//       <div class="well" style="width:220px; overflow:hidden; padding:0px; padding-bottom:0px">
//         <a href = "view_photo/{{ photo.id }}" >
//           <img src="{{photo.img.url}}" alt="Add Photo" class="margin {{photo.id}}"style="width:100%;overflow:hidden; margin: 0; " />
//         </a>
//         <i class="fa fa-tag"></i> <span> {{n_tags.i}} Tags </span>
//       </div>
//     </div>
//   {% endif %}
// {% endfor %}
function showPhotos(n_tags, urls, ids, is_active){
  for(var i=0; i<n_tags.length ; i++){
    if(is_active[i] == 1){
      var div1 = document.createElement("div");
      div1.className = "item";
      div1.id = "active_photos";
      var div2 = document.createElement("div");
      div2.className = "well";
      div2.setAttribute('style', 'width:220px; overflow:hidden; padding:0px; padding-bottom:0px; margin-top:5px');
      var a1 = document.createElement("a");
      a1.href = "view_photo/"+ids[i];
      var img1 = document.createElement("img");
      img1.setAttribute('src', urls[i]);
      img1.setAttribute('alt', "Loading...");
      img1.className = "margin "+ids[i];
      img1.setAttribute('style', 'width:100%;overflow:hidden; margin: 0; ');
      a1.appendChild(img1);
      var i1 = document.createElement("i");
      i1.className = "fa fa-tag";
      var span1 = document.createElement("span");
      span1.innerHTML = n_tags[i]+" Tags";
      div2.appendChild(a1);
      div2.appendChild(i1);
      div2.appendChild(span1);
      div1.appendChild(div2);
      document.getElementById("wrapper").appendChild(div1);
    }
  }
}
