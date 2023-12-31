import styled from "styled-components";
import { IconCalendar } from "@assets/icons";

interface CalendarButtonProps {
  date: string;
  onClick: (e: React.MouseEvent) => void;
}

const Border = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 100px;
  width: 50%;
  height: 80%;
  border-radius: 12px;
  margin-left: 5px;
  margin-right: 5px;

  &:hover {
    background-color: gray;
    opacity: 75%;
  }
`;

const DateText = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const DateImg = styled.img`
  width: 30%;
  height: 50%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
  filter: invert(100%);
`;

const CalendarContainer = styled.div`
  width: 100%;
  height: 100%;
  min-width: 200px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 5px;
`;

function CalendarButton({ date, onClick }: CalendarButtonProps) {
  return (
    <Border>
      <CalendarContainer onClick={onClick}>
        <DateText>{date}</DateText>
        <DateImg src={IconCalendar} alt="calendar icon" />
      </CalendarContainer>
    </Border>
  );
}
export default CalendarButton;
