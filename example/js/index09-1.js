var demo = document.getElementById ( "demo" ) //находими на сраницы нужные елементы 
var btnReg = document.getElementById ( "registration" )
var btnSignIn = document.getElementById ( "sign-in" )
var nameElem = document.getElementById ( "name" )
var passElem = document.getElementById ( "pass" )
var title = document.getElementById ( "title" )

var users = [] // создаем массив пользователей
hideButtons ( false )

function hideButtons ( param ) { //функция прячущая кнопки "Регистрация" и "Вход" и отобращающая div id = "demo"
    btnReg.style.display = param ? "none" : "inline-block"
    btnSignIn.style.display = param ? "none" : "inline-block"
    demo.style.display = !param ? "none" : "block"
}
function reg ( event ) {
    hideButtons ( true )
    demo.regim = 0
    title.innerHTML = "Регистрация"
}

function signIn ( event ) {
    hideButtons ( true )
    demo.regim = 1
    title.innerHTML = "Вход"
}

function testUserData () {
    if ( !nameElem.value || !passElem.value ) return // если не введено имя или пароль выходим
    var userKey = Sha256.hash ( nameElem.value + passElem.value ) //генерим дайджест имя + пароль
    if ( demo.regim === 0 ) { // в форме "Регистарция"
        if ( users.indexOf ( userKey ) < 0 ) { // если в массиве пользователей дайджест отсутствует
            users.push ( userKey )              // добавляем дайджест в массив
            title.innerHTML = `Регистрация ${nameElem.value} прошла успешно` //выводим в <h3 id="title"></h3
        } else title.innerHTML = `Пользователь ${nameElem.value} уже зарегистрирован` //если в массиве дайджест есть выводим что зарегистрирован
    }
    else {
        if ( users.indexOf ( userKey ) >= 0 ) { // если дайджест существует в массиве пользователей
            var script = document.createElement( 'script' ) // создаем новый скрипт
            script.id = "hello" // присваеваем ему id
            script.src = 'https://garevna.github.io/js-samples/js/testSHA384.js'
            //script.src = '../testSHA384.js'
            script.crossOrigin = 'anonymous';
            script.integrity = 'sha384-yXrIdlO1CBJknfDtCtDe2tmWWNl5xK30aTz62nLkEpEIBRD3OGi7+To7hfKRaUZ/'
            document.head.appendChild( script ) // добавляем скрипт с id="hello" в голову документа 
            title.innerHTML = nameElem.value
        }
        setTimeout ( function () {//удаляем из головы скрипт с id="hello" из головы через 5с
            document.querySelector ( "#hello" ).parentNode.removeChild ( script )
            //document.querySelector ( "#hello" ).remove( script )
        }, 5000 )
    }
    hideButtons ( false )
}
