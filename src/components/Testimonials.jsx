import React from 'react'

const reviews = [
  { name: 'Maria P.', text: 'Thanks to SpyDishTest I found the best ramen in town within minutes!', img: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg' },
  { name: 'Chef Antonio', text: 'The competitor pricing tool helped us adjust our menu &amp; increase margins by 12%.', img: 'https://images.pexels.com/photos/3771810/pexels-photo-3771810.jpeg' },
  { name: 'Liu’s Bistro', text: 'Weekly reports keep our team focused on what matters most.', img: 'https://images.pexels.com/photos/8959787/pexels-photo-8959787.jpeg' }
]

export default function Testimonials () {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="section-title">Testimonials</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map(r => (
            <div key={r.name} className="bg-brandBg p-6 rounded-lg shadow-md">
              <img src={r.img} alt={r.name} className="w-16 h-16 rounded-full mx-auto mb-4 object-cover" />
              <p className="italic mb-2">&ldquo;{r.text}&rdquo;</p>
              <span className="font-semibold text-brandAccent">{r.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
