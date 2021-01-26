var demo = document.getElementById ( "demo" ) //находими на сраницы нужные елементы 
var btnReg = document.getElementById ( "registration" )
var btnSignIn = document.getElementById ( "sign-in" )
var nameElem = document.getElementById ( "name" )
var passElem = document.getElementById ( "pass" )
var emailElem = document.getElementById ( "email" ) //добавлено нахождение елемента с id = email
var avatarElem = document.getElementById ( "avatar" )// avatar
var title = document.getElementById ( "title" )

var users = [] // создаем массив пользователей
hideButtons ( false )

function hideButtons ( param ) { //функция прячущая кнопки "Регистрация" и "Вход" и отобращающая div id = "demo"
    btnReg.style.display = param ? "none" : "inline-block"
    btnSignIn.style.display = param ? "none" : "inline-block"
    demo.style.display = !param ? "none" : "block"
}

function pageForRegistredUsers ( param ){
    btnReg.style.display = param ? "none" : "inline-block"
    btnSignIn.style.display = param ? "none" : "inline-block"
    demo.style.display = !param ? "block" : "none"
    pageforregisteredusers.style.display = !param ? "none" : "block"
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
    if ( !nameElem.value || !passElem.value || !emailElem.value || !avatarElem.value) return // если не введено имя или пароль выходим
    var userKey = Sha256.hash ( nameElem.value + passElem.value + emailElem.value ) //генерим дайджест имя + пароль
    if ( demo.regim === 0 ) { // в форме "Регистарция"
        if ( users.some ( value => value.key === userKey) === false ){
            //users.indexOf ( userKey ) < 0 ) { // если в массиве пользователей дайджест отсутствует
            users.push ( 
                {   key: userKey,
                    name: nameElem.value,
                    email: emailElem.value,
                    avatar: avatarElem.value
                }   
            )              // добавляем данные в объект и далее пушим в массив
            title.innerHTML = `Регистрация ${nameElem.value} прошла успешно` //выводим в <h3 id="title"></h3
        } else title.innerHTML = `Пользователь ${nameElem.value} уже зарегистрирован` //если в массиве дайджест есть выводим что зарегистрирован
        hideButtons ( false )
    }
    else {
        pageForRegistredUsers ( true )
        if ( !users.some ( value => value.key === userKey)) { // если дайджест не существует в массиве пользователей
            title.innerHTML = `Пользователь ${nameElem.value} не зарегистрирован. Войдите корректный логин и пароль или зарегистрируйтесь`//если дайджест в массиве не существует говорим фе..
            hideButtons ( false ) // намекаем на регистрацию или коррректный вход
        } else {
            title.innerHTML = nameElem.value // выводим имя вошедшего пользоваеля
            var avatarU = document.createElement ('img') //создаем картинку
            avatarU.id = "avatarUser" // добавляем картинке айди
            avatarU.src = avatarElem.value // передаем в картинку url аватарки
            avatarU.width = 300 // задаем размер аватарки
            pageforregisteredusers.appendChild( avatarU ) // передаем аватарку в div c id = pageforregisteredusers
        }
    }
    
}
