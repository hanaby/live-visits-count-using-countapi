const countEl = document.getElementById('count');
updateVisitCount();
function updateVisitCount(){
  //we use the fetch API here to get the countAPI
  fetch('https://api.countapi.xyz/update/hana/codepen/?amount=1')
          .then(res => res.json())
          .then(res => {
    countEl.innerHTML = res.value;
  });
}