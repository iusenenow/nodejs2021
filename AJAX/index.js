const xhr = new XMLHttpRequest()

// xhr.onreadystatechange = function(){
//   console.log('ReadyState: ', xhr.readyState);
//   if(this.readyState === 4 && this.status === 200) {
//     //console.log(this.responseText);
//   }
// }

xhr.onprogress = function () {
  console.log('ReadyState: ', xhr.readyState);
}

xhr.onload = function () {
  console.log('ReadyState: ', xhr.readyState);
  if (xhr.status === 200) {
    console.log(xhr);
    document.getElementById('text').innerHTML = xhr.responseText
  } else if (xhr.status === 404) {
    document.getElementById('text').innerHTML = 'Not Found.'
  }
}



xhr.open('GET', 'sample.txt', true)

console.log('ReadyState: ', xhr.readyState);

xhr.onerror = function () {
  console.log('There is an error!');
}

xhr.send()