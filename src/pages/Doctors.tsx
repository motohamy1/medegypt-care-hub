
import React from "react";
import Layout from "@/components/Layout";
import { Calendar, MapPin, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Doctors = () => {
  return (
    <Layout>
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center mb-8">
          <Calendar className="h-8 w-8 text-purple-400 mr-3" />
          <h1 className="text-3xl font-bold text-gradient">Book an Appointment</h1>
        </div>
        
        <div className="glass-morphism rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-purple-400 mb-4">Find a Doctor</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Specialization</label>
              <select className="w-full bg-purple-900/30 border-purple-800/40 rounded-md shadow-sm px-4 py-2 border text-gray-300">
                <option>All Specializations</option>
                <option>Diabetologist</option>
                <option>Cardiologist</option>
                <option>Internal Medicine</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Location</label>
              <div className="relative">
                <MapPin className="absolute left-2 top-2.5 h-4 w-4 text-purple-400" />
                <select className="w-full bg-purple-900/30 border-purple-800/40 rounded-md shadow-sm pl-8 pr-4 py-2 border text-gray-300">
                  <option>Cairo</option>
                  <option>Alexandria</option>
                  <option>Giza</option>
                  <option>Other Governorates</option>
                </select>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Search by Name</label>
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-purple-400" />
                <Input className="pl-8 bg-purple-900/30 border-purple-800/40 text-gray-300" placeholder="Doctor's name" />
              </div>
            </div>
          </div>
          
          <Button className="w-full md:w-auto bg-purple-700 hover:bg-purple-600">Search Doctors</Button>
        </div>
        
        <div className="glass-morphism rounded-lg p-6">
          <h2 className="text-xl font-semibold text-purple-400 mb-4">Featured Doctors</h2>
          <p className="text-gray-300 italic mb-6">Doctor listings coming soon. Our team is verifying qualified doctors across Egypt.</p>
          
          <div className="bg-blue-950/30 border border-blue-800/30 p-4 rounded-lg">
            <h3 className="font-medium text-blue-300">Want to be listed as a doctor?</h3>
            <p className="text-gray-300 mb-3">If you are a qualified healthcare provider specializing in diabetes or hypertension care, contact us to be featured in our directory.</p>
            <Button variant="outline" className="border-blue-600 text-blue-400 hover:bg-blue-900/30">Contact Us</Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Doctors;
