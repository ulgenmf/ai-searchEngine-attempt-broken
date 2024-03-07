'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Define the Cat interface
interface Cat {
 id: string;
 name: string;
 description: string;
 image: {
    url: string;
 };
}

const Test: React.FC = () => {
 const [cats, setCats] = useState<Cat[]>([]);

 useEffect(() => {
    const fetchCats = async () => {
      const response = await axios.get<Cat[]>('https://api.thecatapi.com/v1/breeds');
      setCats(response.data);
    };

    fetchCats();
 }, []);

 return (
    <div>
      <h1>Cats</h1>
      <ul>
        {cats.map((cat) => (
          <li key={cat.id}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img src={cat.image.url} alt={cat.name} style={{ width: '100px' }} />
              <div style={{ marginLeft: '10px' }}>
                <h3>{cat.name}</h3>
                <p>{cat.description}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
 );
};

export default Test;