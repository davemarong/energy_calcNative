const diameter = {
  label: "Diameter",
  value: 100,
};
const luftmengde = {
  label: "Luftmengde",
  value: 2.5,
};
const lufthastighet = {
  label: "Lufthastighet",
  value: 2.5,
};
const trykkfall = {
  label: "Trykkfall",
  value: 50,
};
const hastighet = {
  label: "Hastighet",
  value: 1,
};

export const sirkulær_luftmengde_formula_values = {
  lufthastighet,
  diameter,
};
export const sirkulær_hastighet_formula_values = {
  luftmengde,
  diameter,
};
export const sirkulær_diameter_formula_values = {
  lufthastighet,
  luftmengde,
};
export const trykkfall_formula_values = {
  diameter,
  luftmengde,
};
export const diameterRør_formula_values = {
  trykkfall,
  luftmengde,
};
export const hastighet_formula_values = {
  diameter,
  luftmengde,
};
