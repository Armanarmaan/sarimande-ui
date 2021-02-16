import '../style/Shop.scss';
import { useState, useEffect } from 'react';

function Shop() {

  // // FETCH
  // useEffect(() => {
  //   fetchItems();
  // }, []);

  // // SETTER
  // const [items, setItems] = useState([]);

  // // GETTER
  // const fetchItems = async () => {
  //   const data = await fetch('https://fakestoreapi.com/products').then(res => res.json());
  //   console.log(data);
  //   setItems(data);
  // };

  // VIEW
  return (
    // EXAMPLES
    // <div>
    //   <h1>TEST Menu</h1>
    //   <div>
    //     {items.map(item => (
    //       <div className="shop-item" key={item.id}>
    //         <p>{item.id}</p>
    //         <p>{item.title}</p>
    //         <p>${item.price}</p>
    //       </div>
    //     ))}
    //   </div>
    // </div>

    <div className="menu-section">
      <div className="nav flex-column nav-tab" id="navtab" role="tablist">
        <a className="active" id="menu-0" data-toggle="pill" href="#item-0" role="tab">Home</a>
        <a className="" id="menu-1" data-toggle="pill" href="#item-1" role="tab">Profile</a>
      </div>
      <div className="tab-content tab-pane" id="tabpane">
        <div className="tab-pane fade show active" id="item-0" role="tabpanel">AAA</div>
        <div className="tab-pane fade" id="item-1" role="tabpanel">BBB</div>
      </div>
    </div>
    
  );
}

export default Shop;
