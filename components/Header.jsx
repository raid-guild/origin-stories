import { Fragment } from 'react'
import Navbar from './Navbar'
import Image from 'next/image'
import mapImage from '../public/images/map.png'

const Header = () => {
  return (
    <Fragment>
						{/* <div className='pt-10 pl-28 pr-72 h-96'> */}
                  <Navbar />
                <div className="w-full h-96 relative">
                  <h1 className='font-display text-5xl w-587'>
                      EVERY RAIDER COMES FROM SOMEWHERE
                  </h1>
                  <div className="bg-gradient-to-b from-dark via-primary w-full h-full absolute" />
                  <Image layout='fill' src={mapImage} className="object-cover object-center w-full bg-top" alt="background-map-image" />
                </div>
								<p className='pt-20 leading-7'>Raiders come from all over the globe, with different backgrounds and perspectives. What were they doing before joining the Guild? What has their experience been like so far in Web3? What is life really like working in DAO? The answers are in our stories.</p>
						{/* </div> */}
    </Fragment>
  )
}

export default Header