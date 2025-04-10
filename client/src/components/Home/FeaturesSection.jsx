import {
  BookOpen,
  Calendar,
  Clock,
  CreditCard,
  Shield,
  Users,
} from "lucide-react";
import SectionHeader from "../section-header";
import { Card, CardContent } from "@/components/ui/card";

const featureCategories = [
  {
    title: "Student Management",
    description:
      "Comprehensive tools to manage student information and progress",
    icon: <Users className="h-10 w-10 text-primary" />,
    features: [
      "Complete student profiles with academic history",
      "Performance tracking and analytics",
      "Behavior and discipline management",
      "Custom fields for institution-specific data",
    ],
  },
  {
    title: "Attendance System",
    description: "Track and analyze attendance patterns effortlessly",
    icon: <Clock className="h-10 w-10 text-primary" />,
    features: [
      "Digital attendance marking with multiple options",
      "Automated absence notifications to parents",
      "Attendance reports and analytics",
      "Leave management and approval workflow",
    ],
  },
  {
    title: "Academic Tools",
    description: "Everything needed for curriculum and examination management",
    icon: <BookOpen className="h-10 w-10 text-primary" />,
    features: [
      "Curriculum planning and management",
      "Examination scheduling and grading",
      "Assignment creation and submission tracking",
      "Progress reports generation",
    ],
  },
  {
    title: "Financial Management",
    description: "Streamline fee collection and financial operations",
    icon: <CreditCard className="h-10 w-10 text-primary" />,
    features: [
      "Fee structure management and collection",
      "Payment tracking and receipts",
      "Expense management for institutions",
      "Financial reporting and analytics",
    ],
  },
  {
    title: "Scheduling",
    description: "Organize timetables and events with ease",
    icon: <Calendar className="h-10 w-10 text-primary" />,
    features: [
      "Class timetable generation and management",
      "Teacher scheduling and substitution handling",
      "Event calendar for school activities",
      "Resource booking for classrooms and equipment",
    ],
  },
  {
    title: "Security & Compliance",
    description: "Ensure data protection and regulatory compliance",
    icon: <Shield className="h-10 w-10 text-primary" />,
    features: [
      "Role-based access control",
      "Data encryption and protection",
      "Compliance with education regulations",
      "Regular backups and disaster recovery",
    ],
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 border-y">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-12 sm:mb-16">
          <SectionHeader
            logo="✨"
            title="Powerful Features"
            heading="Everything You Need to Run Your School Efficiently"
            description="Our comprehensive school management system provides all the tools you need to streamline administration, enhance communication, and improve educational outcomes."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featureCategories.map((category) => (
            <Card
              key={category.title}
              className="overflow-hidden border-muted-foreground/20"
            >
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="rounded-lg bg-primary/10 p-2">
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">
                        {category.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {category.description}
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-2 pl-4">
                    {category.features.map((feature) => (
                      <li
                        key={feature}
                        className="text-sm text-muted-foreground flex items-start"
                      >
                        <span className="mr-2 text-primary">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">
            Our platform is constantly evolving with new features and
            improvements based on feedback from educational institutions like
            yours.
          </p>
          <div className="inline-flex gap-4">
            <a
              href="#pricing"
              className="text-primary font-medium hover:underline"
            >
              View pricing →
            </a>
            <a
              href="/contact-us"
              className="text-primary font-medium hover:underline"
            >
              Request a demo →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
