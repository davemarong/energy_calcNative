// IMPORT

// React Native

// ReactNativeElements

// Components
import { Slider } from "./Slider";
// Utils

// Data

// Functional component
export const SliderContainer = ({
  sliderData,
  setFormulaValues,
  alignment,
}) => {
  // State

  // Functions

  // Return
  return (
    <>
      {sliderData.map((slider) => {
        return (
          <Slider
            key={slider.label}
            sliderData={slider}
            setFormulaValues={setFormulaValues}
            alignment={alignment}
          />
        );
      })}
    </>
  );
};
