"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"
import Progress from "@/components/progress"

export default function HomePage() {
  const [activeFilter, setActiveFilter] = useState("All")
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const services = [
    {
      icon: "/icons/1.png",
      title: "Branding",
      description:
        "Discover the core of your brand with Inkspirefolio, a creative design agency crafting bold, strategic identities that stand out. From Toronto to Washington D.C., we transform ideas into impactful brand experiences that connect and inspire. Whether you're starting fresh or rebranding, we bring clarity, creativity, and purpose to every step of the journey.",
    },
    {
      icon: "/icons/2.png",
      title: "Logo Design",
      description:
        "At Inkspirefolio, we design logos that do more than look good — they speak your brand’s truth. With a team of expert creatives, our agency blends strategy and artistry to craft bold, timeless identities. From Toronto to DC and beyond, we help brands leave lasting impressions through purposeful, professional design.",
    },
    {
      icon: "/icons/3.png",
      title: "Social Media",
      description:
        "At Inkspirefolio, we turn scrolls into connections and clicks into conversations. Our expert team — from Toronto to DC — crafts compelling social media content that builds trust, sparks engagement, and grows authentic communities. With strategy, creativity, and a deep understanding of digital culture, we help your brand not just show up online — but stand out.",
    },
    {
      icon: "/icons/4.png",
      title: "Web Design And Development",
      description:
        "At Inkspirefolio, we believe your website should do more than exist — it should perform. Our design agency team, from Toronto to DC, specializes in crafting immersive, responsive, and conversion-driven web experiences. Blending aesthetic excellence with seamless functionality, we design and develop digital spaces that captivate visitors and elevate your brand.",
    },
    {
      icon: "/icons/5.png",
      title: "Animation",
      description:
        "At InkspireFolio, we bring ideas to life through dynamic animations that captivate, explain, and engage. Our creative animation team blends storytelling with motion design to transform complex concepts into clear and visually stunning experiences. From explainer videos and social media content to brand campaigns and product showcases, we craft animations that not only grab attention but also resonate with your audience and elevate your brand presence.",
    },
    {
      icon: "/icons/6.png",
      title: "Video Editing",
      description:
        "At Inkspirefolio, we turn raw footage into compelling visual stories that connect, inspire, and convert. Our expert video editing team blends cinematic precision with brand storytelling to craft content that leaves a lasting impact. Whether it's for social media, brand campaigns, or promotional materials, we shape every frame to reflect your vision and elevate your message.",
    },
    {
      icon: "/icons/7.png",
      title: "Book Cover Design",
      description:
        "At InkspireFolios, we design book covers that do more than just protect pages — they tell a story at first glance. Our team combines striking visuals, typography, and layout design to create covers that capture the essence of your work and spark curiosity in readers. Whether it’s fiction, non-fiction, or professional publications, we craft designs that reflect your voice, connect with your audience, and give your book the unforgettable presence it deserves.",
    },
    {
      icon: "/icons/8.png",
      title: "Book Writing",
      description:
        "At InkspireFolios, we transform ideas into powerful words that inform, inspire, and connect. Our professional book writing services help authors, thought leaders, and businesses bring their stories and expertise to life with clarity and creativity. From concept development and structured outlines to polished manuscripts, we ensure every chapter reflects your voice and vision. Whether it’s a memoir, business guide, or creative fiction, we craft compelling narratives that leave a lasting impact on readers.",
    },
  ]

  const processSteps = [
    {
      icon: "https://cdn.lordicon.com/jectmwqf.json",
      title: "Design Brief",
      description:
        "Our design brief outlines your vision and project goals, ensuring a clear direction for our collaboration.",
    },
    {
      icon: "https://cdn.lordicon.com/hmpomorl.json",
      title: "Sketch",
      description: "In this step, we translate your vision into initial design sketches for further directions.",
    },
    {
      icon: "https://cdn.lordicon.com/ijsqrapz.json",
      title: "Revision",
      description: "In this step, we translate your vision into initial design sketches for further directions.",
    },
    {
      icon: "https://cdn.lordicon.com/kezeezyg.json",
      title: "Final Delivery",
      description: "After approval, we ensure delivery of polished designs, ready for implementation.",
    },
  ]

  const testimonials = [
    {
      text: "Finding this design website was a game-changer. Its user-friendly layout, inspiring portfolio, and responsive customer service make it my go-to resource. Highly recommended for anyone seeking top-notch design inspiration.",
      name: "Kellan Chambers",
      position: "Web Designer at IT based company",
      image: "/professional-headshot.png",
    },
    {
      text: "Penatibus etlectus quis sapien nibh fringilla varius elemenm blandit dui miestulum pretium cursusa augue praesent proin justo netus tar vestibulum taciti fringilla ultrices donec netus luctus mus sapien turpis varius libero lines",
      name: "Andrew Smith",
      position: "CEO at Company",
      image: "/placeholder.svg?height=48&width=48",
    },
    {
      text: "Penatibus etlectus quis sapien nibh fringilla varius elemenm blandit dui miestulum pretium cursusa augue praesent proin justo netus tar vestibulum taciti fringilla ultrices donec netus luctus mus sapien turpis varius libero lines",
      name: "Sarah Johnson",
      position: "Marketing Director",
      image: "/placeholder.svg?height=48&width=48",
    },
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const portfolioItems = [
    {
      title: "Brand Identity Project",
      category: "Branding",
      image: "/portfolio-branding-1.png",
      filterCategory: "all",
    },
    { title: "Corporate Logo Design", category: "Logo Design", image: "/portfolio-logo-1.png", filterCategory: "all" },
    {
      title: "Social Media Campaign",
      category: "Social Media",
      image: "/portfolio-social-1.png",
      filterCategory: "all",
    },
    { title: "E-commerce Website", category: "Web Design", image: "/portfolio-web-1.png", filterCategory: "all" },
    { title: "Promotional Video", category: "Animation Video", image: "/portfolio-video-1.png", filterCategory: "all" },
    { title: "Brand Package Design", category: "Branding", image: "/portfolio-branding-2.png", filterCategory: "all" },
    { title: "Modern Logo Creation", category: "Logo Design", image: "/portfolio-logo-2.png", filterCategory: "all" },
    { title: "Instagram Stories", category: "Social Media", image: "/portfolio-social-2.png", filterCategory: "all" },
    { title: "Corporate Website", category: "Web Development", image: "/portfolio-web-2.png", filterCategory: "all" },
    { title: "Motion Graphics", category: "Animation Video", image: "/portfolio-video-2.png", filterCategory: "all" },
    { title: "Brand Identity System", category: "Branding", image: "/portfolio-branding-3.png", filterCategory: "all" },
    { title: "Creative Logo Design", category: "Logo Design", image: "/portfolio-logo-3.png", filterCategory: "all" },

    // Branding specific items
    {
      title: "Brand Identity Project",
      category: "Branding",
      image: "/portfolio-branding-1.png",
      filterCategory: "branding",
    },
    {
      title: "Brand Package Design",
      category: "Branding",
      image: "/portfolio-branding-2.png",
      filterCategory: "branding",
    },
    {
      title: "Brand Identity System",
      category: "Branding",
      image: "/portfolio-branding-3.png",
      filterCategory: "branding",
    },

    // Logo Design specific items
    { title: "Corporate Logo Design", category: "Logo Design", image: "/portfolio-logo-1.png", filterCategory: "logo" },
    { title: "Modern Logo Creation", category: "Logo Design", image: "/portfolio-logo-2.png", filterCategory: "logo" },
    { title: "Creative Logo Design", category: "Logo Design", image: "/portfolio-logo-3.png", filterCategory: "logo" },

    // Social Media specific items
    {
      title: "Social Media Campaign",
      category: "Social Media",
      image: "/portfolio-social-1.png",
      filterCategory: "social",
    },
    {
      title: "Instagram Stories",
      category: "Social Media",
      image: "/portfolio-social-2.png",
      filterCategory: "social",
    },
    {
      title: "Facebook Cover Design",
      category: "Social Media",
      image: "/portfolio-social-3.png",
      filterCategory: "social",
    },

    // Web Design specific items
    { title: "E-commerce Website", category: "Web Design", image: "/portfolio-web-1.png", filterCategory: "web" },
    { title: "Corporate Website", category: "Web Development", image: "/portfolio-web-2.png", filterCategory: "web" },
    { title: "Business Website", category: "Web Design", image: "/portfolio-web-3.png", filterCategory: "web" },

    // Animation Video specific items
    {
      title: "Promotional Video",
      category: "Animation Video",
      image: "/portfolio-video-1.png",
      filterCategory: "animation",
    },
    {
      title: "Motion Graphics",
      category: "Animation Video",
      image: "/portfolio-video-2.png",
      filterCategory: "animation",
    },
    {
      title: "Animated Explainer",
      category: "Animation Video",
      image: "/portfolio-video-3.png",
      filterCategory: "animation",
    },
  ]

  const filterMap = {
    All: "all",
    Branding: "branding",
    "Logo Design": "logo",
    "Social Media": "social",
    "Web Design and Development": "web",
    "Animation Video": "animation",
  }

  const filteredItems = portfolioItems.filter((item) => {
    if (activeFilter === "All") return true
    return item.filterCategory === filterMap[activeFilter]
  })

  return (
    <div className="min-h-screen bg-[var(--charcoal-gray)]">
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-center bg-no-repeat flex flex-col items-center justify-center"
          style={{ backgroundImage: "url(/home_page/banner.jpg)", backgroundSize: "100% 100%"  }}
        >
          <h1 className="text-warm-white text-3xl md:text-6xl font-bold">Design a Digital Identity That Reflects You</h1>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-[var(--charcoal-gray)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-warm-white mb-4">
              One Destination. Infinite Creative Possibilities
            </h2>
          </div>

          {/* Updated grid layout and card styling */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group cursor-pointer transition-all duration-500 hover:shadow-xl border-0 bg-white hover:!bg-orange-500 rounded-3xl shadow-lg hover:shadow-2xl"
                onClick={() => {
                  if (service.title === "Logo Design") {
                    window.location.href = "/logo-design"
                  }
                }}
              >
                <CardContent className="p-8 text-center space-y-6">
                  {/* Service Icon */}
                  <div className="flex justify-center mb-6">
                    <img
                      src={service.icon || "/placeholder.svg"}
                      alt={service.title}
                      className="w-20 h-20 object-contain"
                    />
                  </div>

                  {/* Service Title */}
                  <h3 className="text-xl font-bold text-ink-black group-hover:!text-white transition-colors duration-500">
                    {service.title}
                  </h3>

                  {/* Service Description */}
                  <p className="text-sm leading-relaxed text-charcoal-gray group-hover:!text-white transition-colors duration-500">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Progress Section */}
      <Progress/>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-[var(--charcoal-gray)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-warm-white mb-4">Elevating Brands Through Design</h2>
            <p className="text-lg text-warm-white max-w-3xl mx-auto">
              Explore how our recent work combines creativity and strategy to deliver designs that stand out and connect.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {["All", "Branding", "Logo Design", "Social Media", "Web Design and Development", "Animation Video"].map(
              (filter, index) => (
                <button
                  key={index}
                  onClick={() => setActiveFilter(filter)}
                  className={`cursor-pointer px-6 py-3 rounded-full transition-all duration-300 font-medium ${
                    activeFilter === filter
                      ? "bg-flame-orange text-warm-white shadow-lg border-2 border-flame-orange"
                      : "bg-transparent text-flame-orange border-2 border-flame-orange hover:bg-flame-orange hover:text-warm-white"
                  } ${activeFilter === filter ? "text-shadow-glow" : "hover:text-shadow-glow"}`}
                  style={{
                    textShadow: activeFilter === filter ? "0 0 10px rgba(255, 255, 255, 0.5)" : undefined,
                  }}
                >
                  {filter}
                </button>
              ),
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.slice(0, 12).map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg bg-white shadow-md hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-sm text-white/80">{item.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section
        className="py-20 text-warm-white relative overflow-hidden"
        style={{
          backgroundImage: "url(https://globaldesignsagency.com/assets/images/testimonial-background.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Orange overlay to match the design */}
        <div className="absolute inset-0 bg-flame-orange/90"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">We'd love to hear your feedback!</h2>
          </div>

          <div className="max-w-4xl mx-auto relative">
            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-8 lg:-translate-x-16 z-20 w-12 h-12 flex items-center justify-center text-warm-white hover:text-warm-white/80 transition-colors"
            >
              <ChevronLeft size={32} />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-8 lg:translate-x-16 z-20 w-12 h-12 flex items-center justify-center text-warm-white hover:text-warm-white/80 transition-colors"
            >
              <ChevronRight size={32} />
            </button>

            <div className="relative overflow-hidden rounded-3xl">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-2">
                    {/* Testimonial Card */}
                    <div className="bg-warm-white rounded-3xl p-8 lg:p-12 text-ink-black relative shadow-2xl">
                      {/* Large opening quote */}
                      <div className="absolute top-8 left-8 text-6xl lg:text-8xl text-flame-orange/20 font-serif leading-none">
                        "
                      </div>

                      {/* Testimonial content */}
                      <div className="relative z-10 pt-8 lg:pt-12">
                        <p className="text-lg lg:text-xl leading-relaxed mb-8 lg:mb-12 px-4 lg:px-8">
                          {testimonial.text}
                        </p>

                        {/* Divider line */}
                        <div className="w-full h-px bg-flame-orange/30 mb-6"></div>

                        {/* Author info */}
                        <div className="flex items-center space-x-4 px-4 lg:px-8">
                          <img
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            className="w-16 h-16 rounded-full object-cover"
                          />
                          <div>
                            <h4 className="text-xl font-bold text-ink-black">{testimonial.name}</h4>
                            <p className="text-charcoal-gray">{testimonial.position}</p>
                          </div>
                        </div>
                      </div>

                      {/* Large closing quote */}
                      <div className="absolute bottom-8 right-8 text-6xl lg:text-8xl text-flame-orange/20 font-serif leading-none">
                        "
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-[var(--charcoal-gray)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-flame-orange">We'd love to hear your feedback!</h2>
              <p className="text-lg text-warm-white leading-relaxed">
                We listen, you <span className="text-flame-orange font-semibold">lead</span>. Ready to create? We are
                available at your service 24/7. Let's chat! Call us at:{" "}
                <span className="font-semibold">172-038-63784</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <Button className="bg-flame-orange hover:bg-flame-orange/90 text-warm-white font-semibold px-8 py-3 rounded-lg">
                  Let's Talk
                </Button>
                <div className="flex items-center gap-3 text-flame-orange">
                  <div className="w-8 h-8 bg-flame-orange rounded-full flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-ink-black">Call Us 24/7</div>
                    <div className="font-bold text-flame-orange">197-785-27685</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative flex justify-center lg:justify-end">
              <div className="relative">
                <img
                  src="https://globaldesignsagency.com/assets/images/girl.webp"
                  alt="Professional woman ready to help"
                  className="w-full max-w-md h-auto object-cover"
                  style={{
                    clipPath: "ellipse(45% 50% at 50% 50%)",
                    borderRadius: "50% 40% 60% 30%",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
