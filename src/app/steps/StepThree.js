import styled from "styled-components";

export default function StepThree({ onPrevStep, onNextStep }) {
  return (
    <>
      <Header>Pick add-ons</Header>
      <Description>Add-ons help enhance your gaming experience.</Description>
      <BottomWrapper>
        <BackBtn onClick={onPrevStep}>Go Back</BackBtn>
        <NextBtn onClick={onNextStep}>Next Step</NextBtn>
      </BottomWrapper>
    </>
  );
}

const Header = styled.p`
  margin: 0;
`;

const Description = styled.p`
  margin: 0;
`;

const BottomWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const BackBtn = styled.p`
  margin: 0;
`;

const NextBtn = styled.button`
  outline: none;
  border: none;
  color: #baccdf;
  background: #03295a;
  border-radius: 10px;
  padding: 10px;
`;
