import React from 'react'
import { useState,useEffect } from 'react'
import "./bike.css"

const Bikes = [
  {
    id: 1,
    name: "Super Meteor 650",
    details: "Over the years, Royal Enfield has made exceptional contributions to the cruiser category with stylish motorcycles that have founded new, niche markets. Beginning in the mid-1950s, it was decades ahead",
    price: "Rs. 3,78,900",
    imageUrl: "https://www.royalenfield.com/content/dam/royal-enfield/super-meteor-650/motorcycles/home/motorcycle/motorcycle-landing.jpg"
  },
  {
    id: 2,
    name: "Hunter 350",
    details: "The Hunter 350 is a roadster motorcycle designed to rev through the city streets and gun down the motorways. The Hunter 350 offers a mileage of 36.5 kmpl. The Hunter 350 is a roadster motorcycle. The",
    price: "Rs. 1,66,901",
    imageUrl: "https://www.royalenfield.com/content/dam/royal-enfield/hunter-350/hunter-350-motorcycle-landing.jpg"
  },
  {
    id: 3,
    name: "Scram 411",
    details: "The Scram 411 is powered by a 411-cc engine that generates a power of 24.3 BHP @ 6500 rpm and a torque of 32 Nm @ 4250±250 rpm ensuring that you overcome the most challenging terrains. With a single-c",
    price: "Rs. 2,03,000",
    imageUrl: "https://www.royalenfield.com/content/dam/royal-enfield/india/motorcycles/scram/scram-411-landing.jpg"
  },
  {
    id: 4,
    name: "Classic 350",
    details: "The Classic 350 offers ample torque with 20.2 BHP @ 6100 RPM and 27 Nm @ 4000 rpm. Assembled with a twin downtube spine frame for a comfortable ride, 350 cc engine type, 13 litres of fuel capacity, a ",
    price: "Rs. 2,21,297",
    imageUrl: "https://www.royalenfield.com/content/dam/royal-enfield/india/motorcycles/classic-350/landing/classic-350-motorcycle.jpg"
  },
  {
    id: 5,
    name: "Meteor",
    details: "For the 2022 range, we've introduced the following variants:1. Fireball Matt Green - New matt green fuel tank - New side panel stickers - Matching green rim tapes 2. Fireball Blue - New gloss blue fue",
    price: "Rs. 2,17,469",
    imageUrl: "https://www.royalenfield.com/content/dam/royal-enfield/india/motorcycles/landing/meteor-new-landing.jpeg"
  },
  {
    id: 6,
    name: "Interceptor",
    details: "Inspired by the iconic 60’s Interceptor with its greatest following in the American west coast, fitting perfectly into the easy-going, fun narrative of the time, the new Interceptor 650 Twin reimagine",
    price: "Rs. 3,01,000",
    imageUrl: "https://www.royalenfield.com/content/dam/royal-enfield/india/motorcycles/landing/interceptor-new.jpg"
  },
  {
    id: 7,
    name: "Continental GT",
    details: "Drawing inspiration from the café racer culture of 1950s and 60s, the new Continental GT 650 Twin recaptures the spirit of our Continental GT 250. A design icon, the perfect blend of tradition & moder",
    price: "Rs. 2,01,000",
    imageUrl: "https://www.royalenfield.com/content/dam/royal-enfield/india/motorcycles/landing/continental-gt-new.jpg"
  },
  {
    id: 8,
    name: "Himalayan",
    details: "The Royal Enfield Himalayan is available in 6 colour options - Gravel Grey, Pine Green, Granite Black, Glacier Blue, Dune Brown, and Sleet Black. The Himalayan has an engine capacity of 411 cc. The ke",
    price: "Rs. 2,21,992",
    imageUrl: "https://www.royalenfield.com/content/dam/royal-enfield/india/motorcycles/landing/royal-enfield-himalayan-motorcycles.jpg"
  },
  {
    id: 9,
    name: "Bullet",
    details: "What started in 1932 continues to deliver pure motorcycling experiences across generations of riders. Bullet, the quintessential Royal Enfield, is today the longest running motorcycle in history to be",
    price: "Rs. 1,65,715",
    imageUrl: "https://www.royalenfield.com/content/dam/royal-enfield/india/motorcycles/landing/bullet-350-landing.jpg"
  },
]

const Bike = (props) => {

    const [bikes, setBikes] = useState([Bikes]);

    const styles = {
        backgroundImage: `url(${props.imageUrl})`, 
        height: "380px",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    }
    return (
        <article className="bike">
            <div style={styles}>
              {/* <button className='remove'>X</button> */}
            </div>
            <div className="details"> 
              <div className="heading">
                <h1>{props.name}</h1>
                <span>{props.price}</span>
              </div>
              <p>{props.details}</p>
            </div>
            
        </article>
    )
}

const BikeList = () => {
  return (
    <section className='bikelist'>
      {
        Bikes.map((ele,id)=>{
          return (
            <Bike key={id} name={ele.name} price={ele.price} details={ele.details} imageUrl={ele.imageUrl}/>
          )
        })
      }
    </section>
  )
}

export default BikeList
