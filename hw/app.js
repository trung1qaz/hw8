function myFunction() {
document.getElementById("demo").innerHTML = "Kiểm tra console để xem";

let dt = fetch('https://api.apify.com/v2/key-value-stores/ZsOpZgeg7dFS1rgfM/records/LATEST')
    .then (function(response){
        return response.json();
    })
    .then (function(data){
        console.log(data.detail);
    });
    console.log(dt);
}
