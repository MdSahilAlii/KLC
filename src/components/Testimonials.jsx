'use client';
import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Maryam',
    role: 'CBSE Class 12',
    image: 'https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png',
    text:
      '“At KLC, my teachers are very kind and always ready to help. They teach us not only to study hard but also to be a good person. I feel proud when I do well in my exams.”',
  },
  {
    name: 'Zaid',
    role: 'JEE 2026',
    image: 'https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-2.png',
    text:
      '“At KLC, I felt supported every step of the way. The focus on both academics and personal growth gave me the confidence to excel in my exams and beyond. It\'s not just a coaching centre; it\'s a life changing experience.”',
  },
  {
    name: 'Saman Raza',
    role: 'NEET 2026',
    image: 'https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-female.png',
    text:
      '“At KLC, I felt supported every step of the way. The focus on both academics and personal growth gave me the confidence to excel in my exams and beyond. It\'s not just a coaching centre; it\'s a life changing experience.”',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.5 },
  }),
};

const Testimonials = () => {
  return (
    <section className="py-12 bg-gray-150 sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col items-center text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.5 }}

        >
          <p className="text-lg font-medium text-gray-600 font-pj">
            2,157 people have said how good we are
          </p>
          <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">
            Our happy Students say about us
          </h2>
        </motion.div>

        <motion.div
          className="mt-8 text-center md:mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          viewport={{ once: false, amount: 0.5 }}

        >
          <a
            href="/testimonials"
            className="pb-2 text-base font-bold leading-7 text-gray-900 transition-all duration-200 border-b-2 border-gray-900 hover:border-gray-600 font-pj hover:text-gray-600"
          >
            Check all 2,157 reviews
          </a>
        </motion.div>

        <div className="relative mt-10 md:mt-24">
          {/* Gradient Blur Background */}
          <motion.div
            className="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6 z-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.3 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.5 }}

          >
            <div
              className="w-full h-full max-w-5xl mx-auto rounded-3xl blur-lg filter"
              style={{
                background:
                  'linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)',
              }}
            />
          </motion.div>

          {/* Testimonials */}
          <motion.div
            className="relative z-10 grid max-w-lg grid-cols-1 gap-6 mx-auto md:max-w-none lg:gap-10 md:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}

          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="flex flex-col overflow-hidden shadow-xl"
                custom={index}
                variants={cardVariants}
              >
                <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
                  <div className="flex-1">
                    {/* Stars */}
                    <div className="flex items-center">
                      {Array(5)
                        .fill()
                        .map((_, i) => (
                          <svg
                            key={i}
                            className="w-5 h-5 text-[#FDB241]"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                    </div>

                    <blockquote className="flex-1 mt-8">
                      <p className="text-lg leading-relaxed text-gray-900 font-pj">{testimonial.text}</p>
                    </blockquote>
                  </div>

                  {/* Author */}
                  <div className="flex items-center mt-8">
                    <img
                      className="flex-shrink-0 object-cover rounded-full w-11 h-11"
                      src={testimonial.image}
                      alt={testimonial.name}
                    />
                    <div className="ml-4 text-left">
                      <p className="text-base font-bold text-gray-900 font-pj">{testimonial.name}</p>
                      <p className="mt-0.5 text-sm text-gray-600 font-pj">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
