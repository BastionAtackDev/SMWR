
const qStr = window.location.search;
const urlParams = new URLSearchParams(qStr);


const curentSite = urlParams.get('cW'); // this is 1, 2 or any number smaller than regSiteCount
const direction = urlParams.get('dir'); // this is 1 or -1

// list of site which are registered
const regSites = new Map([
    [1, "https://bastionatackdev.github.io"],
    [2, "https://www.razv.xyz"]
]);
const regSitesCount = 2;

const siteList = document.getElementById('siteList');

if(curentSite != undefined && direction != undefined){
  if(parseInt(curentSite) + parseInt(direction) < 1) window.location.href = regSites.get(2);
  else if(parseInt(curentSite) + parseInt(direction) > regSitesCount) window.location.href = regSites.get(1);
  else window.location.href = regSites.get(parseInt(curentSite) + parseInt(direction));
}else{
  let list = "<ul>";
  for(let i = 1; i <= regSitesCount; i++){
    list += "<li><a href=\"" + regSites.get(i) + "\">" + regSites.get(i) + "</a></li>";
  }
  list += "</ul>";
  siteList.innerHTML = list;
}