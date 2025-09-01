import React from 'react'

export default function Restaurants () {
  const features = [
    {
      title: 'Competitor Pricing Intelligence',
      desc: 'Real-time price comparison with local competitors.'
    },
    {
      title: 'Diner Interest Heatmaps',
      desc: 'Visualize peak demand by time &amp; location.'
    },
    {
      title: 'AI-Powered Campaigns',
      desc: 'Smart notifications &amp; pricing suggestions.'
    },
    {
      title: 'Weekly Executive Reports',
      desc: 'Key trends delivered straight to your inbox.'
    }
  ]

  return (
    <section className="py-20 px-6 bg-brandBg">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title text-center">For Restaurants</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="order-2 md:order-1">
            {features.map(f => (
              <div key={f.title} className="mb-6">
                <h3 className="text-xl font-semibold text-brandAccent">{f.title}</h3>
                <p className="text-slate-600">{f.desc}</p>
              </div>
            ))}
            <a href="#subscribe" className="btn-primary mt-4">Subscribe to Pro Plan</a>
          </div>
          <img src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg" alt="Analytics dashboard" className="rounded-xl shadow-lg order-1 md:order-2" />
        </div>
      </div>
    </section>
  )
}
