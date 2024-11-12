import React, { useState } from 'react';
import axios from 'axios';
import { Container, Form, Button, Card } from 'react-bootstrap';
import { Line } from 'react-chartjs-2';
import AdminLayout from '../../layouts/AdminLayout';

function Forcast() {
        const [location, setLocation] = useState('');
        const [productName, setProductName] = useState('');
        const [weatherData, setWeatherData] = useState(null);
        const [recommendation, setRecommendation] = useState(null);
      
        const fetchWeatherData = async () => {
          try {
            // Fetch weather data from OpenWeatherMap API
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=853725461acb4919b0d163044241211`);
            setWeatherData(response.data);
      
            // Mock recommendation logic
            const recommendation = getRecommendation(response.data.weather[0].main);
            setRecommendation(recommendation);
          } catch (error) {
            console.error('Error fetching weather data:', error);
          }
        };
      
        const getRecommendation = (weatherCondition) => {
          switch (weatherCondition) {
            case 'Clear':
              return {
                truck: 'Flatbed Truck',
                container: 'Open Top Container',
                report: 'Clear skies, no need for additional protection.'
              };
            case 'Rain':
              return {
                truck: 'Covered Truck',
                container: 'Insulated Container',
                report: 'Rain expected, use covered and insulated containers.'
              };
            case 'Snow':
              return {
                truck: 'Covered Truck',
                container: 'Insulated Container',
                report: 'Snow expected, use covered and insulated containers.'
              };
            case 'Clouds':
              return {
                truck: 'Flatbed Truck',
                container: 'Standard Container',
                report: 'Cloudy conditions, no need for additional protection.'
              };
            default:
              return {
                truck: 'Flatbed Truck',
                container: 'Standard Container',
                report: 'No specific weather conditions, use standard containers.'
              };
          }
        };
      
        return (
          
            <section id="weather-forecast" className="py-4 bg-light">
              <Container>
                <h2 className="text-center mb-4">Risk Assessment</h2>
                <div className="row justify-content-center">
                  <div className="col-md-6">
                    <Form>
                      <Form.Group controlId="location">
                        <Form.Label>Location</Form.Label>
                        <Form.Control type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Enter location" />
                      </Form.Group>
                      <Form.Group controlId="productName">
                        <Form.Label>Product Name</Form.Label>
                        <Form.Control type="text" value={productName} onChange={(e) => setProductName(e.target.value)} placeholder="Enter product name" />
                      </Form.Group>
                      <Button variant="primary" type="button" className="mt-3" onClick={fetchWeatherData}>
                        Get Forecast
                      </Button>
                    </Form>
                  </div>
                </div>
              </Container>
            
      
            {weatherData && (
              <section id="forecast-info" className="py-5">
                <Container>
                  <h2 className="text-center mb-4">Weather Forecast</h2>
                  <div className="row">
                    <div className="col-md-6">
                      <Card>
                        <Card.Body>
                          <Card.Title>Current Weather</Card.Title>
                          <Card.Text>
                            <strong>Location:</strong> {weatherData.name}<br />
                            <strong>Condition:</strong> {weatherData.weather[0].main}<br />
                            <strong>Temperature:</strong> {Math.round(weatherData.main.temp - 273.15)}°C<br />
                            <strong>Humidity:</strong> {weatherData.main.humidity}%<br />
                            <strong>Wind Speed:</strong> {weatherData.wind.speed} m/s
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </div>
                    <div className="col-md-6">
                      <Card>
                        <Card.Body>
                          <Card.Title>Recommendations</Card.Title>
                          <Card.Text>
                            <strong>Recommended Truck:</strong> {recommendation.truck}<br />
                            <strong>Recommended Container:</strong> {recommendation.container}<br />
                            <strong>Weather Change Report:</strong> {recommendation.report}
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </div>
                  </div>
                </Container>
              </section>
            )}
            </section>
        );
      }

export default Forcast;