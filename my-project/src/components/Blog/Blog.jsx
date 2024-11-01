import React from 'react'
import img1 from '../../assets/img/img1.jpg'
import img2 from '../../assets/img/img2.jpg'
import img3 from '../../assets/img/img3.jpg'

const Blog = () => {
  return (
    <section className='bg-light dark:bg-black overflow-hidden relative'>
      {/* Heading section */}
      <div>
        <h1 className='text-center space-y-4 p-6 font-cursive mx-auto mb-5 text-gray-500 text-3xl font-bold'>
          Latest Articles & Insights
        </h1>
      </div>

      {/* Blog posts grid */}
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
        {/* Blog Post 1 */}
        <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md">
          <img src={img1} alt="Blog post 1" className="w-full h-40 object-cover mb-4 rounded-md" />
          <h2 className="text-2xl font-bold mb-2">The Future of AI in Cybersecurity</h2>
          <p className="text-gray-500 text-sm mb-4">October 27, 2024</p>
          <p>Explore how AI is transforming the cybersecurity landscape and what it means for the future of digital defense.</p>
        </div>

        {/* Blog Post 2 */}
        <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md">
          <img src={img2} alt="Blog post 2" className="w-full h-40 object-cover mb-4 rounded-md" />
          <h2 className="text-2xl font-bold mb-2">Top 5 Skills Every AI Engineer Should Master</h2>
          <p className="text-gray-500 text-sm mb-4">October 18, 2024</p>
          <p>Discover the must-have skills to excel as an AI engineer and stay ahead in the rapidly evolving tech world.</p>
        </div>

        {/* Blog Post 3 */}
        <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md">
          <img src={img3} alt="Blog post 3" className="w-full h-40 object-cover mb-4 rounded-md" />
          <h2 className="text-2xl font-bold mb-2">AI-Powered Solutions for Cyber Threat Detection</h2>
          <p className="text-gray-500 text-sm mb-4">October 10, 2024</p>
          <p>Learn how AI tools are being used to detect and neutralize cyber threats before they can cause damage.</p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center p-6">
        <a href="/blog" className="bg-primary text-white py-2 px-6 rounded-full text-lg font-bold hover:bg-primary-dark">
          Explore More Articles
        </a>
      </div>
    </section>
  )
}

export default Blog
