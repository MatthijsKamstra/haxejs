#NASA API

If you want to access the information on a website you will need to register yourself as a developer.
With that key you can get the information you want.

They do that, because they want to check what you are doing with that information...

The api-key is not transferable. And if I would put it up here, I would break the agreement I made with that particular company.
That is bad news for the Ajax calls I want to show.


I started looking for an API that could be use *without* having API-KEY.

I found it at [NASA](https://api.nasa.gov/api.html)
> You do not need to authenticate to explore the NASA data. 


## DEMO_KEY Rate Limits

In documentation examples, we use the special DEMO_KEY api key.
This API key can be used for initially exploring APIs prior to signing up. But it has much lower rate limits, so you're encouraged to signup for your own API key if you plan to use the API (sign-up is quick and easy). The rate limits for the DEMO_KEY are:

* Hourly Limit: 30 requests per IP address per hour
* Daily Limit: 50 requests per IP address per day


## More, easy to access, data from NASA

I used the [APOD](https://api.nasa.gov/api.html#apod) but there is more:

* [APOD](https://api.nasa.gov/api.html#apod) : beautiful images from space
* [Earth](https://api.nasa.gov/api.html#earth) : images of earth taken from NASA satellites, with intervals of 16 days
* [Earth temperature anomalies](https://api.nasa.gov/api.html#earth-temperature-anomalies) : temperatures on a specific place starting 1880
* [Patents](https://api.nasa.gov/api.html#patents) : The NASA patent portfolio
* [Sounds](https://api.nasa.gov/api.html#sounds) : Sounds from space!!! (Beta)

Just keep in mind that there is a limit and if you want to exceed that limit you should ask for a api-key.