import React from 'react';

const testimonialsData = [
    {
        name: "Rahul Sharma",
        review: "Kalam Learning Center's JEE course helped me secure AIR 45 in JEE Advanced. The teachers are phenomenal and the doubt-solving sessions were extremely helpful.",
        rating: 5,
        image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
        name: "Priya Gupta",
        review: "The NEET course at Kalam Learning Center was a game-changer for me. I scored 680/720 in NEET and got into AIIMS Delhi.",
        rating: 5,
        image: "https://randomuser.me/api/portraits/women/44.jpg"
    }
];

const Testimonials = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">What Our Students Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {testimonialsData.map((testimonial, index) => (
                        <div key={index} className="p-8 rounded-xl shadow-sm bg-white">
                            <div className="flex items-center mb-4">
                                <div className="flex mr-2">
                                    {[...Array(5)].map((_, i) => (
                                        <i key={i} className={`fas fa-star ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}></i>
                                    ))}
                                </div>
                            </div>
                            <p className="text-gray-700 mb-6">"{testimonial.review}"</p>
                            <div className="flex items-center">
                                <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                                <div>
                                    <h4 className="font-bold">{testimonial.name}</h4>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
