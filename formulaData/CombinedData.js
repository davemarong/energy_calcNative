import {
  sirkulær_luftmengde_formula_values,
  sirkulær_hastighet_formula_values,
  sirkulær_diameter_formula_values,
  trykkfall_formula_values,
  diameterRør_formula_values,
  hastighet_formula_values,
} from "./FormulaValues";
import {
  sirkulær_luftmengde_link,
  sirkulær_hastighet_link,
  sirkulær_diameter_link,
  trykkfall_link,
  diameter_rør_link,
  hastighet_link,
} from "./FormulaFunctions";
import {
  sirkulær_luftmengde_sliderData,
  sirkulær_hastighet_sliderData,
  sirkulær_diameter_sliderData,
  trykkfall_sliderData,
  diameter_rør_sliderData,
  hastighet_sliderData,
} from "./SliderData";

export const allFormulaData = {
  Luftmengde: {
    formulaValue: sirkulær_luftmengde_formula_values,
    formulaFunctions: sirkulær_luftmengde_link,
    sliderData: sirkulær_luftmengde_sliderData,
  },
  Hastighet: {
    formulaValue: hastighet_formula_values,
    formulaFunctions: hastighet_link,
    sliderData: hastighet_sliderData,
  },
  Diameter: {
    formulaValue: diameterRør_formula_values,
    formulaFunctions: diameter_rør_link,
    sliderData: diameter_rør_sliderData,
  },
  Trykkfall: {
    formulaValue: trykkfall_formula_values,
    formulaFunctions: trykkfall_link,
    sliderData: trykkfall_sliderData,
  },
};
