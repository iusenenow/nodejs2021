const firstReq = new XMLHttpRequest()

firstReq.open('GET', 'https://swapi.dev/api/planets/')

firstReq.send()

console.log('Request Sent')