# Clima Backend
API construida con JavaScript principalmente para obtener información del clima usando una API de weatherAPI
## Dependencias: 
1. node: v20.15.0,
2. axios: v1.13.2,
3. cors: v2.8.5,
4. dotenv: v17.2.3,
5. express: v5.1.0

# Obten tu API_KEY
Completa el registro y obten tu API_KEY
https://www.weatherapi.com

## .env Example
API_KEY='TuLlaveSuperSecreta'
PORT='Puerto por defecto 3000'

## Lista de endpoints
### Obtener clima por el nombre de la ciudad:
/api/v1/clima?city=${city}
### respuesta del endpoint
```json
"success": true,
    "data": {
        "location": {
            "city": "Culiacan",
            "region": "Sinaloa",
            "country": "Mexico",
            "localtime": "2025-11-26 20:44",
            "timezone": "America/Mazatlan",
            "lat": 24.8074,
            "lon": -107.3973
        },
        "current": {
            "temp_c": 23.4,
            "feelslike_c": 25,
            "condition_text": "Parcialmente nublado",
            "condition_icon": "//cdn.weatherapi.com/weather/64x64/night/116.png",
            "wind_kph": 7.9,
            "wind_dir": "WNW",
            "humidity": 65,
            "pressure_mb": 1014,
            "cloud": 75,
            "visibility_km": 16
        },
        "forecast": {
            "max_temp_c": 37.2,
            "min_temp_c": 16.1,
            "sunrise": "06:34 AM",
            "sunset": "05:20 PM"
        }
    }
}
```
### Ejemplo de mensajes de Error
```json
{
    "success": false,
    "errorCode": 1006,
    "msg": "Ciudad no encontrada"
}
```

