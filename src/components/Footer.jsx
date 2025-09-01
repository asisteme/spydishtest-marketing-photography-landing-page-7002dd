import React from 'react'

export default function Footer () {
  return (
    <footer className="bg-brandAccent text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-heading text-xl mb-3">SpyDishTest</h3>
          <p>An intelligent bridge between diners and restaurants.</p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms of Service</a></li>
            <li><a href="mailto:dasdas@gmail.com" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        <div id="subscribe">
          <h4 className="font-semibold mb-3">Stay Updated</h4>
          <form action="https://formspree.io/f/xyyroqly" method="POST" className="flex flex-col space-y-3">
            <input type="email" name="email" required placeholder="Email address" className="px-4 py-2 rounded text-slate-800" />
            <button type="submit" className="btn-primary text-center">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="text-center mt-8 text-sm">© {new Date().getFullYear()} SpyDishTest. All rights reserved.</div>
    </footer>
  )
}
