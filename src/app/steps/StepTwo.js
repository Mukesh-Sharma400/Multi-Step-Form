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
  const [isYearlySelected, setIsYearlySelected] = useState(false);
  const handleToggleChange = () => {
    setIsYearlySelected(!isYearlySelected);
  };

  return (
    <DisplayWrapper>
      <Header>
        <Title>Select your plan</Title>
        <Description>
          You have the option of monthly or yearly billing.
        </Description>
      </Header>
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
        <MonthlyTime isSelected={!isYearlySelected}>Monthly</MonthlyTime>
        <Toggle onToggleChange={handleToggleChange} />
        <YearlyTime isSelected={isYearlySelected}>Yearly</YearlyTime>
      </SelectTime>
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

const SelectPlan = styled(ToggleButtonGroup)`
  width: 100%;
  &.css-mjlvw-MuiToggleButtonGroup-root {
    gap: 10px;
  }
`;

const Option = styled(ToggleButton)`
  justify-content: flex-start !important;
  gap: 10px;
  border: 1px solid #c6c8cb !important;
  border-radius: 5px !important;
`;

const Icon = styled.img`
  width: 40px;
  height: 40px;
`;

const Details = styled.div``;

const Name = styled.p`
  margin: 0;
  text-align: start;
  text-transform: none;
  line-height: normal;
  font-weight: bold;
  color: #03295a;
`;

const Price = styled.p`
  margin: 0;
  text-align: start;
  text-transform: none;
  line-height: normal;
  color: gray;
`;

const SelectTime = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const MonthlyTime = styled.p`
  margin: 0;
  color: ${(props) => (props.isSelected ? "#03295a" : "gray")};
  font-weight: ${(props) => (props.isSelected ? "bold" : "normal")};
  width: 65px;
`;

const YearlyTime = styled.p`
  margin: 0;
  color: ${(props) => (props.isSelected ? "#03295a" : "gray")};
  font-weight: ${(props) => (props.isSelected ? "bold" : "normal")};
  width: 65px;
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
