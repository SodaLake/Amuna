
var currentId = "content11";

function importHTML(id){
  const content22 = document.getElementById(id);

  content22.innerHTML = '<object type="text/html" data="'+id+'.html"></object>';
}

window.onload = function(){

    document.getElementsByName('tabs').forEach((item, i) => {


    item.addEventListener("change",function(){
      newId = 'content' + item.id.substr(3, 2)

      document.getElementById(newId).style.display = "flex";
      document.getElementById(currentId).style.display = "none";
      currentId = newId

    })
  });

    document.getElementById(currentId).style.display = "flex";


    importHTML("content22");

}
