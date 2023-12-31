import { useState, useEffect } from "react";
import { getButtonCount } from "@api/realtimeApi";
import { ButtonCountDtoType } from "@customtypes/dataTypes";
import {
  Border,
  StyledTable,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@assets/styles/tableStyles";

function ButtonStatistics() {
  const [data, setData] = useState<ButtonCountDtoType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getButtonCount(); // await를 사용하여 Promise를 기다립니다.
        if (!response.countPerUserDtoList) setData([]);
        else setData(response.countPerUserDtoList);
      } catch (error) {
        // console.error(error); // 에러 처리
      }
    };

    fetchData();
    const intervalId = setInterval(fetchData, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return data.length > 0 ? (
    <Border>
      <StyledTable>
        <TableHeader>
          <tr>
            <th>버튼</th>
            <th>누른 횟수</th>
            <th>평균 클릭 횟수</th>
          </tr>
        </TableHeader>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.count}</TableCell>
              <TableCell>{(+item.countPerUser).toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>
    </Border>
  ) : (
    <div>데이터가 없습니다.</div>
  );
}

export default ButtonStatistics;
