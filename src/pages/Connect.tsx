
import React from "react";
import Layout from "@/components/Layout";
import { Clock, MessageCircle, VideoIcon, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Connect = () => {
  return (
    <Layout>
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center mb-8">
          <Clock className="h-8 w-8 text-sky-600 mr-3" />
          <h1 className="text-3xl font-bold text-gray-900">Connect with Doctors</h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <MessageCircle className="h-12 w-12 text-sky-600 mb-4" />
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Send a Message</h2>
            <p className="text-gray-600 mb-4">Securely message your doctor with non-urgent questions</p>
            <Button className="mt-auto">Message</Button>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <VideoIcon className="h-12 w-12 text-sky-600 mb-4" />
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Video Consultation</h2>
            <p className="text-gray-600 mb-4">Schedule a virtual appointment with your healthcare provider</p>
            <Button variant="outline" className="mt-auto">Coming Soon</Button>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <Calendar className="h-12 w-12 text-sky-600 mb-4" />
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Book Follow-up</h2>
            <p className="text-gray-600 mb-4">Schedule your next in-person visit</p>
            <Button className="mt-auto">Book Now</Button>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold text-sky-700 mb-6">Quick Question</h2>
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Doctor</label>
              <select className="w-full border-gray-300 rounded-md shadow-sm px-4 py-2 border">
                <option>Select your doctor</option>
                <option>Dr. Ahmed Hassan</option>
                <option>Dr. Sara Ibrahim</option>
              </select>
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
              <Input placeholder="Brief subject of your question" />
            </div>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <Textarea 
                placeholder="Type your health question here..." 
                className="h-32"
              />
            </div>
            
            <Button className="w-full sm:w-auto">Send Question</Button>
          </form>
        </div>
        
        <div className="bg-yellow-50 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-yellow-700 mb-4">Please Note</h2>
          <p className="text-gray-700">
            This messaging system is not for emergencies. If you have an urgent medical need, 
            please call emergency services or visit your nearest hospital immediately.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Connect;
