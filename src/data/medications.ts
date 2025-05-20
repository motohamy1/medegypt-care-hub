
// Medication data model for diabetes and hypertension medications available in Egypt
export type Medication = {
  id: string;
  name: string;
  category: string;
  subcategory?: string;
  description: string;
  brands: string[];
  availability: "Available" | "Limited" | "Unavailable";
  mechanismOfAction?: string;
  sideEffects?: string[];
  dosage?: string;
  contraindications?: string[];
};

// Comprehensive list of medications for diabetes and hypertension available in Egypt
export const medicationsData: Medication[] = [
  // Diabetes Medications - Biguanides
  {
    id: "metformin",
    name: "Metformin",
    category: "Diabetes",
    subcategory: "Biguanides",
    description: "First-line medication for type 2 diabetes that reduces glucose production in the liver",
    brands: ["Glucophage", "Cidophage", "Merckformin", "Metformin Sedico", "Dialon", "Diaphage"],
    availability: "Available",
    mechanismOfAction: "Decreases hepatic glucose production, decreases intestinal absorption of glucose, and improves insulin sensitivity",
    sideEffects: ["Digestive issues", "Nausea", "Diarrhea", "Vitamin B12 deficiency"],
    dosage: "500-2550 mg daily in divided doses",
    contraindications: ["Severe kidney disease", "Liver failure", "Metabolic acidosis"]
  },
  
  // Diabetes Medications - Sulfonylureas
  {
    id: "glimepiride",
    name: "Glimepiride",
    category: "Diabetes",
    subcategory: "Sulfonylureas",
    description: "Stimulates insulin release from pancreatic beta cells",
    brands: ["Amaryl", "Diapride", "Glimarex", "Glimepiride EIPICO", "Glimax", "Mepirid"],
    availability: "Available",
    mechanismOfAction: "Stimulates insulin secretion by binding to ATP-sensitive potassium channels on beta cells",
    sideEffects: ["Hypoglycemia", "Weight gain", "Skin reactions"],
    dosage: "1-8 mg once daily",
    contraindications: ["Type 1 diabetes", "Diabetic ketoacidosis"]
  },
  {
    id: "gliclazide",
    name: "Gliclazide",
    category: "Diabetes",
    subcategory: "Sulfonylureas",
    description: "Second-generation sulfonylurea for type 2 diabetes",
    brands: ["Diamicron", "Gliclazide Pharco", "Clazide", "Glicron", "Gliconil", "Gliconorm"],
    availability: "Available",
    mechanismOfAction: "Stimulates insulin secretion from pancreatic beta cells and improves insulin sensitivity",
    sideEffects: ["Hypoglycemia", "Weight gain", "GI disturbances"],
    dosage: "40-320 mg daily in divided doses or 30-120 mg MR once daily",
    contraindications: ["Severe renal or hepatic impairment"]
  },
  {
    id: "glibenclamide",
    name: "Glibenclamide",
    category: "Diabetes",
    subcategory: "Sulfonylureas",
    description: "Potent, long-acting sulfonylurea",
    brands: ["Daonil", "Euglucon", "Glibenclamide ADCO", "Diabeta"],
    availability: "Available",
    mechanismOfAction: "Stimulates insulin secretion from pancreatic beta cells",
    sideEffects: ["Hypoglycemia", "Weight gain", "Allergic skin reactions"],
    dosage: "2.5-20 mg daily",
    contraindications: ["Severe liver or kidney disease", "Pregnancy"]
  },
  
  // Diabetes Medications - DPP-4 Inhibitors
  {
    id: "sitagliptin",
    name: "Sitagliptin",
    category: "Diabetes",
    subcategory: "DPP-4 Inhibitors",
    description: "Enhances incretin levels by inhibiting DPP-4 enzyme",
    brands: ["Januvia", "Sitagliptin EIPICO", "Sitadex", "Janumet (with metformin)"],
    availability: "Available",
    mechanismOfAction: "Increases active incretin hormones, leading to increased insulin secretion and decreased glucagon secretion",
    sideEffects: ["Upper respiratory tract infection", "Headache", "Joint pain"],
    dosage: "100 mg once daily",
    contraindications: ["History of pancreatitis"]
  },
  {
    id: "vildagliptin",
    name: "Vildagliptin",
    category: "Diabetes",
    subcategory: "DPP-4 Inhibitors",
    description: "Increases insulin secretion and decreases glucagon secretion",
    brands: ["Galvus", "Vildagliptin EIPICO", "Vilda", "Galvus Met (with metformin)"],
    availability: "Available",
    mechanismOfAction: "Inhibits DPP-4 enzyme, leading to increased incretin levels",
    sideEffects: ["Dizziness", "Headache", "Liver enzyme elevation"],
    dosage: "50 mg once or twice daily",
    contraindications: ["Liver disease", "Severe renal impairment"]
  },
  
  // Diabetes Medications - SGLT2 Inhibitors
  {
    id: "empagliflozin",
    name: "Empagliflozin",
    category: "Diabetes",
    subcategory: "SGLT2 Inhibitors",
    description: "Reduces blood glucose by increasing glucose excretion in urine",
    brands: ["Jardiance", "Empaglif", "Synjardy (with metformin)"],
    availability: "Available",
    mechanismOfAction: "Inhibits sodium-glucose co-transporter 2 in the kidney, increasing urinary glucose excretion",
    sideEffects: ["Urinary tract infections", "Genital mycotic infections", "Volume depletion"],
    dosage: "10-25 mg once daily",
    contraindications: ["Severe renal impairment", "Dialysis"]
  },
  {
    id: "dapagliflozin",
    name: "Dapagliflozin",
    category: "Diabetes",
    subcategory: "SGLT2 Inhibitors",
    description: "Sodium-glucose co-transporter 2 inhibitor",
    brands: ["Forxiga", "Dapazin", "Dapa", "Xigduo (with metformin)"],
    availability: "Available",
    mechanismOfAction: "Increases urinary glucose excretion by inhibiting SGLT2 in the kidney",
    sideEffects: ["Genital infections", "UTIs", "Volume depletion"],
    dosage: "5-10 mg once daily",
    contraindications: ["Type 1 diabetes", "Severe renal impairment"]
  },
  
  // Diabetes Medications - GLP-1 Receptor Agonists
  {
    id: "liraglutide",
    name: "Liraglutide",
    category: "Diabetes",
    subcategory: "GLP-1 Receptor Agonists",
    description: "Injectable medication that stimulates insulin release",
    brands: ["Victoza", "Saxenda (higher dose for weight management)"],
    availability: "Available",
    mechanismOfAction: "Activates GLP-1 receptors, stimulating glucose-dependent insulin secretion and inhibiting glucagon release",
    sideEffects: ["Nausea", "Vomiting", "Diarrhea", "Injection site reactions"],
    dosage: "0.6-1.8 mg subcutaneous injection once daily",
    contraindications: ["Personal or family history of medullary thyroid carcinoma", "Multiple endocrine neoplasia syndrome type 2"]
  },
  {
    id: "dulaglutide",
    name: "Dulaglutide",
    category: "Diabetes",
    subcategory: "GLP-1 Receptor Agonists",
    description: "Once-weekly injectable for type 2 diabetes",
    brands: ["Trulicity"],
    availability: "Limited",
    mechanismOfAction: "GLP-1 receptor agonist that increases insulin secretion and decreases glucagon secretion",
    sideEffects: ["Nausea", "Diarrhea", "Abdominal pain", "Decreased appetite"],
    dosage: "0.75-1.5 mg subcutaneous injection once weekly",
    contraindications: ["Personal or family history of medullary thyroid cancer"]
  },
  
  // Diabetes Medications - Insulin
  {
    id: "insulin-regular",
    name: "Regular Insulin",
    category: "Diabetes",
    subcategory: "Insulin",
    description: "Short-acting insulin for mealtime coverage",
    brands: ["Actrapid", "Insuman Rapid", "Humulin R"],
    availability: "Available",
    mechanismOfAction: "Exogenous insulin that facilitates cellular glucose uptake and inhibits hepatic glucose production",
    sideEffects: ["Hypoglycemia", "Weight gain", "Injection site reactions"],
    dosage: "Variable based on individual needs",
    contraindications: ["Hypoglycemia"]
  },
  {
    id: "insulin-glargine",
    name: "Insulin Glargine",
    category: "Diabetes",
    subcategory: "Insulin",
    description: "Long-acting basal insulin analog",
    brands: ["Lantus", "Basaglar", "Toujeo", "Glaritus", "Basalog"],
    availability: "Available",
    mechanismOfAction: "Provides steady insulin levels over 24 hours",
    sideEffects: ["Hypoglycemia", "Weight gain", "Injection site reactions"],
    dosage: "Usually once daily injection",
    contraindications: ["Hypoglycemia"]
  },
  
  // Hypertension Medications - ACE Inhibitors
  {
    id: "ramipril",
    name: "Ramipril",
    category: "Hypertension",
    subcategory: "ACE Inhibitors",
    description: "Angiotensin-converting enzyme inhibitor",
    brands: ["Tritace", "Ramipril EIPICO", "Rampril", "Ramace", "Ramilo"],
    availability: "Available",
    mechanismOfAction: "Inhibits ACE, reducing formation of angiotensin II and decreasing vasoconstriction",
    sideEffects: ["Dry cough", "Dizziness", "Hypotension", "Hyperkalemia"],
    dosage: "2.5-20 mg once daily",
    contraindications: ["Pregnancy", "History of angioedema", "Bilateral renal artery stenosis"]
  },
  {
    id: "perindopril",
    name: "Perindopril",
    category: "Hypertension",
    subcategory: "ACE Inhibitors",
    description: "Long-acting ACE inhibitor",
    brands: ["Coversyl", "Coverex", "Perindopril Pharco", "Concor Plus (with bisoprolol)"],
    availability: "Available",
    mechanismOfAction: "Inhibits conversion of angiotensin I to angiotensin II",
    sideEffects: ["Persistent dry cough", "Dizziness", "First-dose hypotension"],
    dosage: "4-8 mg once daily",
    contraindications: ["Pregnancy", "Bilateral renal artery stenosis"]
  },
  {
    id: "captopril",
    name: "Captopril",
    category: "Hypertension",
    subcategory: "ACE Inhibitors",
    description: "Short-acting ACE inhibitor",
    brands: ["Capoten", "Capotril", "Captopril EIPICO", "Alanil"],
    availability: "Available",
    mechanismOfAction: "Inhibits ACE, reducing formation of angiotensin II",
    sideEffects: ["Dry cough", "Taste disturbances", "Rash"],
    dosage: "12.5-150 mg in 2-3 divided doses",
    contraindications: ["Pregnancy", "History of angioedema"]
  },
  
  // Hypertension Medications - ARBs
  {
    id: "losartan",
    name: "Losartan",
    category: "Hypertension",
    subcategory: "ARBs",
    description: "Angiotensin II receptor blocker",
    brands: ["Cozaar", "Losazid", "Losar", "Losartan EIPICO", "Losarbin"],
    availability: "Available",
    mechanismOfAction: "Blocks the binding of angiotensin II to AT1 receptors",
    sideEffects: ["Dizziness", "Hypotension", "Hyperkalemia", "Upper respiratory infection"],
    dosage: "25-100 mg once daily",
    contraindications: ["Pregnancy", "Severe hepatic impairment"]
  },
  {
    id: "valsartan",
    name: "Valsartan",
    category: "Hypertension",
    subcategory: "ARBs",
    description: "Angiotensin II receptor blocker with longer half-life",
    brands: ["Diovan", "Tareg", "Valsartan EIPICO", "Valsacor", "Exforge (with amlodipine)"],
    availability: "Available",
    mechanismOfAction: "Blocks angiotensin II receptors in vascular smooth muscle",
    sideEffects: ["Headache", "Dizziness", "Viral infections", "Fatigue"],
    dosage: "80-320 mg once daily",
    contraindications: ["Pregnancy", "Severe hepatic disease"]
  },
  {
    id: "telmisartan",
    name: "Telmisartan",
    category: "Hypertension",
    subcategory: "ARBs",
    description: "Long-acting ARB with high lipophilicity",
    brands: ["Micardis", "Telmikind", "Telma", "Pritor", "Telfast"],
    availability: "Available",
    mechanismOfAction: "Selectively blocks angiotensin II AT1 receptors",
    sideEffects: ["Upper respiratory tract infection", "Sinusitis", "Back pain"],
    dosage: "20-80 mg once daily",
    contraindications: ["Pregnancy", "Biliary obstructive disorders"]
  },
  
  // Hypertension Medications - Calcium Channel Blockers
  {
    id: "amlodipine",
    name: "Amlodipine",
    category: "Hypertension",
    subcategory: "Calcium Channel Blockers",
    description: "Long-acting dihydropyridine calcium channel blocker",
    brands: ["Norvasc", "Vasonorm", "Amlovas", "Amlodipine EIPICO", "Myodura", "Regcor"],
    availability: "Available",
    mechanismOfAction: "Inhibits calcium influx across cell membrane, causing vasodilation",
    sideEffects: ["Peripheral edema", "Flushing", "Headache", "Dizziness"],
    dosage: "2.5-10 mg once daily",
    contraindications: ["Severe hypotension", "Shock"]
  },
  {
    id: "diltiazem",
    name: "Diltiazem",
    category: "Hypertension",
    subcategory: "Calcium Channel Blockers",
    description: "Non-dihydropyridine calcium channel blocker",
    brands: ["Altiazem", "Diltiazem EIPICO", "Tiazac", "Zildem"],
    availability: "Available",
    mechanismOfAction: "Inhibits influx of calcium ions, reducing vascular resistance",
    sideEffects: ["Headache", "Dizziness", "Constipation", "Bradycardia"],
    dosage: "120-540 mg daily in divided doses",
    contraindications: ["Sick sinus syndrome", "Second or third-degree AV block"]
  },
  {
    id: "nifedipine",
    name: "Nifedipine",
    category: "Hypertension",
    subcategory: "Calcium Channel Blockers",
    description: "Dihydropyridine calcium channel blocker",
    brands: ["Adalat", "Epilat", "Nifedipine Pharco", "Atelpin"],
    availability: "Available",
    mechanismOfAction: "Inhibits calcium influx across cell membrane of cardiac and smooth muscle",
    sideEffects: ["Peripheral edema", "Dizziness", "Flushing", "Headache"],
    dosage: "30-120 mg daily (extended release)",
    contraindications: ["Cardiogenic shock", "Advanced aortic stenosis"]
  },
  
  // Hypertension Medications - Beta Blockers
  {
    id: "bisoprolol",
    name: "Bisoprolol",
    category: "Hypertension",
    subcategory: "Beta Blockers",
    description: "Cardioselective beta-blocker",
    brands: ["Concor", "Bisocor", "Bisoloc", "Bicor", "Bisoprolol EIPICO"],
    availability: "Available",
    mechanismOfAction: "Blocks beta-1 adrenergic receptors in cardiac tissue",
    sideEffects: ["Fatigue", "Bradycardia", "Cold extremities", "Sleep disturbances"],
    dosage: "2.5-10 mg once daily",
    contraindications: ["Severe bradycardia", "Sick sinus syndrome", "Cardiogenic shock"]
  },
  {
    id: "atenolol",
    name: "Atenolol",
    category: "Hypertension",
    subcategory: "Beta Blockers",
    description: "Cardioselective beta-1 blocker",
    brands: ["Tenormin", "Atenolol EIPICO", "Bloc", "Ateno", "Hypoten"],
    availability: "Available",
    mechanismOfAction: "Selectively blocks beta-1 adrenergic receptors",
    sideEffects: ["Fatigue", "Cold extremities", "Dizziness", "Depression"],
    dosage: "25-100 mg once daily",
    contraindications: ["Untreated heart failure", "Cardiogenic shock", "Severe bradycardia"]
  },
  {
    id: "carvedilol",
    name: "Carvedilol",
    category: "Hypertension",
    subcategory: "Beta Blockers",
    description: "Non-selective beta blocker with alpha-1 blocking activity",
    brands: ["Dilatrend", "Carvipress", "Carvedilol EIPICO", "Carvid"],
    availability: "Available",
    mechanismOfAction: "Blocks beta and alpha-1 receptors, reducing peripheral vascular resistance",
    sideEffects: ["Dizziness", "Fatigue", "Hypotension", "Weight gain"],
    dosage: "6.25-25 mg twice daily",
    contraindications: ["Decompensated heart failure requiring intravenous inotropes", "Bronchial asthma"]
  },
  
  // Hypertension Medications - Diuretics
  {
    id: "hydrochlorothiazide",
    name: "Hydrochlorothiazide",
    category: "Hypertension",
    subcategory: "Diuretics",
    description: "Thiazide diuretic",
    brands: ["Hydrodiuril", "HCTZ", "Ezide", "Esidrex"],
    availability: "Available",
    mechanismOfAction: "Inhibits sodium reabsorption in distal tubules, increasing excretion of sodium and water",
    sideEffects: ["Electrolyte disturbances", "Hyperglycemia", "Hyperuricemia", "Photosensitivity"],
    dosage: "12.5-50 mg daily",
    contraindications: ["Anuria", "Sulfonamide allergy"]
  },
  {
    id: "furosemide",
    name: "Furosemide",
    category: "Hypertension",
    subcategory: "Diuretics",
    description: "Loop diuretic for resistant hypertension and edema",
    brands: ["Lasix", "Salurin", "Furosemide EIPICO", "Furorese"],
    availability: "Available",
    mechanismOfAction: "Inhibits reabsorption of sodium and chloride in the loop of Henle",
    sideEffects: ["Electrolyte imbalances", "Dehydration", "Ototoxicity", "Hyperglycemia"],
    dosage: "20-80 mg daily",
    contraindications: ["Anuria", "Severe hypokalemia"]
  },
  {
    id: "spironolactone",
    name: "Spironolactone",
    category: "Hypertension",
    subcategory: "Diuretics",
    description: "Potassium-sparing diuretic and aldosterone antagonist",
    brands: ["Aldactone", "Spiroctan", "Spironil", "Spironolactone EIPICO"],
    availability: "Available",
    mechanismOfAction: "Competitively blocks aldosterone receptors in distal tubule cells",
    sideEffects: ["Hyperkalemia", "Gynecomastia", "Menstrual irregularities", "Impotence"],
    dosage: "25-100 mg daily",
    contraindications: ["Hyperkalemia", "Addison's disease", "Severe renal insufficiency"]
  },
  
  // Combination Drugs for Hypertension
  {
    id: "valsartan-amlodipine",
    name: "Valsartan + Amlodipine",
    category: "Hypertension",
    subcategory: "Combination Therapy",
    description: "Combination of ARB and calcium channel blocker",
    brands: ["Exforge", "Diovan HCT", "Valzaar AM", "Valodip"],
    availability: "Available",
    mechanismOfAction: "Combines ARB's RAAS inhibition with calcium channel blocker's vasodilation",
    sideEffects: ["Peripheral edema", "Headache", "Dizziness", "Fatigue"],
    dosage: "80/5 mg to 320/10 mg once daily",
    contraindications: ["Pregnancy", "Severe hepatic impairment"]
  },
  {
    id: "perindopril-amlodipine",
    name: "Perindopril + Amlodipine",
    category: "Hypertension",
    subcategory: "Combination Therapy",
    description: "Combination of ACE inhibitor and calcium channel blocker",
    brands: ["Coveram", "Procoralan", "Viacoram", "Bipressil"],
    availability: "Available",
    mechanismOfAction: "Combines ACE inhibition with calcium channel blockade",
    sideEffects: ["Cough", "Edema", "Dizziness", "Headache"],
    dosage: "Perindopril 5-10 mg/Amlodipine 5-10 mg once daily",
    contraindications: ["Pregnancy", "History of angioedema", "Severe renal impairment"]
  },
  
  // Combination Drugs for Diabetes
  {
    id: "metformin-glimepiride",
    name: "Metformin + Glimepiride",
    category: "Diabetes",
    subcategory: "Combination Therapy",
    description: "Combination of biguanide and sulfonylurea",
    brands: ["Amaryl M", "Glimy M", "Diapride M", "Glimepiride-M"],
    availability: "Available",
    mechanismOfAction: "Combines decreased glucose production with increased insulin secretion",
    sideEffects: ["Hypoglycemia", "GI disturbances", "Weight gain"],
    dosage: "Metformin 500-1000 mg/Glimepiride 1-4 mg daily",
    contraindications: ["Severe renal or hepatic disease", "Metabolic acidosis"]
  },
  {
    id: "metformin-sitagliptin",
    name: "Metformin + Sitagliptin",
    category: "Diabetes",
    subcategory: "Combination Therapy",
    description: "Combination of biguanide and DPP-4 inhibitor",
    brands: ["Janumet", "Sitaglu-Met", "Sitavia Met", "Janumet XR"],
    availability: "Available",
    mechanismOfAction: "Combines decreased glucose production with increased incretin levels",
    sideEffects: ["GI disturbances", "Upper respiratory tract infection", "Headache"],
    dosage: "Sitagliptin 50-100 mg/Metformin 500-2000 mg daily",
    contraindications: ["Severe renal impairment", "Metabolic acidosis"]
  }
];
