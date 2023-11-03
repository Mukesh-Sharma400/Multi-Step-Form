import styled from "styled-components";

export default function StepOne({ onNextStep }) {
  return (
    <>
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
      <NextBtn onClick={onNextStep}>Next Step</NextBtn>
    </>
  );
}

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
