let myImage = document.getElementById('timetext');

let myHeaders = new Headers();
myHeaders.append('pragma', 'no-cache');
myHeaders.append('cache-control', 'no-cache');

let myInit = {
  method: 'GET',
  headers: myHeaders,
};

let myRequest = new Request('/assets/assets/last_commit.txt');

fetch(myRequest, myInit)
  .then(function(response) {
    return response.text();
  })
  .then(function(response) {
      let date = new Date(response * 1000);
      let dateText = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes();
    myImage.innerHTML = dateText;
  });
