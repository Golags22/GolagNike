import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/Button" 
const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container ">
      <div className="flex-1">
        <img src={offer} 
        width={773}
        height={687}
        className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
  <h2 className="font-palanquin text-4xl capitalize max-sm:text-[50px] font-bold lg:max-w-lg">
    <span className="text-coral-red "> Special </span>
    Offer
  </h2>
  <p className="mt-4 sm:max-w-lg info-text">
   Upgrade your style and comfort with our high-performance shoes, designed for durability, everyday elegance, and all-day support. Experience the perfect blend of craftsmanship and innovation where quality materials and contemporary design come together to keep you moving confidently.
  </p>
  <p className="mt-6 sm:max-w-lg info-text">
   Discover the difference with shoes that combine superior comfort, lasting durability, and classic design. </p>
  <div className="mt-11 flex flex-wrap gap-4">
      <Button label="Shop Now"
      iconURL={arrowRight} 
  />
      <Button label="Learn More"
      backgroundColor="bg-white"
      borderColor="border-slate-gray"
      textColor="text-slate-gray"
  />
  </div>
</div>
      </section>
  )
}

export default SpecialOffer