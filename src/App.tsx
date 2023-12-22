import React, { useEffect, useState } from 'react';
import horoscopesData from '../src/assets/data.json';
import { Card } from 'antd';

interface Horoscope {
  sign: string;
  prediction: string;
}

const HoroscopeComponent: React.FC = () => {
  const [horoscopes, setHoroscopes] = useState<Horoscope[] | null>(null);

  useEffect(() => {
    setHoroscopes(horoscopesData);
  }, []);

  return (
    <div>
      <h1>Horóscopos Diarios</h1>
      {horoscopes ? (
        <div>
          {horoscopes.map((horoscope, index) => (
            <Card key={index} style={{ display: 'grid', width: '60%', flexDirection: 'column', marginBottom: '16px' }}>
              <div>
                <img
                  src={`/img/${horoscope.sign.toLowerCase()}.png`}
                  alt={horoscope.sign}
                  style={{
                    width: '20%',
                    height: '100px',
                    borderRadius: '10px',
                  }}
                />
              </div>
              <h2>{horoscope.sign}</h2>
              <p>{horoscope.prediction}</p>
            </Card>
          ))}
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default HoroscopeComponent;
