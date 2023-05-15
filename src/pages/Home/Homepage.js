import useTitle from "../../hooks/useTitle"
import { Faq } from "./components/Faq"
import { FeaturedProduct } from "./components/FeaturedProduct"
import Hero from "./components/Hero"
import { Testimonials } from "./components/Testmonial"


export const Homepage = () => {
  useTitle('Access latest computer science ebook')
  return (
    <main>
    <Hero/>
    <FeaturedProduct/>
    <Faq/>
    <Testimonials/>
    </main>
  )
}

