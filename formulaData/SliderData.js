const sirkulær_diameter = {
  label: "Diameter",
  stateName: "diameter",
  metric: "mm",
  min: 1,
  max: 100,
  step: 1,
  defaultValue: 10,
};
const sirkulær_luftmengde = {
  label: "Luftmengde",
  stateName: "luftmengde",
  metric: "l/s",
  min: 0,
  max: 1,
  step: 0.01,
  defaultValue: 1,
};
const sirkulær_lufthastighet = {
  label: "Lufthastighet",
  stateName: "lufthastighet",
  metric: "m/s",
  min: 0.1,
  max: 10,
  step: 0.1,
  defaultValue: 2.5,
};
const trykkfall = {
  label: "Trykkfall",
  stateName: "trykkfall",
  metric: "pa/m",
  min: 1,
  max: 100,
  step: 1,
  defaultValue: 50,
};
const diameter = {
  label: "Diameter",
  stateName: "diameter",
  metric: "mm",
  min: 1,
  max: 100,
  step: 1,
  defaultValue: 10,
};
const hastighet = {
  label: "Hastighet",
  stateName: "hastighet",
  metric: "m/s",
  min: 0.1,
  max: 1,
  step: 0.01,
  defaultValue: 1,
};
export const sirkulær_luftmengde_sliderData = [
  sirkulær_lufthastighet,
  sirkulær_diameter,
];
export const sirkulær_hastighet_sliderData = [
  sirkulær_luftmengde,
  sirkulær_diameter,
];
export const sirkulær_diameter_sliderData = [
  sirkulær_lufthastighet,
  sirkulær_luftmengde,
];
export const trykkfall_sliderData = [sirkulær_luftmengde, diameter];
export const diameter_rør_sliderData = [trykkfall, sirkulær_luftmengde];
export const hastighet_sliderData = [diameter, sirkulær_luftmengde];
