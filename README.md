# Weatherapp

The backend is hosted on an AWS EC2 instance http://ec2-13-48-44-231.eu-north-1.compute.amazonaws.com:9000 and can be used to retrieve either weather information by appending /api/weather or forecast information by appending /api/forecast. The API also has functionality for retrieving weather/forecast based on a specific location.

The frontend is deployed with AWS amplify and can be accessed here https://master.d30bfwiv5sjqxv.amplifyapp.com/ , to allow the frontend to connect with the backend insecure content must be allowed for this website.

In addition the application can be run locally by running docker compose up in the projects root directory. To run the backend locally a openweathermap API key must be aquired from https://openweathermap.org/ after doing so a .env file must be created in /backend and the APIKEY must be assigned to the environment variable APPID e.g APPID='openAPIKEY'
