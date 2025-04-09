import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SectionHeader from "../section-header";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    quote:
      "This system has transformed how we manage our school. The administrative burden has been reduced by at least 60%, allowing our staff to focus more on what matters - educating our students.",
    author: "Dr. Priya Sharma",
    position: "Principal",
    school: "Delhi Public School",
    avatar: "/placeholder.svg?height=80&width=80",
    rating: 5,
  },
  {
    quote:
      "The parent-teacher communication platform has significantly improved our engagement with parents. We've seen attendance at parent-teacher meetings increase by 45% since implementation.",
    author: "Rajesh Kumar",
    position: "Vice Principal",
    school: "St. Mary's Academy",
    avatar: "/placeholder.svg?height=80&width=80",
    rating: 5,
  },
  {
    quote:
      "As a teacher, the attendance and grading systems have saved me countless hours. What used to take me 2 hours daily now takes just 15 minutes. The interface is intuitive and user-friendly.",
    author: "Anita Desai",
    position: "Senior Teacher",
    school: "Modern High School",
    avatar: "/placeholder.svg?height=80&width=80",
    rating: 5,
  },
  {
    quote:
      "The financial management module has streamlined our fee collection process completely. We've reduced payment delays by 70% and our accounting team is thrilled with the detailed reporting.",
    author: "Vikram Mehta",
    position: "Administrative Director",
    school: "International School of Excellence",
    avatar: "/placeholder.svg?height=80&width=80",
    rating: 5,
  },
  {
    quote:
      "Implementing this system was the best decision we made last year. The customer support team has been exceptional, always available to help us maximize the platform's potential.",
    author: "Sunita Patel",
    position: "IT Coordinator",
    school: "Greenfield Academy",
    avatar: "/placeholder.svg?height=80&width=80",
    rating: 5,
  },
  {
    quote:
      "Parents love the real-time updates on their children's progress. The mobile app makes it convenient for working parents to stay involved in their child's education despite busy schedules.",
    author: "Arjun Singh",
    position: "Parent Coordinator",
    school: "City Montessori School",
    avatar: "/placeholder.svg?height=80&width=80",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + 1) % Math.ceil(testimonials.length / 2)
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + Math.ceil(testimonials.length / 2)) %
        Math.ceil(testimonials.length / 2)
    );
  };

  // Calculate visible testimonials based on current index
  const visibleTestimonials = testimonials.slice(
    currentIndex * 2,
    currentIndex * 2 + 2
  );
  const totalPages = Math.ceil(testimonials.length / 2);

  return (
    <section className="py-12 sm:py-16 md:py-20 border-y">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <SectionHeader
            logo="💬"
            title="Testimonials"
            heading="What Our Users Say"
            description="Discover how schools across India are transforming their administration and enhancing educational outcomes with our platform."
          />
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {visibleTestimonials.map((testimonial, index) => (
              <Card key={index} className="border-muted-foreground/20 h-full">
                <CardContent className="p-6 sm:p-8 flex flex-col h-full">
                  <div className="mb-4 text-primary">
                    <Quote className="h-8 w-8 rotate-180" />
                  </div>
                  <p className="text-muted-foreground mb-6 flex-grow">
                    {testimonial.quote}
                  </p>
                  <div className="flex items-center mt-auto pt-4 border-t">
                    <Avatar className="h-12 w-12 mr-4">
                      <AvatarImage src={testimonial.avatar} />
                      <AvatarFallback>
                        {testimonial.author
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold">{testimonial.author}</h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.position}, {testimonial.school}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center items-center mt-8 gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              disabled={currentIndex === 0}
              className="h-9 w-9"
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Previous testimonials</span>
            </Button>
            <div className="text-sm text-muted-foreground px-2">
              {currentIndex + 1} / {totalPages}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              disabled={currentIndex === totalPages - 1}
              className="h-9 w-9"
            >
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Next testimonials</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
