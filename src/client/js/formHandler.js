function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch('https://api.openweathermap.org/data/2.5/weather?zip=80909&units=imperial&appid=91b0b55d837ff53bcd4a0c367014bd60')
    .then(res => res.json())
    .then((res) => {
        console.log(`API response is ${typeof res}`);
        let data = res;
        let temperature = data.main.temp;
        return temperature;
    })
    .then(function(temperature) {
        document.getElementById('results').innerHTML = `Good day, captain ${formText}! The \
        current temperature is a balmy ${temperature} degrees.`
    })
}

export { handleSubmit }
