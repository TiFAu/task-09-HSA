var hello = document.createElement ( 'div' )
hello.style = `position: fixed; 
                top: 15%; left: 15%; 
                bottom: 15%; right: 15%; 
                box-shadow: 10px 10px 16px #00000090; 
                border: solid 0.5px #bbb; 
                padding: 30px;
                z-index: 300;
                background-color: #000;`
document.body.appendChild ( hello )
hello.innerHTML = "<h2 style='color: #789'>Success!</h2>"
hello.innerHTML += "<p style='color: #fa0'>Algoritm: SHA384</p>"
hello.innerHTML += "<hr>"
hello.innerHTML += "<p style='color: #fff'>File integrity test resuts with OK</p>"
setTimeout ( () => {
        document.body.removeChild ( hello )
}, 5000 )
