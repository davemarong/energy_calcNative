import {
  trykkfall_formula_values,
  temperaturregulering_formula_values,
  mengderegulering_formula_values,
  nyEffekt_formula_values,
  effektreduksjon_formula_values,
  diameterRør_formula_values,
  hastighet_formula_values,
  volumstrøm_formula_values,
  kvVerdi_formula_values,
  apv_formula_values,
} from "./FormulaValues";
import {
  trykkfall_link,
  temperaturregulering_link,
  mengderegulering_link,
  nyEffekt_link,
  effektreduksjon_link,
  diameter_rør_link,
  hastighet_link,
  volumstrøm_link,
  kvVerdi_link,
  apv_link,
} from "./FormulaFunctions";
import {
  trykkfall_inputdata,
  temperaturregulering_inputdata,
  mengderegulering_inputdata,
  effektreduksjon_inputdata,
  nyEffekt_inputdata,
  diameter_rør_inputdata,
  hastighet_inputdata,
  volumstrøm_inputdata,
  kvVerdi_inputdata,
  apv_inputdata,
} from "./Input_data";
import {
  pipe_buttonLabels,
  threeKv_buttonLabels,
  effektregulering_buttonLabels,
} from "./ButtonGroupLabels";

export const allFormulaData = {
  // Luftmengde: {
  //   formulaValue: luftmengde_formula_values,
  //   formulaFunctions: luftmengde_link,
  //   inputdata: luftmengde_inputdata,
  //   buttonGroup: pipe_buttonLabels,
  // },
  Hastighet: {
    formulaValue: hastighet_formula_values,
    formulaFunctions: hastighet_link,
    inputdata: hastighet_inputdata,
    buttonGroup: pipe_buttonLabels,
  },
  Diameter: {
    formulaValue: diameterRør_formula_values,
    formulaFunctions: diameter_rør_link,
    inputdata: diameter_rør_inputdata,
    buttonGroup: pipe_buttonLabels,
  },
  Trykkfall: {
    formulaValue: trykkfall_formula_values,
    formulaFunctions: trykkfall_link,
    inputdata: trykkfall_inputdata,
    buttonGroup: pipe_buttonLabels,
  },
  Volumstrøm: {
    formulaValue: volumstrøm_formula_values,
    formulaFunctions: volumstrøm_link,
    inputdata: volumstrøm_inputdata,
    buttonGroup: threeKv_buttonLabels,
  },
  KvVerdi: {
    formulaValue: kvVerdi_formula_values,
    formulaFunctions: kvVerdi_link,
    inputdata: kvVerdi_inputdata,
    buttonGroup: threeKv_buttonLabels,
  },
  Apv: {
    formulaValue: apv_formula_values,
    formulaFunctions: apv_link,
    inputdata: apv_inputdata,
    buttonGroup: threeKv_buttonLabels,
  },
  Temperaturregulering: {
    formulaValue: temperaturregulering_formula_values,
    formulaFunctions: temperaturregulering_link,
    inputdata: temperaturregulering_inputdata,
    buttonGroup: effektregulering_buttonLabels,
  },
  Mengderegulering: {
    formulaValue: mengderegulering_formula_values,
    formulaFunctions: mengderegulering_link,
    inputdata: mengderegulering_inputdata,
    buttonGroup: effektregulering_buttonLabels,
  },
  Effektreduksjon: {
    formulaValue: effektreduksjon_formula_values,
    formulaFunctions: effektreduksjon_link,
    inputdata: effektreduksjon_inputdata,
    buttonGroup: effektregulering_buttonLabels,
  },
  NyEffekt: {
    formulaValue: nyEffekt_formula_values,
    formulaFunctions: nyEffekt_link,
    inputdata: nyEffekt_inputdata,
    buttonGroup: effektregulering_buttonLabels,
  },
};