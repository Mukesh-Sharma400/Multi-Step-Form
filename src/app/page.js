"use client";

import styled from "styled-components";

const desktopBg = "/assets/images/bg-sidebar-desktop.svg";

export default function Home() {
  return (
    <DisplayWrapper>
      <FormWrapper>
        <StepperWrapper>
          <StepWrapper>
            <StepNumber>1</StepNumber>
            <StepDetails>
              <StepStepNumber>Step 1</StepStepNumber>
              <StepName>Your Info</StepName>
            </StepDetails>
          </StepWrapper>
          <StepWrapper>
            <StepNumber>2</StepNumber>
            <StepDetails>
              <StepStepNumber>Step 2</StepStepNumber>
              <StepName>Select Plan</StepName>
            </StepDetails>
          </StepWrapper>
          <StepWrapper>
            <StepNumber>3</StepNumber>
            <StepDetails>
              <StepStepNumber>Step 3</StepStepNumber>
              <StepName>Add-Ons</StepName>
            </StepDetails>
          </StepWrapper>
          <StepWrapper>
            <StepNumber>4</StepNumber>
            <StepDetails>
              <StepStepNumber>Step 4</StepStepNumber>
              <StepName>Summary</StepName>
            </StepDetails>
          </StepWrapper>
        </StepperWrapper>
        <ContentWrapper>
          <Header>Personal Info</Header>
          <Description>
            Please provide your name, email address and phone number.
          </Description>
          <InputWrapper>
            <Label>Name</Label>
            <Input placeholder="e.g. Stephen King" />
          </InputWrapper>
          <InputWrapper>
            <Label>Email Address</Label>
            <Input placeholder="e.g. stephenking@lorem.com" />
          </InputWrapper>
          <InputWrapper>
            <Label>Phone Number</Label>
            <Input placeholder="e.g. +1 234 567 890" />
          </InputWrapper>
          <NextBtn>Next Step</NextBtn>
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
  border-radius: 10px;
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const StepperWrapper = styled.div`
  background: url(${desktopBg}) no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 10px;
`;

const StepWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StepNumber = styled.p`
  margin: 0;
  color: #fff;
  border: 1px solid #fff;
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
`;

const StepName = styled.p`
  margin: 0;
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
`;

const ContentWrapper = styled.div`
  background: #fff;
`;

const Header = styled.p`
  margin: 0;
`;

const Description = styled.p`
  margin: 0;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin: 0;
`;

const Input = styled.input`
  border: 1px solid #c6c8cb;
  outline: none;
  background: #fff;
  border-radius: 10px;
  padding: 10px;
`;

const NextBtn = styled.button`
  float: right;
  outline: none;
  border: none;
  color: #baccdf;
  background: #03295a;
  border-radius: 10px;
  padding: 10px;
`;
