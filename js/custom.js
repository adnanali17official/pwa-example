document.addEventListener('DOMContentLoaded', ()=>{
  let innerHtml = "";
  document.getElementById("countryList").innerHTML="";
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  fetch("https://jhucoronavirus.azureedge.net/jhucoronavirus/global_vaccines.json", requestOptions)
    .then(response => response.json())
    .then(result => {
      result.forEach(element => {
        innerHtml +="<li>"+element.country+"</li>";
      });
      document.getElementById("countryList").innerHTML=innerHtml;
    }
    )
    .catch(error => console.log('error', error));
});