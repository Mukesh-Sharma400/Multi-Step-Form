import { useState } from "react";
import styled from "styled-components";
import Toggle from "../components/Toggle";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const arcade = "/assets/images/icon-arcade.svg";
const advanced = "/assets/images/icon-advanced.svg";
const pro = "/assets/images/icon-pro.svg";

export default function StepTwo({ onPrevStep, onNextStep }) {
  const [view, setView] = useState(null);
  const handleOptionChange = (event, nextView) => {
    setView(nextView);
  };

  return (
    <>
      <Header>Select your plan</Header>
      <Description>
        You have the option of monthly or yearly billing.
      </Description>
      <SelectPlan
        orientation="vertical"
        value={view}
        exclusive
        onChange={handleOptionChange}
      >
        <Option value="arcade">
          <Icon src={arcade} alt="arcade" width={100} height={100} />
          <Details>
            <Name>Arcade</Name>
            <Price>$9/mo</Price>
          </Details>
        </Option>
        <Option value="advanced">
          <Icon src={advanced} alt="advanced" width={100} height={100} />
          <Details>
            <Name>Advanced</Name>
            <Price>$12/mo</Price>
          </Details>
        </Option>
        <Option value="pro">
          <Icon src={pro} alt="pro" width={100} height={100} />
          <Details>
            <Name>Pro</Name>
            <Price>$15/mo</Price>
          </Details>
        </Option>
      </SelectPlan>
      <SelectTime>
        <Time>Monthly</Time>
        <Toggle />
        <Time>Yearly</Time>
      </SelectTime>
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

const SelectPlan = styled(ToggleButtonGroup)`
  width: 100%;
  &.css-mjlvw-MuiToggleButtonGroup-root {
    gap: 10px;
  }
`;

const Option = styled(ToggleButton)`
  justify-content: flex-start !important;
  gap: 10px;
  border-radius: 10px !important;
`;

const Icon = styled.img`
  width: 50px;
  height: 50px;
`;

const Details = styled.div``;

const Name = styled.p`
  margin: 0;
  text-align: start;
  text-transform: none;
`;

const Price = styled.p`
  margin: 0;
  text-align: start;
  text-transform: none;
`;

const SelectTime = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Time = styled.p`
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
