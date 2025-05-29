import PopularProductCard from "../components/PopularProductCard";
import { products } from "../constants"

const PopularProduct = () => {
  return (
    <section id="products" className="max-container ma-sm:mt-12">
      <div children="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          Our <span className="text-coral-red"> Popular </span>Products</h2>
        <p className="lg:max-w-lg mt-2 font-palanquin text-slate-gray">Discover the latest and greatest in footwear fashion. From timeless classics to trendsetting designs, our popular picks are loved by sneakerheads and style-lovers alike. Whether you're stepping out for comfort, performance, or pure street style — these top-selling shoes deliver it all. 👟✨ Don’t miss your chance to grab the hottest pairs before they’re gone!</p>
      </div>

{/* shoe card */}

<div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
{
  products.map((product)=>(
    <PopularProductCard 
    key={product.name} {...product}/>
  )

  )
}
</div>
    </section>
  )
}

export default PopularProduct