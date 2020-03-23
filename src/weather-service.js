export class WeatherService {
    async getWeatherByCity(paragraphs) {
        try {
            let response = await fetch(`https://baconipsum.com/api/?type=all-meat&paras=${paragraphs}&start-with-lorem=1`);
            let jsonifiedResponse;
            if (response.ok && response.status == 200) {
                jsonifiedResponse = await response.json();
            } else {
                jsonifiedResponse = false;
            }
            return jsonifiedResponse;
        } catch {
            return false;
        }
    }
}