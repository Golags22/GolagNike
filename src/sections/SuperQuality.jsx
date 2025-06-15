import Button from "../components/Button"
import { shoe8 } from "../assets/images"

const SuperQuality = () => {
  return (
    <section
    id="about-us"
    className="flex flex-col lg:flex-row justify-between items-center gap-10 w-full max-container "
    >
<div className="flex flex-1 flex-col">
  <h2 className="font-palanquin text-4xl capitalize max-sm:text-[50px] font-bold lg:max-w-lg">
 We Provide You
    <span className="text-coral-red "> Spuer </span>
    <span className="text-coral-red "> Quality </span>
    Shoes
  </h2>
  <p className="mt-4 sm:max-w-lg info-text">
    Step up your game with our premium quality shoes built to deliver unmatched comfort, long-lasting wear, and timeless style.
  </p>
  <p className="mt-6 sm:max-w-lg info-text">
    Elevate every step with expertly crafted shoes where premium materials meet modern design for a look that lasts and a feel you’ll love.
  </p>
  <div className="mt-11">
      <Button label="View details" 
  />
  </div>
</div>
{/* {Right image} */}
<div className="flex-1 flex justify-center items-center">
  <img src={shoe8} alt="shoe collection" 
  width={570}
  height={522}
  className="object-contain"
  
  />
</div>
    </section>
  )
}

export default SuperQuality