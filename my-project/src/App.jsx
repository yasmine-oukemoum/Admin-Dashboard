import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import NumberCounter from './components/NumberCounter/NumberCounter'
import Classes from './components/Classes/Classes'
import Instructor from './components/Instructor/Instructor'
import Blog from './components/Blog/Blog'
import Question from './components/Question/Question'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <main className='overflow-x-hidden bg-white text-dark'>
        <Navbar />
        <Hero />
        <NumberCounter />
        <Classes/>
        <Instructor/>
        <Blog />
        <Question />
        <Footer />
    </main>
  )
}

export default App
