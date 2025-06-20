import React from 'react';

const teachersData = [
    {
        name: "Dr. Ananya Sharma",
        subject: "Physics Expert",
        experience: "IIT Delhi | 12+ years experience | 5000+ students",
        image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80"
    },
    {
        name: "Prof. Rajesh Kumar",
        subject: "Chemistry Expert",
        experience: "IIT Bombay | 15+ years experience | 8000+ students",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80"
    },
    {
        name: "Dr. Priya Singh",
        subject: "Mathematics Expert",
        experience: "IIT Kanpur | 10+ years experience | 6000+ students",
        image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80"
    },
    {
        name: "Dr. Amit Patel",
        subject: "Biology Expert",
        experience: "AIIMS Delhi | 8+ years experience | 4000+ students",
        image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
    }
];

const Teachers = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-4">Learn from the Best Teachers</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {teachersData.map((teacher, index) => (
                        <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                            <img src={teacher.image} alt={teacher.name} className="w-full h-64 object-cover" />
                            <div className="p-6 text-center">
                                <h3 className="text-xl font-bold mb-1">{teacher.name}</h3>
                                <p className="text-blue-600 font-medium mb-2">{teacher.subject}</p>
                                <p className="text-gray-600 text-sm">{teacher.experience}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Teachers;
