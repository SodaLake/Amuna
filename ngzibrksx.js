
var currentId = "content11";



function importHTML(id){
  const content22 = document.getElementById(id);

  content22.innerHTML = '<object type="text/html" data="'+id+'.html"></object>';
}

function getRandomInt(max){
    return Math.floor(Math.random() * max) + 1;
}

function generateQuestion(){
  return "("+(getRandomInt(20)-getRandomInt(20))+")" + "+" +"("+(getRandomInt(20)-getRandomInt(20))+")";
}

window.onload = function(){

    let question = document.getElementById("question")
    let answer = document.getElementById("answer")
    let log = document.getElementById("log")

    document.getElementsByName('tabs').forEach((item, i) => {
      item.addEventListener("click",function(){
        newId = 'content' + item.id.substr(3, 2)

        document.getElementById(newId).style.display = "block";
        document.getElementById(currentId).style.display = "none";
        currentId = newId

      })
    });

    // /r/n이 먹히도록 하기 위한 문장임
    log.setAttribute('style', 'white-space: pre;');
    answer.addEventListener("keypress", function(e){
      if(e.key == "Enter")
      {
        if(answer.value == eval(question.textContent))
        {
          log.textContent += "\r\n정답 "
        }
        else
        {
          log.textContent += "\r\n오답 "
        }
        log.textContent += question.textContent + " = "+ eval(question.textContent) + ". 나의 입력: "+ answer.value+"."
        question.textContent = generateQuestion();
        answer.value = "";
      }
    });

    document.getElementById(currentId).style.display = "block";


    importHTML("content22");


    question.textContent = generateQuestion();

}
