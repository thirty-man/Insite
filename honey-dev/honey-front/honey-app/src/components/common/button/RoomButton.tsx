import { RoomType } from "@customtype/dataTypes";
import { lock } from "@assets/images";

interface RoomButtonProps {
  room: RoomType;
  onClick: () => void;
  className: string;
}

function RoomButton({ room, onClick, className }: RoomButtonProps) {
  const basicType: string = `${className} flex hover:bg-cg-1 hover:scale-110`;
  const lockImg: string = lock;

  return (
    <button type="button" onClick={onClick} className={basicType}>
      <p className="w-[12%] text-left">
        {room.isOpen ? null : (
          <img className="w-[90%]" src={lockImg} alt="잠김" />
        )}
      </p>
      <p className="w-[20%]">{room.id}</p>
      <p className="w-[46%]">
        {room.roomTitle.length <= 10
          ? room.roomTitle
          : `${room.roomTitle.slice(0, 10)}...`}
      </p>
      <p className="w-[26%]">{room.masterName}</p>
    </button>
  );
}

export default RoomButton;
