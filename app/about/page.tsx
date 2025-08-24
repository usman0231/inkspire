"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Layers, FileText, ImageIcon, Gift } from "lucide-react"
import Progress from "@/components/progress"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-warm-white">
      <Header />

      {/* Hero Banner Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url(https://globaldesignsagency.com/assets/images/services/About.png)" }}
        />
        {/* Orange gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-flame-orange/80 to-flame-orange/60"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-6xl font-bold text-warm-white mb-6">
              We're Passionate About <span className="text-warm-white">Design</span>
            </h1>
            <p className="text-lg lg:text-xl text-warm-white/90 leading-relaxed text-white">
              With an unwavering passion for creativity and innovation, we go above and beyond to provide stellar design
              solutions. We are committed to each client's specific needs. From concept to execution, we put our heart
              and soul into every project, ensuring that our clients get nothing but the best.
            </p>
          </div>
        </div>
      </section>

      {/* Designing Beyond Boundaries Section */}
      <section className="py-20 bg-warm-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-ink-black">Designing Beyond Boundaries</h2>
              <p className="text-lg text-charcoal-gray leading-relaxed">
                At Global Design Agency, we believe in pushing creative boundaries. We are a passionate team of
                designers, developers, and marketers dedicated to bringing your vision to life. With a focus on
                innovation and excellence, we strive to exceed expectations and deliver tailored solutions that resonate
                with your audience. Whether you're a startup looking to establish your brand or an established business
                seeking a fresh perspective, we're here to help you navigate the ever-evolving digital landscape. Let's
                collaborate and create something extraordinary together!
              </p>
            </div>

            <div className="relative flex justify-center lg:justify-end">
              <img
                src="https://globaldesignsagency.com/assets/images/about-first.webp"
                alt="Professional designer working"
                className="w-full max-w-md h-auto object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Discover Your Design Potential Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative flex justify-center lg:justify-start order-2 lg:order-1">
              <img
                src="https://globaldesignsagency.com/assets/images/about-second.webp"
                alt="Creative designer at work"
                className="w-full max-w-md h-auto object-cover rounded-2xl shadow-lg"
              />
            </div>

            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-3xl lg:text-4xl font-bold text-ink-black">Discover Your Design Potential</h2>
              <p className="text-lg text-charcoal-gray leading-relaxed">
                At Global Design Agency, our mission is to revolutionize digital experiences through inspired design
                solutions. We empower clients by fostering creativity, forging connections, and surpassing expectations,
                ensuring they stand out in a competitive landscape. Our collaborative approach combines strategic
                thinking, innovative design, and seamless execution, creating impactful brand experiences that drive
                inspiring creativity, and driving digital transformation. At Global Design Agency, we see a future where
                our exceptional design experiences empower businesses and individuals to thrive and leave a lasting
                impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Progress Section */}
      <Progress/>

      {/* Meet Our Dynamic Design Crew Section */}
      <section className="py-20 bg-warm-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-ink-black">Meet Our Dynamic Design Crew</h2>
              <p className="text-lg text-charcoal-gray leading-relaxed">
                Step into the world of Global Design Agency, where creativity flourishes and innovation thrives. Meet
                the family behind the brand – a close-knit team of passionate creatives and tech enthusiasts united by
                our mission to redefine digital experiences. From seasoned designers to brilliant developers and savvy
                marketers, we bring diverse perspectives to every project, ensuring a fresh and dynamic approach.
                Together, we collaborate seamlessly to bring your vision to life, crafting designs that not only
                captivate and inspire. Get to know the brilliant minds driving our design magic and join us on a journey
                of creativity, innovation, and boundless possibilities.
              </p>
            </div>

            <div className="relative flex justify-center lg:justify-end">
              <img
                src="https://globaldesignsagency.com/assets/images/about-third.webp"
                alt="Professional team member"
                className="w-full max-w-md h-auto object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
