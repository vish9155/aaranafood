import React from "react";
import products from '../Data/product'
export default function Product() {


console.log(products)

return (
<section className="w-full py-20 bg-slate-400">

<div className="max-w-7xl mx-auto px-4">

<h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
Our <span className="text-slate-600">Products</span>
</h2>

<div className="grid grid-cols-1  md:grid-cols-2  gap-8">

{products.map((item) => (

<div key={item.id} className="bg-white rounded-2xl border shadow  shadow-sky-100 z-40 transition-all  hover:translate-x-2.5 cursor-pointer border-white  hover:shadow-xl transition duration-300 overflow-hidden group">

<div className="overflow-hidden">
<img
src={item.image}
alt={''}
className="w-[606px] h-[340px]  object-cover group-hover:scale-110 transition duration-300"
/>
</div>

<div className="">

{
  item.content
}

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