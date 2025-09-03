import React from 'react'

function contactform() {
  return (
    <>
        <div className="bg-[var(--light-bg)] from-warm-orange via-warm-orange to-warm-orange/80 rounded-2xl p-8 shadow-2xl">
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-white">We will always provide the best service.</h3>
              </div>

              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-white/90 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-white placeholder-gray-500"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 bg-white/90 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-white placeholder-gray-500"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 bg-white/90 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-white placeholder-gray-500"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="I am looking for..."
                    rows={4}
                    className="w-full px-4 py-3 bg-white/90 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-white resize-none placeholder-gray-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-warm-orange text-white py-3 rounded-lg font-bold text-lg hover:bg-warm-orange/90 transition-colors border-2 border-warm-orange hover:border-warm-orange/90"
                >
                  SUBMIT
                </button>
              </form>
            </div>
    </>
  )
}

export default contactform