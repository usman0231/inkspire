import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Banner Section */}
      <section
        className="relative h-[500px] bg-cover bg-center bg-no-repeat flex items-center"
        style={{
          backgroundImage: `url('https://globaldesignsagency.com/assets/images/services/Contact.png')`,
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Design Ideas Brewing?</h1>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Let's <span className="bg-flame-orange px-4 py-[0px] rounded-lg">Connect</span>
            </h2>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Form */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Connect for Quality Designs</h2>
              <p className="text-gray-600 mb-8">Transform Your Vision into Reality - Get in Touch with Us Now!</p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-4 bg-gray-100 border-0 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-flame-orange"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full px-4 py-4 bg-gray-100 border-0 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-flame-orange"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full px-4 py-4 bg-gray-100 border-0 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-flame-orange"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Subject"
                      className="w-full px-4 py-4 bg-gray-100 border-0 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-flame-orange"
                    />
                  </div>
                </div>

                <div>
                  <textarea
                    placeholder="Write Message"
                    rows={6}
                    className="w-full px-4 py-4 bg-gray-100 border-0 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-flame-orange resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-flame-orange text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-600 transition-colors duration-300"
                >
                  Submit Comment
                </button>
              </form>
            </div>

            {/* Right Side - Image */}
            <div className="relative">
              <div className="relative z-10">
                <img
                  src="https://globaldesignsagency.com/assets/images/contact-girl.png"
                  alt="Woman working on laptop"
                  className="w-full h-auto"
                />
              </div>
              {/* Decorative background elements */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-flame-orange/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-yellow-400/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
