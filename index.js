window.onload = function(){
  var pwInput = document.getElementById('pw')

  document.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {

        sha = sha256(pwInput.value)
        if(sha == "6eb33b56261bf653528d4809bd9e29c568fc3425455c4b1fac267850a8fe50f5")
        {
            alert("성공했습니다. 메인페이지로 이동합니다.")
            location.href='ngzibrksx.html'
        }
        else
        {
            alert("코드가 올바르지 않습니다.")
        }
      }
  });
}
