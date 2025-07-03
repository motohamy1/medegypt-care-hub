
import React from "react";
import { Link } from "react-router-dom";
import { Book, Calendar, Pill, Video, Hospital, Clock, Bell } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

const Index = () => {
  const features = [
    {
      icon: <Book className="h-12 w-12 text-purple-400" />,
      title: <h2 className="text-gradient">Lifestyle Modification Hub</h2>,
      description: "Personalized tips for nutrition, exercise, and stress management tailored for diabetes and hypertension",
      path: "/learn",
    },
    {
      icon: <Calendar className="h-12 w-12 text-purple-400" />,
      title: <h2 className="text-gradient">Book an Appointment</h2>,
      description: "Find and book appointments with qualified doctors in Egypt",
      path: "/doctors",
    },
    {
      icon: <Video className="h-12 w-12 text-purple-400" />,
      title: <h2 className="text-gradient">Educational Videos</h2>,
      description: "Easy-to-understand videos about diabetes and hypertension management",
      path: "/videos",
    },
    {
      icon: <Pill className="h-12 w-12 text-purple-400" />,
      title: <h2 className="text-gradient">Medications Guide</h2>,
      description: "Information about diabetes and hypertension medications available in Egypt",
      path: "/medications",
    },
    {
      icon: <Hospital className="h-12 w-12 text-purple-400" />,
      title: <h2 className="text-gradient">Lab Investigation Guide</h2>,
      description: "Interactive checklist of recommended lab tests and nearby lab locator",
      path: "/lab-tests",
    },
    {
      icon: <Clock className="h-12 w-12 text-purple-400" />,
      title: <h2 className="text-gradient">Connect with Doctors</h2>,
      description: "Securely communicate with your healthcare providers",
      path: "/connect",
    },
    {
      icon: <Bell className="h-12 w-12 text-purple-400" />,
      title: <h2 className="text-gradient">Emergency Guide</h2>,
      description: "Learn to recognize warning signs and what to do in emergency situations",
      path: "/emergency",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <div className="text-3xl font-bold text-gradient rounded-xl p-8 mb-10">
        <div className="max-w-3xl mx-auto text-center glass-morphism rounded-lg p-6">
          <h1 className="text-3xl md:text-4xl font-bold text-purple-400  mb-4">
            Live Better with Diabetes & Hypertension
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Education, support, and resources for managing your health in Egypt
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild className="bg-sky-600 hover:bg-sky-700">
              <Link to="/learn">Explore Resources</Link>
            </Button>
            <Button asChild variant="outline" className="border-green-600 text-green-700 hover:bg-green-50">
              <Link to="/doctors">Find a Doctor</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {features.map((feature, index) => (
          <Link 
            key={index} 
            to={feature.path} 
            className="glass-morphism rounded-lg p-6 hover:bg-purple-900/30 transition-colors"
          >
            <div className="flex flex-col items-center text-center">
              {feature.icon}
              <h3 className="mt-4 text-xl font-semibold text-gray-900">{feature.title}</h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* Success Stories Section */}
      <div className="glass-morphism rounded-xl p-8 mb-10">
        <h2 className="text-2xl font-semibold text-center text-purple-400 mb-6">Success Stories</h2>
        <div className="border border-purple-800/40 p-6 rounded-lg hover:bg-purple-900/30 transition-colors">
          <blockquote className="italic text-gray-600">
            "With the help of MedEgypt Care, I've been able to better manage my diabetes through proper diet and regular check-ups. The doctor directory helped me find a specialist close to my home in Cairo."
          </blockquote>
          <p className="mt-4 font-medium">- Ahmed, 56, Cairo</p>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
