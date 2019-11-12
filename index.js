let city = "bermuda"
// let database = firebase.database()
// database.ref("Weather/Icon").on('value', function (snapshot) {
//     let weatherIcon = snapshot.val()
//     $(".icon").html(weatherIcon);
// })
// database.ref("Weather/Weather").on('value', function (snapshot) {
//     let weather = snapshot.val()
//     $(".weather").html(weather);
// })
// database.ref("Weather/Name").on('value', function (snapshot) {
//     let weatherName = snapshot.val()
//     $(".name").html(weatherName);
// })
// database.ref("Weather/Temp").on('value', function (snapshot) {
//     let weatherTemp = snapshot.val()
//     $(".temp").html(weatherTemp);
// })
$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=e5551e725b8de0d1f0194deb4d4cecb9",
    function (data) {
        console.log(data);
        let icon = "http://api.openweathermap.org/img/w/" + data.weather[0].icon;
        console.log(icon)
        let temp = Math.floor(data.main.temp);
        let name = data.name
        let weather = data.weather[0].main;
        $(".icon").attr("src", icon)
        $(".weather").append(weather)
        $(".name").append(name)
        $(".temp").append(temp)
    });
// let database = firebase.database()
// database.ref("ContactUs/Name").on('value', function (snapshot) {
//     let ConUsName = snapshot.val()
//     $("#contact-form").html(ConUsName);
// })
// database.ref("ContactUs/Email").on('value', function (snapshot) {
//     let ConUsEmail = snapshot.val()
//     $("#contact-form").html(ConUsEmail);
// })
// database.ref("ContactUs/Message").on('value', function (snapshot) {
//     let ConUsMessage = snapshot.val()
//     $("#contact-form").html(ConUsMessage);
// })
// database.ref("Getaquote/Name").on('value', function (snapshot) {
//     let GetaquoName = snapshot.val()
//     $("#quote").html(GetaquoName);
// })
// database.ref("Getaquote/Email").on('value', function (snapshot) {
//     let GetaquoEmail = snapshot.val()
//     $("#quote").html(GetaquoEmail);
// })
// database.ref("Getaquote/Message").on('value', function (snapshot) {
//     let GetaquoMessage = snapshot.val()
//     $("#quote").html(GetaquoMessage);
// });