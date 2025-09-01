import React from 'react'

export default function Diners () {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title text-center">For Diners</h2>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <ul className="space-y-4">
            <li><strong>Explore</strong> restaurants based on your taste and location.</li>
            <li><strong>Discover</strong> featured dishes and trending menus.</li>
            <li><strong>Access</strong> authentic reviews &amp; rankings to dine with confidence.</li>
          </ul>
          <img src="https://images.pexels.com/photos/3182835/pexels-photo-3182835.jpeg" alt="Chat demo" className="rounded-xl shadow-lg" />
        </div>
      </div>
    </section>
  )
}
