"use client";

import styled from "styled-components";
import StepOne from "./steps/StepOne";
import StepTwo from "./steps/StepTwo";
import StepThree from "./steps/StepThree";
import StepFour from "./steps/StepFour";
import { useState } from "react";

const desktopBg = "/assets/images/bg-sidebar-desktop.svg";
const stepsData = [
  { number: 1, name: "Your Info" },
  { number: 2, name: "Select Plan" },
  { number: 3, name: "Add-Ons" },
  { number: 4, name: "Summary" },
];

export default function Home() {
  const [currentStep, setCurrentStep] = useState(1);

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleNextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <DisplayWrapper>
      <FormWrapper>
        <StepperWrapper>
          {stepsData.map((step, index) => (
            <StepWrapper key={index}>
              <StepNumber active={currentStep === step.number}>
                {step.number}
              </StepNumber>
              <StepDetails>
                <StepStepNumber>Step {step.number}</StepStepNumber>
                <StepName>{step.name}</StepName>
              </StepDetails>
            </StepWrapper>
          ))}
        </StepperWrapper>
        <ContentWrapper>
          {currentStep === 1 && <StepOne onNextStep={handleNextStep} />}
          {currentStep === 2 && (
            <StepTwo onPrevStep={handlePrevStep} onNextStep={handleNextStep} />
          )}
          {currentStep === 3 && (
            <StepThree
              onPrevStep={handlePrevStep}
              onNextStep={handleNextStep}
            />
          )}
          {currentStep === 4 && <StepFour onPrevStep={handlePrevStep} />}
        </ContentWrapper>
      </FormWrapper>
    </DisplayWrapper>
  );
}

const DisplayWrapper = styled.div`
  width: 100%;
  height: 97vh;
  position: relative;
`;

const FormWrapper = styled.div`
  background: #fff;
  padding: 10px;
  border-radius: 15px;
  display: flex;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 700px;
  height: 400px;
`;

const StepperWrapper = styled.div`
  background: url(${desktopBg}) no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  width: 130px;
  padding: 30px 40px 30px 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const StepWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const StepNumber = styled.p`
  margin: 0;
  color: ${(props) => (props.active ? "#03295a" : "#fff")};
  border: 1px solid ${(props) => (props.active ? "lightblue" : "#fff")};
  background: ${(props) => (props.active ? "lightblue" : "transparent")};
  border-radius: 50%;
  height: 25px;
  width: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StepDetails = styled.div``;

const StepStepNumber = styled.p`
  margin: 0;
  color: #fff;
  text-transform: uppercase;
  font-size: 12px;
`;

const StepName = styled.p`
  margin: 0;
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 12px;
`;

const ContentWrapper = styled.div`
  background: #fff;
  width: 55%;
  margin: 0 auto;
`;
