import React from 'react'

export default function Hero () {
  return (
    <header className="bg-[url('https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg')] bg-cover bg-center">
      <div className="backdrop-brightness-75">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <img src="https://storage.googleapis.com/tapthetable/assets/1406217/inbox/1000860753445699232/logo_spydish.png" alt="SpyDishTest logo" className="mx-auto w-24 h-24 mb-4" />
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white">SpyDishTest</h1>
          <p className="mt-6 text-lg md:text-2xl text-slate-200 max-w-2xl mx-auto">
            An innovative WhatsApp bot connecting diners with restaurants while unlocking data-driven growth. 
          </p>
          <a href="https://wa.me/1234567890" className="btn-primary mt-8">Start Now on WhatsApp</a>
        </div>
      </div>
    </header>
  )
}
