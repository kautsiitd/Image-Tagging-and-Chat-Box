function FindPosition(oElement)
{
  if(typeof( oElement.offsetParent ) != "undefined")
  {
    for(var posX = 0, posY = 0; oElement; oElement = oElement.offsetParent)
    {
      posX += oElement.offsetLeft;
      posY += oElement.offsetTop;
    }
      return [ posX, posY ];
    }
    else
    {
      return [ oElement.x, oElement.y ];
    }
}

function GetCoordinates(e)
{
  var PosX = 0;
  var PosY = 0;
  var ImgPos;
  ImgPos = FindPosition(myImg);
  if (!e) var e = window.event;
  if (e.pageX || e.pageY)
  {
    PosX = e.pageX;
    PosY = e.pageY;
  }
  else if (e.clientX || e.clientY)
    {
      PosX = e.clientX + document.body.scrollLeft
        + document.documentElement.scrollLeft;
      PosY = e.clientY + document.body.scrollTop
        + document.documentElement.scrollTop;
    }
  PosX = PosX - ImgPos[0];
  PosY = PosY - ImgPos[1];
  // alert(PosX+PosY);
  document.getElementById("x_co").value = PosX;
  document.getElementById("y_co").value = PosY;
}

function set_data(type){
  if(type=='0'){
    document.getElementById("tag").value = document.getElementById("add_tag").value;
    document.getElementById("add_tag").value = "";
  }
  else if(type=='1'){
    document.getElementById("comment").value = document.getElementById("add_comment").value;
    document.getElementById("add_comment").value = "";
  }
}
