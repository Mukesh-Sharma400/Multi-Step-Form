import { useState } from "react";
import styled from "styled-components";
import Switch from "@mui/material/Switch";
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
        <AntSwitch defaultChecked />
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
`;

const Option = styled(ToggleButton)`
  justify-content: flex-start;
  gap: 10px;
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

const AntSwitch = styled(Switch)(() => ({
  width: 28,
  height: 16,
  padding: 0,
  display: "flex",
  "&:active": {
    "& .MuiSwitch-thumb": {
      width: 15,
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      transform: "translateX(9px)",
    },
  },
  "& .MuiSwitch-switchBase": {
    padding: 2,
    "&.Mui-checked": {
      transform: "translateX(12px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: "#1890ff",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  "& .MuiSwitch-track": {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    boxSizing: "border-box",
  },
}));

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
