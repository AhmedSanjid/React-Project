import React, { useState } from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';
import { Chart } from 'chart.js/auto';

function Forcast() {
  const [location, setLocation] = useState('');
  const [productName, setProductName] = useState('');
  const [dateTime, setDateTime] = useState('');
  const [recommendation, setRecommendation] = useState(null);
  const [chartInstance, setChartInstance] = useState(null);

  // Static weather reports for countries
  const weatherReports = {
    'Canada': 'Clear skies with low wind speed. Mild temperatures.',
    'Germany': 'Cloudy with a chance of rain. Cool temperatures.',
    'Japan': 'Partly cloudy, with light winds. No extreme weather.',
    'Afghanistan': 'Hot and dry, with a high risk of sandstorms.',
    'Iraq': 'Scorching heat and strong winds. Dust storms likely.',
    'Somalia': 'High humidity with thunderstorms expected in coastal areas.',
    'Syria': 'Dry, hot, and occasional dust storms.',
    'Australia': 'Sunny and clear skies, ideal for transport.',
    'Sweden': 'Cold and clear skies. Low temperatures but stable conditions.'
  };

  const fetchRecommendation = async () => {
    try {
      const recommendation = getRecommendation(location, productName, dateTime);
      setRecommendation(recommendation);
      updateChart(recommendation);
    } catch (error) {
      console.error('Error fetching recommendation:', error);
    }
  };

  const getRecommendation = (location, productName, dateTime) => {
    let safetyLevel = 'green'; // Safe (Low)
    let truck = 'Flatbed Truck';
    let container = 'Standard Container';
    let truckSpeed = '60 km/h';
    let route = 'Main highways recommended';

    // Adjust recommendations based on location, product, and time
    if (location.toLowerCase().includes('snow') || productName.toLowerCase().includes('fragile')) {
      safetyLevel = 'red'; // Dangerous (High)
      truck = 'Covered Truck';
      container = 'Insulated Container';
      truckSpeed = '30 km/h';
      route = 'Avoid snowy or hilly areas.';
    } else if (location.toLowerCase().includes('rain') || productName.toLowerCase().includes('perishable')) {
      safetyLevel = 'yellow'; // Moderate
      truck = 'Covered Truck';
      container = 'Insulated Container';
      truckSpeed = '40 km/h';
      route = 'Avoid flooded areas.';
    }

    const currentDate = new Date(dateTime);
    const hour = currentDate.getHours();
    if (hour >= 22 || hour <= 6) {
      safetyLevel = 'yellow'; // Moderate risk at night
      truckSpeed = '40 km/h';
      route = 'Use well-lit roads.';
    }

    const dangerousCountries = ['Syria', 'Afghanistan', 'Yemen', 'Somalia', 'Iraq'];
    const safeCountries = ['Switzerland', 'Canada', 'Sweden', 'Australia', 'Germany'];

    if (dangerousCountries.includes(location)) {
      safetyLevel = 'red'; // Dangerous (Critical)
      truck = 'Armored Truck';
      container = 'Secure Container';
      truckSpeed = '20 km/h';
      route = 'Avoid conflict zones.';
    } else if (safeCountries.includes(location)) {
      safetyLevel = 'green'; // Safe (Low)
      truck = 'Flatbed Truck';
      container = 'Standard Container';
      truckSpeed = '70 km/h';
      route = 'Fastest route via main highways.';
    }

    return {
      truck,
      container,
      truckSpeed,
      route,
      safetyLevel,
      report: `Based on location: ${location}, product: ${productName}, and date/time: ${dateTime}, use ${truck} with ${container}. Speed: ${truckSpeed}. Route: ${route}.`
    };
  };

  const updateChart = (recommendation) => {
    const ctx = document.getElementById('safetyChart').getContext('2d');
    if (chartInstance) {
      chartInstance.destroy();
    }
    const safetyLevel = recommendation.safetyLevel;
    const safetyColor = {
      green: 'rgba(75, 192, 192, 0.2)', // Low risk
      yellow: 'rgba(255, 205, 86, 0.2)', // Moderate risk
      red: 'rgba(255, 99, 132, 0.2)' // High/Critical risk
    };

    const newChartInstance = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Low', 'Moderate', 'High', 'Critical'],
        datasets: [{
          label: 'Safety Level',
          data: [
            safetyLevel === 'green' ? 100 : 0,
            safetyLevel === 'yellow' ? 100 : 0,
            safetyLevel === 'red' ? 100 : 0
          ],
          backgroundColor: [safetyColor.green, safetyColor.yellow, safetyColor.red],
          borderColor: [safetyColor.green, safetyColor.yellow, safetyColor.red],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            max: 100
          }
        }
      }
    });
    setChartInstance(newChartInstance);
  };

  return (
    <section id="risk-assessment" className="py-4 bg-light">
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
              <Form.Group controlId="dateTime">
                <Form.Label>Date and Time</Form.Label>
                <Form.Control type="datetime-local" value={dateTime} onChange={(e) => setDateTime(e.target.value)} />
              </Form.Group>
              <Button variant="primary" type="button" className="mt-3" onClick={fetchRecommendation}>
                Get Recommendations
              </Button>
            </Form>
          </div>
        </div>

        {recommendation && (
          <section id="recommendation-info" className="py-5">
            <Container>
              <h2 className="text-center mb-4">Recommendations</h2>
              <div className="row">
                <div className="col-md-6">
                  <Card>
                    <Card.Body>
                      <Card.Title>Transport Recommendations</Card.Title>
                      <Card.Text>
                        <strong>Recommended Truck:</strong> {recommendation.truck}<br />
                        <strong>Recommended Container:</strong> {recommendation.container}<br />
                        <strong>Truck Speed:</strong> {recommendation.truckSpeed}<br />
                        <strong>Route Suggestion:</strong> {recommendation.route}<br />
                        <strong>Report:</strong> {recommendation.report}<br /><br />
                        {/* Display static weather report */}
                        <strong>Static Weather Report for {location}:</strong> <br />
                        {weatherReports[location] ? (
                          <strong>{weatherReports[location]}</strong>
                        ) : 'No static weather report available.'}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
                <div className="col-md-6">
                  <canvas id="safetyChart" width="400" height="200"></canvas>
                </div>
              </div>
            </Container>
          </section>
        )}
      </Container>
    </section>
  );
}

export default Forcast;
