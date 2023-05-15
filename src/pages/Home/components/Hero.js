import {Link} from 'react-router-dom'
import heroBanner from '../../../assets/images/new-back2.png'
const Hero = () => {
  return (
   <section className="flex flex-col lg:flex-row dark:text-slate-100 items-center w-full ">
        <div className="text my-10">
            <h1 className="text-5xl font-bold">The ultimate eBook store</h1>
            <p className='text-2xl px-1 my-7 dark:text-slate-300'>codebook is the world's most popular and authorative source for computer science ebooks. Find ratings and access to the newest book digitally</p>
            <Link to="/products" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Explore eBooks</Link>
        </div>
        <div className='visual my-5 lg:max-w-xl'>
            <img className='rounded max-h-96 lg:max-h-fit' src={heroBanner} alt='hero'/>
        </div>
   </section>
  )
}

export default Hero
