import styled from "styled-components";

export default function StepOne({ onNextStep }) {
  return (
    <DisplayWrapper>
      <Header>
        <Title>Personal Info</Title>
        <Description>
          Please provide your name, email address and phone number.
        </Description>
      </Header>
      <InputsWrapper>
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
      </InputsWrapper>
      <BottomWrapper>
        <NextBtn onClick={onNextStep}>Next Step</NextBtn>
      </BottomWrapper>
    </DisplayWrapper>
  );
}

const DisplayWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: space-between;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Title = styled.p`
  margin: 0;
  font-size: 26px;
  font-weight: bold;
  color: #03295a;
`;

const Description = styled.p`
  margin: 0;
  font-size: 13px;
  color: gray;
`;

const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  margin: 0;
  color: #03295a;
  font-size: 14px;
`;

const Input = styled.input`
  border: 1px solid #c6c8cb;
  outline: none;
  background: #fff;
  border-radius: 5px;
  padding: 10px;
`;

const BottomWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const NextBtn = styled.button`
  outline: none;
  border: none;
  color: #baccdf;
  background: #03295a;
  border-radius: 5px;
  padding: 10px 0;
  width: 100px;
  font-size: 14px;
  cursor: pointer;
`;
