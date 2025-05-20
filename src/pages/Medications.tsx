
import React from "react";
import Layout from "@/components/Layout";
import { Pill, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Medications = () => {
  return (
    <Layout>
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center mb-8">
          <Pill className="h-8 w-8 text-sky-600 mr-3" />
          <h1 className="text-3xl font-bold text-gray-900">Medications Guide</h1>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <h2 className="text-xl font-semibold text-sky-700">Available Medications in Egypt</h2>
            <div className="mt-3 md:mt-0 relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
              <Input className="pl-8 w-full md:w-64" placeholder="Search medications" />
            </div>
          </div>
          
          <div className="border-b pb-4 mb-4">
            <h3 className="text-lg font-medium text-gray-800 mb-2">Diabetes Medications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between">
                  <h4 className="font-medium">Metformin</h4>
                  <span className="text-sm bg-green-100 text-green-700 px-2 rounded-full">Available</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">First-line medication for type 2 diabetes</p>
                <div className="mt-2 text-sm">
                  <span className="font-medium">Brands in Egypt:</span> Glucophage, Cidophage, Merckformin
                </div>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between">
                  <h4 className="font-medium">Glimepiride</h4>
                  <span className="text-sm bg-green-100 text-green-700 px-2 rounded-full">Available</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">Sulfonylurea that stimulates insulin release</p>
                <div className="mt-2 text-sm">
                  <span className="font-medium">Brands in Egypt:</span> Amaryl, Diapride, Glimarex
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-2">Hypertension Medications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between">
                  <h4 className="font-medium">Amlodipine</h4>
                  <span className="text-sm bg-green-100 text-green-700 px-2 rounded-full">Available</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">Calcium channel blocker</p>
                <div className="mt-2 text-sm">
                  <span className="font-medium">Brands in Egypt:</span> Norvasc, Vasonorm, Amlovas
                </div>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between">
                  <h4 className="font-medium">Losartan</h4>
                  <span className="text-sm bg-green-100 text-green-700 px-2 rounded-full">Available</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">Angiotensin II receptor blocker (ARB)</p>
                <div className="mt-2 text-sm">
                  <span className="font-medium">Brands in Egypt:</span> Cozaar, Losazid, Losar
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-amber-50 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-amber-700 mb-4">Important Note</h2>
          <p className="text-gray-700">
            This information is provided for educational purposes only. Always consult with your healthcare 
            provider before starting, changing, or stopping any medication. Medication availability and 
            pricing may vary by location in Egypt.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Medications;
