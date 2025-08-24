"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { MessageCircle, User, Calendar, ArrowLeft } from "lucide-react"
import Link from "next/link"

// Sample blog data - in a real app, this would come from a CMS or API
const blogPosts = {
  "network-wormholes-colonies": {
    title: "Network of wormholes colonies extraordinary claims require.",
    categories: ["MARKETING", "DESIGN"],
    author: "Ui-ThemeZ",
    publishedDate: "August 6, 2021",
    comments: 2,
    content: `
      <p>Extraordinary claims require extraordinary evidence. The cosmos is within us; we are made of star-stuff. We are a way for the cosmos to know itself. Descended from astronomers something incredible is waiting to be known.</p>
      
      <p>Network of wormholes colonies extraordinary claims require extraordinary evidence. The cosmos is within us; we are made of star-stuff. We are a way for the cosmos to know itself.</p>
      
      <p>Descended from astronomers something incredible is waiting to be known network of wormholes colonies extraordinary claims require extraordinary evidence. The cosmos is within us; we are made of star-stuff.</p>
    `,
  },
}

export default function BlogDetailPage() {
  const params = useParams()
  const slug = params.slug as string
  const [isVisible, setIsVisible] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  const post = blogPosts[slug as keyof typeof blogPosts]

  useEffect(() => {
    // Trigger animations on mount
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100)

    // Handle scroll animations
    const handleScroll = () => {
      const elements = document.querySelectorAll(".scroll-animate")
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top
        const elementVisible = 150

        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add("animate-in")
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Check on initial load

    return () => {
      clearTimeout(timer)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  if (!post) {
    return (
      <div className="min-h-screen bg-charcoal-gray">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-white mb-4">Blog Post Not Found</h1>
            <Link href="/blog" className="text-flame-orange hover:underline">
              ← Back to Blog
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-charcoal-gray py-20 px-4 sm:px-6 lg:px-8 pt-50">
        <div className="max-w-4xl mx-auto">
          {/* Back to Blog Link */}
          <div
            className={`mb-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <Link
              href="/blog"
              className="inline-flex items-center text-gray-400 hover:text-flame-orange transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
          </div>

          {/* Categories */}
          <div
            className={`mb-6 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-flame-orange rounded-full"></div>
              <span className="text-gray-300 text-sm font-medium">{post.categories.join(" , ")}</span>
            </div>
          </div>

          {/* Title */}
          <h1
            className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            {post.title}
          </h1>

          {/* Author Info */}
          {/* <div
            className={`flex items-center justify-between transition-all duration-1000 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-flame-orange rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-white font-medium">Author</div>
                  <div className="text-gray-300 text-sm">{post.author}</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Calendar className="w-5 h-5 text-gray-400" />
                <div>
                  <div className="text-white font-medium">Published</div>
                  <div className="text-gray-300 text-sm">{post.publishedDate}</div>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-2 text-gray-300">
              <MessageCircle className="w-5 h-5" />
              <span className="text-sm">{post.comments.toString().padStart(2, "0")} Comments</span>
            </div>
          </div> */}
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-4xl mx-auto">
          <div className="scroll-animate opacity-0 translate-y-8 transition-all duration-1000 mb-16">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <img
                  src="https://uithemez.com/i/geekfolio/dark/assets/imgs/blog/b2.jpg"
                  alt="Professional workspace"
                  className="w-full h-[300px] object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <img
                  src="https://uithemez.com/i/geekfolio/dark/assets/imgs/blog/b3.jpg"
                  alt="Team collaboration"
                  className="w-full h-[300px] object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Apple currently sells only one MacBook Air size.
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  A new report said earlier this week that Apple is working on a brand new laptop. Apple plans to
                  release a 15-inch MacBook Air in 2023, a first for the Air series. A trusted Apple insider with a
                  proven track record confirmed that Apple is working on the larger MacBook Air.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ordered & Unordered Lists.</h3>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-flame-orange rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Yet this above sewed flirted opened ouch
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-flame-orange rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Goldfinch realistic sporadic ingenuous
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-flame-orange rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Abominable this abidin far successfully then like piquan
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ordered & Unordered Lists.</h3>
                <ol className="space-y-2 text-gray-700 mb-6">
                  <li className="flex items-start">
                    <span className="text-flame-orange font-bold mr-3 flex-shrink-0">01 -</span>
                    Yet this above sewed flirted opened ouch
                  </li>
                  <li className="flex items-start">
                    <span className="text-flame-orange font-bold mr-3 flex-shrink-0">02 -</span>
                    Goldfinch realistic sporadic ingenuous
                  </li>
                  <li className="flex items-start">
                    <span className="text-flame-orange font-bold mr-3 flex-shrink-0">03 -</span>
                    Abominable this abidin far successfully then like piquan
                  </li>
                </ol>
              </div>

              <p className="text-gray-700 text-lg leading-relaxed">
                However, Apple might not include it in the Air series when it launches it. As for the notebook's release
                date, the 15-inch MacBook isn't coming soon. It'll get a late 2023 release at best, according to the new
                claims.
              </p>
            </div>
          </div>

          <div className="scroll-animate opacity-0 translate-y-8 transition-all duration-1000 mb-16">
            <div className="space-y-8">
              <div className="relative">
                <span className="float-left text-8xl font-bold text-lime-400 leading-none mr-4 mt-2">A</span>
                <p className="text-gray-700 text-lg leading-relaxed">
                  new report said earlier this week that Apple is working on a brand new laptop. A trusted Apple insider
                  with a proven track record confirmed that Apple is working on the larger MacBook Air.
                </p>
              </div>

              <p className="text-gray-700 text-lg leading-relaxed clear-left">
                new report said earlier this week that Apple is working on a brand new laptop. Apple plans to release a
                15-inch MacBook Air in 2023, a first for the Air series. A trusted Apple insider with a proven track
                record confirmed that Apple is working on the larger MacBook Air. However, Apple might not include it in
                the Air series when it launches it. As for the notebook's release date, the 15-inch MacBook isn't coming
                soon. It'll get a late 2023 release at best, according to the new claims.
              </p>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">What sizes do MacBook Airs come in?</h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Apple currently sells only one MacBook Air size. The laptop comes in a 13-inch version that matches
                  the pre-2021 13-inch MacBook Pro size. Previously, Apple sold an 11-inch MacBook Air, but the company
                  discontinued that model in 2017.
                </p>
              </div>

              {/* Quote Section */}
              <div className="border border-gray-300 rounded-lg p-8 my-12 relative">
                <div className="text-6xl text-gray-300 absolute top-4 left-6">"</div>
                <blockquote className="text-xl text-gray-800 font-medium leading-relaxed pl-12">
                  Increase your site traffic and gain new customers with a beautiful and functional blog.
                </blockquote>
                <div className="mt-6 pl-12">
                  <cite className="text-lime-400 font-semibold">- UI-THEMEZ UNIVERSE</cite>
                </div>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <article className="scroll-animate opacity-0 translate-y-8 transition-all duration-1000">
            <div className="prose prose-lg max-w-none">
              <div
                className="text-gray-700 leading-relaxed space-y-6"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>

            {/* Tags */}
            {/* <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex flex-wrap gap-2">
                {post.categories.map((category, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-flame-orange hover:text-white transition-colors cursor-pointer"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div> */}

            {/* Author Bio */}
            {/* <div className="mt-12 p-6 bg-gray-50 rounded-2xl">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-flame-orange rounded-full flex items-center justify-center flex-shrink-0">
                  <User className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{post.author}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    A passionate writer and designer with expertise in creating compelling content that engages
                    audiences and drives results. Specializing in marketing strategies and design principles.
                  </p>
                </div>
              </div>
            </div> */}
          </article>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        .scroll-animate.animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        
        .prose p {
          margin-bottom: 1.5rem;
          font-size: 1.125rem;
          line-height: 1.8;
        }
      `}</style>
    </div>
  )
}
