import React from 'react';
import './App.css';

const products = [
  {
    category: 'Toy Bikes',
    items: [
      { id: 1, name: 'Scooty pepty Bike', price: 1500, material: 'Plastic', image: 'https://cdn.bikedekho.com/processedimages/tvs/tvs-scooty/640X309/tvs-scooty60069d82e1217.jpg' },
      { id: 2, name: 'Activa  Bike', price: 1800, material: 'Metal', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShayNeI11ftp0E5vJt3nw4cnJBuxCxz9V5ZA&s' },
      { id: 1, name: 'Yamaha Bike', price: 2000, material: 'Plastic', image: 'https://www.carbike360.com/_next/image?url=https%3A%2F%2Fd2uqhpl0gyo7mc.cloudfront.net%2Fsmall_Yamaha_Aerox_155_carbike360_com_2_31ae8c2457.png&w=3840&q=75' },
      { id: 2, name: 'Ducati Bike', price: 1800, material: 'Metal', image: 'https://cdn.bikedekho.com/processedimages/ducati/panigale-v4/source/panigale-v466a3a415b6b68.jpg' },
      { id: 1, name: 'Pulsar Bike', price: 2000, material: 'Plastic', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvbxxR3svUonwSb8OjgLOuXILl_OtGFJ6fOw&s' },
    ],
  },
  {
    category: 'Toy Cars',
    items: [
      { id: 3, name: 'Racing Car', price: 1200, material: 'Plastic & Metal', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQim9FyJL-UgTttdgH3jzPs69rORnFkhX_oKQ&s' },
      { id: 4, name: 'Monster Truck', price: 2000, material: 'Rubber & Plastic', image: 'https://store-images.s-microsoft.com/image/apps.44351.13860068965824593.65d0ba64-396c-4661-a208-c6cf0ca16a09.7e97e8d0-4bb8-4015-ab9e-21883bdaee45?q=90&w=480&h=270' },
      { id: 3, name: 'Panther Car', price: 2500, material: 'Plastic & Metal', image: 'https://m.media-amazon.com/images/I/51VgS6cKKoS._AC_UF894,1000_QL80_.jpg' },
      { id: 4, name: 'Mercedes Truck', price: 3500, material: 'Rubber & Plastic', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-XmrixQRZxwdxfs8rqhxzdrrcjrKAOLTwgQ&s' },
      { id: 4, name: 'Thar jeep', price: 2700, material: 'Rubber & Plastic', image: 'https://img.gaadicdn.com/images/car-images/large/Mahindra/Thar/10751/1710155680350/224_Stealth-Black_0d0d0d.jpg' },
      
    ],
  },
  {
    category: 'Anime Characters',
    items: [
      { id: 5, name: 'Naruto', price: 900, material: 'PVC', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqZAB-0VT25DjweShNPo2i1BKWTl9c29wxCA&s' },
      { id: 6, name: 'Goku', price: 1100, material: 'PVC', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd4OKe1DFGg3stwlr4kKgwmyOHsc6Su1FOMg&s' },
      { id: 5, name: 'Doremon', price: 900, material: 'PVC', image: 'https://www.partysuppliesindia.com/cdn/shop/products/A2_33_c020ee18-0c82-4dc1-b16d-c90a64707b20.jpg?v=1635508143&width=1500' },
      { id: 6, name: 'Chhotabheem', price: 1100, material: 'PVC', image: 'https://www.greengold.tv/assets/Character/CB/Bheem.jpg' },
      { id: 6, name: 'Jackiechan', price: 1100, material: 'PVC', image: 'https://frworld.in/cdn/shop/files/WhatsAppImage2024-02-05at13.07.20_1.jpg?v=1707120170' },
    ],
  },
];

function App() {
  return (
    <div className="app-container">
      <header className="header">
        <h1 className="shop-name">DREAM TOYS</h1>
        <p className="shop-address">No.09 Karaikudi - 630001</p>
      </header>
      
      <div className="cart-section">
        {products.map((category, index) => (
          <div key={index} className="cart-category">
            <h2>{category.category}</h2>
            <div className="cart-grid">
              {category.items.map((item) => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} className="cart-image" />
                  <h3 className="cart-name">{item.name}</h3>
                  <p className="cart-price">Price: ₹{item.price}</p>
                  <p className="cart-material">Material: {item.material}</p>
                  <button className="add-to-cart">Add to Cart</button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <footer className="footer">
        <p>Accepted Payments: GPay, Netbanking, Credit/Debit Cards, Cash on Delivery.</p>
        <p>Special Discounts on Orders Above ₹5000. T&C Apply.</p>
      </footer>
    </div>
  );
}

export default App;
