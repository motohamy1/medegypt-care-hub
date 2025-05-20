
import React, { useState } from "react";
import Layout from "@/components/Layout";
import { Pill, Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Medications = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  return (
    <Layout>
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center mb-8">
          <Pill className="h-8 w-8 text-purple-400 mr-3" />
          <h1 className="text-3xl font-bold text-gradient">Medications Guide</h1>
        </div>
        
        <Card className="bg-purple-950/30 border border-purple-800/30 shadow-md shadow-purple-900/10 mb-8">
          <CardHeader className="pb-2">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <CardTitle className="text-xl font-semibold text-purple-300">Available Medications in Egypt</CardTitle>
              <div className="mt-3 md:mt-0 relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-purple-400" />
                <Input 
                  className="pl-8 w-full md:w-64 bg-purple-900/50 border-purple-800/50 text-purple-200 placeholder:text-purple-400"
                  placeholder="Search medications" 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </CardHeader>
          
          <CardContent>
            <div className="border-b border-purple-800/50 pb-4 mb-4">
              <h3 className="text-lg font-medium text-purple-300 mb-2">Diabetes Medications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Metformin Card */}
                <div className="glass-morphism rounded-lg p-4">
                  <div className="flex justify-between">
                    <h4 className="font-medium text-purple-200">Metformin</h4>
                    <Badge variant="secondary" className="bg-purple-700/60 text-purple-200 hover:bg-purple-600/70">Available</Badge>
                  </div>
                  <p className="text-sm text-purple-300 mt-1">First-line medication for type 2 diabetes</p>
                  <div className="mt-2 text-sm text-purple-300">
                    <span className="font-medium text-purple-200">Brands in Egypt:</span> Glucophage, Cidophage, Merckformin
                  </div>
                </div>
                
                {/* Glimepiride Card */}
                <div className="glass-morphism rounded-lg p-4">
                  <div className="flex justify-between">
                    <h4 className="font-medium text-purple-200">Glimepiride</h4>
                    <Badge variant="secondary" className="bg-purple-700/60 text-purple-200 hover:bg-purple-600/70">Available</Badge>
                  </div>
                  <p className="text-sm text-purple-300 mt-1">Sulfonylurea that stimulates insulin release</p>
                  <div className="mt-2 text-sm text-purple-300">
                    <span className="font-medium text-purple-200">Brands in Egypt:</span> Amaryl, Diapride, Glimarex
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-purple-300 mb-2">Hypertension Medications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Amlodipine Card */}
                <div className="glass-morphism rounded-lg p-4">
                  <div className="flex justify-between">
                    <h4 className="font-medium text-purple-200">Amlodipine</h4>
                    <Badge variant="secondary" className="bg-purple-700/60 text-purple-200 hover:bg-purple-600/70">Available</Badge>
                  </div>
                  <p className="text-sm text-purple-300 mt-1">Calcium channel blocker</p>
                  <div className="mt-2 text-sm text-purple-300">
                    <span className="font-medium text-purple-200">Brands in Egypt:</span> Norvasc, Vasonorm, Amlovas
                  </div>
                </div>
                
                {/* Losartan Card */}
                <div className="glass-morphism rounded-lg p-4">
                  <div className="flex justify-between">
                    <h4 className="font-medium text-purple-200">Losartan</h4>
                    <Badge variant="secondary" className="bg-purple-700/60 text-purple-200 hover:bg-purple-600/70">Available</Badge>
                  </div>
                  <p className="text-sm text-purple-300 mt-1">Angiotensin II receptor blocker (ARB)</p>
                  <div className="mt-2 text-sm text-purple-300">
                    <span className="font-medium text-purple-200">Brands in Egypt:</span> Cozaar, Losazid, Losar
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-amber-950/30 border border-amber-800/30 shadow-md shadow-amber-900/10">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold text-amber-400 mb-4">Important Note</h2>
            <p className="text-amber-200">
              This information is provided for educational purposes only. Always consult with your healthcare 
              provider before starting, changing, or stopping any medication. Medication availability and 
              pricing may vary by location in Egypt.
            </p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Medications;
