var search = document.querySelector('.search')
var city = document.querySelector('.city')
var country = document.querySelector('.country')
var value = document.querySelector('.value')
var time = document.querySelector('.time')
var content = document.querySelector('.content')
var body = document.querySelector('body')


var shortDesc = document.querySelector('.short-desc')
var visibility = document.querySelector('.visibility span')
var wind = document.querySelector('.wind span')
var sun = document.querySelector('.sun span')


// var sun = document.querySelector('.sun span')

async function changeWeatherUI(capitalValue){
    let apiURL =` https://api.openweathermap.org/data/2.5/weather?q=${capitalValue}&units=metric&appid=d78fd1588e1b7c0c2813576ba183a667`
    
    let data = await fetch(apiURL).then(res=>res.json())
    if(data.cod == 200) {
        content.classList.remove('hide')

        city.innerText = data.name
        country.innerText = data.sys.country
        visibility.innerText = data.visibility +'(m)'
        wind.innerText = data.wind.speed +'(m/s)'
        sun.innerText = data.main.humidity + '(%)'
        let temp = Math.round((data.main.temp ))
        value.innerText = temp
        shortDesc.innerText = data.weather[0] ? data.weather[0].main : ''
        time.innerText = new Date().toLocaleString('vi')
        
        body.setAttribute('class','warm')
        if(temp <= 25 ){
            body.setAttribute('class','warm')
        }
        if(temp <= 22) {
            body.setAttribute('class','cool')
         
        }
        if(temp <=18) {
        body.setAttribute('class','cold')
        }

    } else {
        content.classList.add('hide')
    }
   
}

search.addEventListener('keypress', function(e) {
    if(e.code == 'Enter'){
        let capitalValue = search.value.trim()
        changeWeatherUI(capitalValue)

    }
})
changeWeatherUI('Hung yen')


