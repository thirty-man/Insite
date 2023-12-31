import styled, { css } from "styled-components";
import React, { useEffect, useRef, useState } from "react";
import { dropdownArrow } from "@assets/icons";
import siteLogos from "../header/SiteLogo";

interface ComponentProps {
  width: string;
}

interface ButtonProps {
  height: string;
}

interface BaseType {
  name: string;
  id: number;
}

interface DropDownProps<T extends BaseType>
  extends ComponentProps,
    ButtonProps {
  items: T[];
  initialValue: string;
  onChange: (selectedItem: T) => void;
  openDropdown: boolean;
  close: () => void;
  toggle: () => void;
}

const Component = styled.div<ComponentProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${(props) => props.width};
  min-width: ${(props) => props.width};
  position: relative;
`;

const SelectButton = styled.button<ButtonProps>`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: ${(props) => props.height};
  margin-top: 0.25rem;
  background-color: ${(props) => props.theme.colors.b3};
  border-radius: 0.6rem;
  border: 3px solid #6646ef;
  cursor: pointer;
`;

const Select = styled.div<{ $isThemeSelected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 100%;
  outline: none;
  border: none;
  color: ${(props) => (props.$isThemeSelected ? "#f9fafb" : "gray")};
  font-size: 1rem;
`;

const DropDownStyle = styled.div`
  position: absolute;
  width: 100%;
  background-color: ${(props) => props.theme.colors.b3};
  border-radius: 0.6rem;
  border: 3px solid #6646ef;
  top: 3.5rem;
  height: auto;
  max-height: 10rem;
  z-index: 9999;
  overflow-y: auto;
  @keyframes dropdown {
    0% {
      transform: translateY(-20%);
      height: 10%;
      opacity: 0;
      overflow-y: hidden;
    }
    100% {
      transform: translateY(0);
      height: auto;
      opacity: 1;
      overflow-y: auto;
    }
  }
  animation: dropdown 0.2s ease-out;
`;

const Option = styled.button`
  width: 100%;
  color: white;
  background-color: ${(props) => props.theme.colors.b3};
  font-size: 1rem;
  height: 2.5rem;
  &:hover {
    border-radius: 0.6rem;
    background-color: rgba(255, 255, 255, 0.1);
    cursor: pointer;
  }
`;

interface ArrowProps {
  $dropdown: boolean;
}

const Arrow = styled.div<ArrowProps>`
  width: 0.7rem;
  height: 0.7rem;
  background-image: url(${dropdownArrow});
  background-size: contain; // 이미지 크기 설정
  background-repeat: no-repeat; // 이미지 반복 설정
  background-color: transparent;
  margin-right: 0.5rem;
  filter: invert(100%);
  ${(props) =>
    props.$dropdown
      ? css`
          transform: translate(0, -10%) rotate(180deg);
          transition: transform 0.5s ease;
        `
      : css`
          transform: translate(0, 10%) rotate(0deg);
          transition: transform 0.5s ease;
        `}
`;

const SiteLogo = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.3rem;
  height: 1.3rem;
  padding-left: 0.7rem;
`;

/** 데이터, 너비, 높이(rem) */
function DropDown<T extends BaseType>({
  items,
  width,
  height,
  initialValue,
  onChange,
  openDropdown,
  close,
  toggle,
}: DropDownProps<T>) {
  const [selectedItem, setSelectedItem] = useState<string>(initialValue);

  const selectedSiteLogo = siteLogos[selectedItem || ""];

  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleModal = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        close();
      }
    };
    document.addEventListener("click", handleModal);
    return () => {
      document.removeEventListener("click", handleModal);
    };
  });

  const onClickOption = (e: React.MouseEvent) => {
    const themeValue = e.currentTarget.textContent;
    const selectedThemeObj = items.find((item) => item.name === themeValue);
    if (selectedThemeObj) {
      setSelectedItem(selectedThemeObj.name);
      onChange(selectedThemeObj);
    }
    e.stopPropagation();
    close();
  };

  const onClickSelect = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (items.length > 0) {
      toggle();
    }
  };

  return (
    <Component width={width} ref={dropdownRef} onClick={onClickSelect}>
      <SelectButton height={height} type="button">
        {selectedSiteLogo && (
          <SiteLogo src={selectedSiteLogo} alt="site logo" />
        )}
        <Select $isThemeSelected={selectedItem !== ""}>{selectedItem}</Select>
        <Arrow $dropdown={openDropdown} />
      </SelectButton>
      {openDropdown && (
        <DropDownStyle>
          {items.map((item) => (
            <Option value={item.id} key={item.id} onClick={onClickOption}>
              {item.name}
            </Option>
          ))}
        </DropDownStyle>
      )}
    </Component>
  );
}

export default DropDown;
