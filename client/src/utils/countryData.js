export const countryOptions = [
  { code: "+91", value: "+91", name: "India", format: "+91 ##### #####" },
  { code: "+1", value: "+1", name: "USA", format: "+1 (###) ###-####" },
  { code: "+44", value: "+44", name: "UK", format: "+44 #### ######" },
  { code: "+61", value: "+61", name: "Australia", format: "+61 # #### ####" },
  { code: "+49", value: "+49", name: "Germany", format: "+49 ### #######" },
  { code: "+33", value: "+33", name: "France", format: "+33 # ## ## ## ##" },
  { code: "+81", value: "+81", name: "Japan", format: "+81 ## #### ####" },
  { code: "+86", value: "+86", name: "China", format: "+86 ### #### ####" },
  { code: "+971", value: "+971", name: "UAE", format: "+971 # ### ####" },
  {
    code: "+966",
    value: "+966",
    name: "Saudi Arabia",
    format: "+966 # #### ####",
  },
];

export const getCountryFormat = (countryCode) => {
  const country = countryOptions.find((opt) => opt.value === countryCode);
  return country ? country.format : "##### #####";
};
