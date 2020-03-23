import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'
import { WeatherService } from './../src/weather-service.js';

$(document).ready(function () {

    $('#baconButton').click(function () {
        const p = $('#para').val();


        (async () => {
            let weatherService = new WeatherService();
            const baconGoodness = await weatherService.getWeatherByCity(p);
            console.log(p);
            getElements(baconGoodness);
        })();

        function getElements(baconGoodness) {
            if (baconGoodness && baconGoodness.length > 0) {
                $("#baconIpsumOutput").html('');
                for (var i = 0; i < baconGoodness.length; i++)
                    $("#baconIpsumOutput").append('<p>' + baconGoodness[i] + '</p>');
                $("#baconIpsumOutput").show();
            }
        };
    });
});
// $(document).ready(function () {
//     $("#baconButton").click(function () {
//         $.getJSON('https://baconipsum.com/api/?callback=?',
//             { 'type': 'meat-and-filler', 'start-with-lorem': '1', 'paras': '3' },
//             function (baconGoodness) {
//                 if (baconGoodness && baconGoodness.length > 0) {
//                     $("#baconIpsumOutput").html('');
//                     for (var i = 0; i < baconGoodness.length; i++)
//                         $("#baconIpsumOutput").append('<p>' + baconGoodness[i] + '</p>');
//                     $("#baconIpsumOutput").show();
//                 }
//             });
//     });
// });