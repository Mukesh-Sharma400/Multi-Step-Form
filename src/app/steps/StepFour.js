import styled from "styled-components";

export default function StepFour({ onPrevStep }) {
  return (
    <>
      <Header>Finishing up</Header>
      <Description>
        Double-check everything looks OK before confirming.
      </Description>
      <BottomWrapper>
        <BackBtn onClick={onPrevStep}>Go Back</BackBtn>
        <NextBtn>Confirm</NextBtn>
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
