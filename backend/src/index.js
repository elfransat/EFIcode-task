const debug = require('debug')('weathermap');


const Koa = require('koa');
const router = require('koa-router')();
const cors = require('@koa/cors');
const fetch = require('node-fetch');
require('dotenv').config()


const appId = process.env.APPID || '';
const mapURI = process.env.MAP_ENDPOINT || "http://api.openweathermap.org/data/2.5";
const targetCity = process.env.TARGET_CITY || "Helsinki,fi";

const port = process.env.PORT || 9000;

const app = new Koa();

app.use(cors({ origin: '*' }));

const fetchWeather = async (latitude, longitude) => {
  const endpoint = `${mapURI}/weather?lat=${latitude}&lon=${longitude}&appid=${appId}`;
  const response = await fetch(endpoint);
  return response ? response.json() : {}
};

const fetchForecast = async (latitude, longitude) => {
  const endpoint = `${mapURI}/forecast?lat=${latitude}&lon=${longitude}&cnt=4&appid=${appId}&`;
  const response = await fetch(endpoint);
  return response ? response.json() : {}
};

router.get('/api/weather', async ctx => {
  const latitude = ctx.query.latitude
  const longitude = ctx.query.longitude
  const weatherData = await fetchWeather(latitude, longitude);
  ctx.type = 'application/json; charset=utf-8';
  ctx.body = weatherData.weather ? weatherData.weather[0] : {};
});

router.get('/api/forecast', async ctx => {
  const latitude = ctx.query.latitude
  const longitude = ctx.query.longitude
  const forecastData = await fetchForecast(latitude, longitude);
  ctx.type = 'application/json; charset=utf-8';
  ctx.body = forecastData?.list ? forecastData?.list : {};
});


app.use(router.routes());
app.use(router.allowedMethods());

app.listen(port);

console.log(`App listening on port ${port}`);
