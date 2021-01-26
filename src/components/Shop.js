import '../style/Shop.scss';
import { useState, useEffect } from 'react';

function Shop() {

  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch('https://fakestoreapi.com/products').then(res => res.json());
    console.log(data);
    setItems(data);
  };

  return (
    <div>
      <h1>Hello Shop!</h1>
      <div>
        {items.map(item => (
          <div className="shop-item" key={item.id}>
            <p>{item.id}</p>
            <p>{item.title}</p>
            <p>${item.price}</p>
          </div>
        ))}
      </div>
    </div>

  );
}

export default Shop;
