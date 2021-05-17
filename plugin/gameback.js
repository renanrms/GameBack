function create_player_status_button() {
  var psbtn = document.createElement("BUTTON");
  psbtn.innerHTML = "Player Status";
  psbtn.id = "psbtn"
  document.body.appendChild(psbtn);
}
$('#psbtn').click(() => {
  alert("34");
});
//requisição de login
(function () { 
  var s = document.createElement('script'); 
  s.type = 'text/javascript'; s.async = true; 
  s.src = 'https://code.jquery.com/jquery-3.1.1.min.js'; 
  (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(s); })(); 
  $.ajax({ url: "https://apitestedojoaozao.free.beeceptor.com/events", 
  type: "post", data: {}, headers: { "Accept": "*/*", "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.87 Safari/537.36", "Connection": "close", "Accept-Encoding": "gzip, deflate", "Accept-Language": "en", "Content-Type": "application/json" }, 
  success: function (data) { console.info(data); } }); 