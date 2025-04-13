import { useState } from 'react';
import './App.css';
import FlowerComponent from './FlowerComponent';

function App() {
  const [headline, setHeadline] = useState("🌺 Donnie's Hawaiian Flower Collection 🌺");

  const [flowers, setFlowers] = useState([
    { name: 'Plumeria', image: 'https://earthone.io/_next/image?url=https%3A%2F%2Fbs.plantnet.org%2Fimage%2Fo%2Fc78bdc98f882776ae947cd22d4d4136a634a734f&w=3840&q=75'},
    { name: 'Hibiscus', image: 'https://cdn.sanity.io/images/pn4rwssl/production/12d8005272c213a726dc8722bcebb643b6fef395-1360x2048.jpg?rect=0,127,1360,1795&w=2880&h=3801&q=75&auto=format' },
    { name: 'Orchid', image: 'https://www.birdsandblooms.com/wp-content/uploads/2023/11/Cymbidium-orchid.jpg?fit=680%2C680' },
    { name: 'Red Ginger', image: 'https://wildlifeofhawaii.com/images/flowers/Alpinia-purpurata-2.jpg' },
    { name: 'Bird of Paradise', image: 'https://images.immediate.co.uk/production/volatile/sites/10/2021/04/2048x1365-Strelitzia-reginae-GettyImages-1270647929-4f76714.jpg?quality=90&resize=940,627' },
    { name: 'Heliconia', image: 'https://www.bloomsofhawaii.com/cdn/shop/products/rostrata_hanging_heliconia.jpg?v=1571266834' },
    { name: 'Blue Ginger', image: 'https://www.hortmag.com/uploads/MTY4OTExNDUxMDgxMjg3Mzc2/blueginger_creditricardo_de_paula_ferreira___shutterstock.jpg?format=auto&optimize=high&width=1440' },
    { name: 'Yellow Hibiscus', image: 'https://tropicalplantsofflorida.com/wp-content/uploads/yellow-hibiscus-red-throat.jpg' },
    { name: 'Tiare Flower', image: 'https://lanikaibathandbody.com/cdn/shop/articles/flora08.jpg?v=1633115771' },
    { name: 'Naupaka', image: 'https://i.pinimg.com/736x/95/cd/96/95cd96cee25e774f0e20c916d8f4fb0e.jpg' }
  ]);

  const updateHeadline = (flowerName) => {
    setHeadline(`${flowerName} is the focus!`);
  };

  const deleteFlower = (flowerName) => {
    setFlowers((prevFlowers) => prevFlowers.filter(flower => flower.name !== flowerName));
  };

  const duplicateFlower = (flower) => {
    setFlowers((prevFlowers) => [...prevFlowers, { ...flower, name: `${flower.name} (copy)` }]);
  };

  return (
    <div className="App">
      <h1>{headline}</h1>
      <div className="flower-list">
        {flowers.map((flower, index) => (
          <FlowerComponent
            key={index}
            flower={flower}
            onFocus={updateHeadline}
            onDelete={deleteFlower}
            onDuplicate={duplicateFlower}
          />
        ))}
      </div>
    </div>
  );
}

export default App;