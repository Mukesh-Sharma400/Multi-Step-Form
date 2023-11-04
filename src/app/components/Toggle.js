import React from "react";
import styled from "styled-components";

const ToggleSwitch = styled.div`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 24px;
  margin: 0;
`;

const ToggleInput = styled.input`
  display: none;
`;

const ToggleLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 50px;
  height: 24px;
  background-color: #2196f3;
  border-radius: 34px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:before {
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    top: 2px;
    left: 2px;
    background-color: #fff;
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s;
  }
`;

const DarkToggleLabel = styled(ToggleLabel)`
  background-color: #03295a;

  ${ToggleInput}:checked + & {
    background-color: #03295a;

    &:before {
      transform: translateX(26px);
    }
  }
`;

function Toggle() {
  return (
    <ToggleSwitch>
      <ToggleInput id="toggle" type="checkbox" />
      <DarkToggleLabel htmlFor="toggle" />
    </ToggleSwitch>
  );
}

export default Toggle;
