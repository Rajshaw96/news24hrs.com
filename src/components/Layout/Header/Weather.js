"use client";
import React, { useEffect, useState } from 'react';

export default function Weather({ iconSrc }) {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = (lat, lon) => {
      const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;
      if (!apiKey) {
        console.error('OpenWeather API key is missing.');
        setWeather({
          city: 'San Francisco',
          temp: 13,
          icon: null,
        });
        return;
      }

      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.cod === 200) {
            setWeather({
              city: data.name,
              temp: Math.round(data.main.temp),
              icon: data.weather[0].icon,
            });
          } else {
            setWeather({ city: 'San Francisco', temp: 13, icon: null });
          }
        })
        .catch((error) => {
          console.error('Error fetching weather data:', error);
          setWeather({ city: 'San Francisco', temp: 13, icon: null });
        });
    };

    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            fetchWeather(position.coords.latitude, position.coords.longitude);
          },
          () => {
            // Fallback to a default location on error or denial
            fetchWeather(37.7749, -122.4194); // San Francisco
          }
        );
      } else {
        // Fallback for browsers that don't support geolocation
        fetchWeather(37.7749, -122.4194); // San Francisco
      }
    };

    getLocation();
  }, []);

  if (!weather) {
    return null; // Or a loading indicator
  }

  return (
    <div className="header-temperature justify-content-end d-none d-lg-flex align-items-center">
      <div className="icon">
        <img
          src={weather.icon ? `https://openweathermap.org/img/wn/${weather.icon}.png` : iconSrc}
          alt="Weather"
        />
      </div>
      <div className="temperature-content text-center">
        <h5 className="title">
          {weather.temp}
          <sup>
            0<sub>C</sub>
          </sup>
        </h5>
        <p>{weather.city}</p>
      </div>
    </div>
  );
}