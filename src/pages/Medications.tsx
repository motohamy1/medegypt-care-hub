
import React, { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import { Pill, Search, Filter, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { medicationsData, Medication } from "@/data/medications";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Label } from "@/components/ui/label";
import { Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem } from "@/components/ui/command";
import { useLanguage } from "../contexts/LanguageContext";

const Medications = () => {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeSubcategory, setActiveSubcategory] = useState<string | null>(null);
  const [filteredMedications, setFilteredMedications] = useState<Medication[]>(medicationsData);
  const [openPopover, setOpenPopover] = useState(false);
  
  const categories = ["all", ...Array.from(new Set(medicationsData.map(med => med.category)))];
  
  const subcategories = Array.from(
    new Set(medicationsData
      .filter(med => activeCategory === "all" || med.category === activeCategory)
      .map(med => med.subcategory)
      .filter(Boolean))
  );
  
  useEffect(() => {
    let filtered = medicationsData;
    
    // Filter by category
    if (activeCategory !== "all") {
      filtered = filtered.filter(med => med.category === activeCategory);
    }
    
    // Filter by subcategory if selected
    if (activeSubcategory) {
      filtered = filtered.filter(med => med.subcategory === activeSubcategory);
    }
    
    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(med => 
        med.name.toLowerCase().includes(term) || 
        med.brands.some(brand => brand.toLowerCase().includes(term)) ||
        (med.description && med.description.toLowerCase().includes(term))
      );
    }
    
    setFilteredMedications(filtered);
  }, [activeCategory, activeSubcategory, searchTerm]);
  
  const resetFilters = () => {
    setActiveCategory("all");
    setActiveSubcategory(null);
    setSearchTerm("");
  };

  return (
    <Layout>
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center mb-8">
          <Pill className="h-8 w-8 text-purple-400 mr-3" />
          <h1 className="text-3xl font-bold text-gradient">{t('medications.title')}</h1>
        </div>
        
        <Card className="bg-purple-950/30 border border-purple-800/30 shadow-md shadow-purple-900/10 mb-8">
          <CardHeader className="pb-2">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <CardTitle className="text-xl font-semibold text-purple-300">
                {t('medications.medicationsInEgypt')}
                {filteredMedications.length > 0 && (
                  <Badge variant="secondary" className="ml-2 bg-purple-700/60 text-purple-200 hover:bg-purple-600/70">
                    {filteredMedications.length} {t('medications.results')}
                  </Badge>
                )}
              </CardTitle>
              
              <div className="flex items-center gap-2 mt-3 md:mt-0">
                <div className="relative flex-1">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-purple-400" />
                  <Input 
                    className="pl-8 w-full bg-purple-900/50 border-purple-800/50 text-purple-200 placeholder:text-purple-400"
                    placeholder={t('medications.searchPlaceholder')} 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  {searchTerm && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setSearchTerm("")}
                      className="absolute right-1 top-1 h-7 w-7 p-0 text-purple-400 hover:text-purple-300"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  )}
                </div>
                
                <Popover open={openPopover} onOpenChange={setOpenPopover}>
                  <PopoverTrigger asChild>
                    <Button 
                      variant="outline" 
                      size="icon"
                      className="shrink-0 bg-purple-900/50 border-purple-800/50 text-purple-300 hover:bg-purple-800/60 hover:text-purple-200"
                    >
                      <Filter className="h-4 w-4" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-72 p-4 bg-purple-950 border-purple-800/50 text-purple-200">
                    <div className="space-y-4">
                      <h4 className="font-medium">{t('medications.filterMedications')}</h4>
                      
                      <div className="space-y-2">
                        <Label htmlFor="subcategory" className="text-purple-300">{t('medications.drugClass')}</Label>
                        <Command className="rounded-md border border-purple-800/50 bg-purple-900/50">
                          <CommandInput 
                            placeholder={t('medications.searchDrugClasses')} 
                            className="text-purple-200 placeholder:text-purple-400"
                          />
                          <CommandList className="text-purple-200">
                            <CommandEmpty>{t('medications.noResults')}</CommandEmpty>
                            <CommandGroup>
                              <CommandItem 
                                className={`${!activeSubcategory ? 'bg-purple-800/60 text-purple-100' : 'text-purple-300'} cursor-pointer`}
                                onSelect={() => {
                                  setActiveSubcategory(null);
                                  setOpenPopover(false);
                                }}
                              >
                                {t('medications.allClasses')}
                              </CommandItem>
                              {subcategories.map((subcat) => (
                                <CommandItem 
                                  key={subcat as string}
                                  className={`${activeSubcategory === subcat ? 'bg-purple-800/60 text-purple-100' : 'text-purple-300'} cursor-pointer`}
                                  onSelect={() => {
                                    setActiveSubcategory(subcat as string);
                                    setOpenPopover(false);
                                  }}
                                >
                                  {subcat as string}
                                </CommandItem>
                              ))}
                            </CommandGroup>
                          </CommandList>
                        </Command>
                      </div>
                      
                      <Button 
                        onClick={resetFilters} 
                        variant="outline" 
                        className="w-full text-purple-200 border-purple-700 hover:bg-purple-800/60 hover:text-purple-100"
                      >
                        {t('medications.resetFilters')}
                      </Button>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
            </div>
            
            <Tabs 
              value={activeCategory} 
              onValueChange={(value) => {
                setActiveCategory(value);
                setActiveSubcategory(null);
              }}
              className="mt-4"
            >
              <TabsList className="bg-purple-900/40 border border-purple-800/30 h-auto flex flex-wrap gap-1 p-1">
                {categories.map((category) => (
                  <TabsTrigger 
                    key={category} 
                    value={category}
                    className="data-[state=active]:bg-purple-800/60 data-[state=active]:text-purple-100 text-purple-300"
                  >
                    {category === "all" ? t('medications.all') : category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
            
            {activeSubcategory && (
              <div className="flex items-center mt-2">
                <span className="text-sm text-purple-400">{t('medications.filteredBy')} </span>
                <Badge 
                  variant="outline" 
                  className="ml-2 text-purple-200 border-purple-700 flex items-center gap-1"
                >
                  {activeSubcategory}
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setActiveSubcategory(null)}
                    className="h-4 w-4 p-0 ml-1 text-purple-400 hover:text-purple-300 hover:bg-transparent"
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </Badge>
              </div>
            )}
          </CardHeader>
          
          <CardContent>
            {filteredMedications.length === 0 ? (
              <div className="py-10 text-center text-purple-300">
                <p>{t('medications.noMedicationsFound')}</p>
                <Button 
                  onClick={resetFilters}
                  variant="outline" 
                  className="mt-4 text-purple-200 border-purple-700 hover:bg-purple-800/60 hover:text-purple-100"
                >
                  {t('medications.clearFilters')}
                </Button>
              </div>
            ) : (
              <div className="space-y-6">
                {Array.from(new Set(filteredMedications.map(med => med.category))).map(category => (
                  <div key={category} className="border-b border-purple-800/50 pb-6 mb-6 last:border-0 last:pb-0 last:mb-0">
                    <h3 className="text-lg font-medium text-purple-300 mb-2">{category} {t('medications.medicationsCategory')}</h3>
                    
                    {Array.from(new Set(filteredMedications.filter(med => med.category === category).map(med => med.subcategory))).map(subcategory => (
                      <div key={`${category}-${subcategory}`} className="mb-4 last:mb-0">
                        {subcategory && (
                          <h4 className="text-md text-purple-400 mb-3 mt-4">{subcategory}</h4>
                        )}
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {filteredMedications
                            .filter(med => med.category === category && med.subcategory === subcategory)
                            .map((medication) => (
                              <div key={medication.id} className="glass-morphism rounded-lg p-4">
                                <div className="flex justify-between">
                                  <h4 className="font-medium text-purple-200">{medication.name}</h4>
                                  <Badge 
                                    variant="secondary" 
                                    className={`
                                      ${medication.availability === 'Available' ? 'bg-green-700/60 text-green-100' : 
                                        medication.availability === 'Limited' ? 'bg-amber-700/60 text-amber-100' : 
                                        'bg-red-700/60 text-red-100'}
                                    `}
                                  >
                                    {medication.availability}
                                  </Badge>
                                </div>
                                
                                <p className="text-sm text-purple-300 mt-1">{medication.description}</p>
                                
                                <div className="mt-2 text-sm text-purple-300">
                                  <span className="font-medium text-purple-200">{t('medications.brandsInEgypt')}</span>{" "}
                                  {medication.brands.join(", ")}
                                </div>
                                
                                {medication.mechanismOfAction && (
                                  <div className="mt-1 text-xs text-purple-400">
                                    <span className="font-medium">{t('medications.mechanism')}</span> {medication.mechanismOfAction}
                                  </div>
                                )}
                                
                                {medication.dosage && (
                                  <div className="mt-1 text-xs text-purple-400">
                                    <span className="font-medium">{t('medications.typicalDosage')}</span> {medication.dosage}
                                  </div>
                                )}
                              </div>
                            ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
        
        <Card className="bg-amber-950/30 border border-amber-800/30 shadow-md shadow-amber-900/10">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold text-amber-400 mb-4">{t('medications.importantNotes')}</h2>
            <p className="text-amber-200 mb-3">
              {t('medications.disclaimer1')}
            </p>
            <p className="text-amber-200">
              {t('medications.disclaimer2')}
            </p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Medications;
