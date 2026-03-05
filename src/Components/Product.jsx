import React from "react";

export default function Product() {

const products = [
  {
    id: 1,
    title: "Natural Cocoa Powder",
    image: "https://images.unsplash.com/photo-1586985564150-9b6c3d7a1b17",
    description: "Premium natural cocoa powder made from high quality cocoa beans for baking and beverages."
  },
  {
    id: 2,
    title: "Alkaline Cocoa Powder",
    image: "https://images.unsplash.com/photo-1606312619344-1f4b5d3b9c90",
    description: "Smooth alkalized cocoa powder with rich color and taste for cakes and desserts."
  },
  {
    id: 3,
    title: "Fruit Paste",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb",
    description: "Fresh fruit paste used in bakery fillings, desserts and confectionery items."
  },
  {
    id: 4,
    title: "Fruit Based Toppings",
    image: "https://images.unsplash.com/photo-1606787366850-de6330128bfc",
    description: "Premium fruit toppings perfect for cakes, waffles and ice creams."
  },
  {
    id: 5,
    title: "Chocolate Topping",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
    description: "Rich chocolate topping ideal for desserts, cakes and bakery decorations."
  },
  {
    id: 6,
    title: "Pizza Flour",
    image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73",
    description: "Specially milled flour designed for soft and stretchy pizza dough."
  },

  // Bakery Products
  {
    id: 7,
    title: "Chocolate Cake",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
    description: "Soft and moist chocolate cake perfect for celebrations and desserts."
  },
  {
    id: 8,
    title: "Croissant",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff",
    description: "Flaky and buttery French croissant baked fresh for a perfect breakfast."
  },
  {
    id: 9,
    title: "Blueberry Muffin",
    image: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa",
    description: "Soft muffin filled with sweet blueberries and baked to perfection."
  },
  {
    id: 10,
    title: "Donuts",
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b",
    description: "Delicious glazed donuts with sweet toppings loved by everyone."
  },
  {
  id: 11,
  title: "Strawberry Cake",
  image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729",
  description: "Delicious strawberry cake layered with fresh cream and sweet strawberry flavor, perfect for celebrations."
},
{
  id: 12,
  title: "Garlic Bread",
  image: "https://images.unsplash.com/photo-1619531038896-8f64a96b2a1a",
  description: "Crispy garlic bread topped with butter, herbs and cheese, ideal for snacks and pizza sides."
}
]

return (
<section className="w-full py-20 bg-slate-100">

<div className="max-w-7xl mx-auto px-4">

<h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
Our <span className="text-blue-600">Products</span>
</h2>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

{products.map((item) => (

<div key={item.id} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden group">

<div className="overflow-hidden">
<img
src={item.image}
alt={item.title}
className="w-full h-48 object-cover group-hover:scale-110 transition duration-300"
/>
</div>

<div className="p-5">

<h3 className="text-lg font-semibold mb-2">
{item.title}
</h3>

<p className="text-gray-600 text-sm mb-4">
{item.description}
</p>

{/* <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
View Product
</button> */}

</div>

</div>

))}

</div>

</div>

</section>
);
}