import styled from "styled-components";

export default function StepThree({ onPrevStep, onNextStep }) {
  return (
    <DisplayWrapper>
      <Header>
        <Title>Pick add-ons</Title>
        <Description>Add-ons help enhance your gaming experience.</Description>
      </Header>
      <BottomWrapper>
        <BackBtn onClick={onPrevStep}>Go Back</BackBtn>
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

const BottomWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const BackBtn = styled.p`
  margin: 0;
  cursor: pointer;
  color: gray;
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
