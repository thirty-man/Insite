import { useEffect, useState } from "react";
import Highcharts from "highcharts";
import { ChartDtoType, OSActiveUserDtoType } from "@customtypes/dataTypes";
import HighchartsReact from "highcharts-react-official";
import { getOsActiveUser } from "@api/accumulApi";
import { RootState } from "@reducer";
import { useSelector } from "react-redux";

// OS별 활동 사용자 수
function OsActiveUser() {
  const [data, setData] = useState<ChartDtoType[]>([]);

  const startDateTime = useSelector(
    (state: RootState) => state.DateSelectionInfo.start,
  );

  const endDateTime = useSelector(
    (state: RootState) => state.DateSelectionInfo.end,
  );
  useEffect(() => {
    const parseStartDateTime = new Date(startDateTime);
    const parseEndDateTime = new Date(endDateTime);
    const fetchData = async () => {
      try {
        const response = await getOsActiveUser(
          parseStartDateTime,
          parseEndDateTime,
        );
        const newData = response.osActiveUserDtoList;

        const seriesData = newData.map((item: OSActiveUserDtoType) => ({
          name: item.os,
          y: Number(Math.round(item.ratio * 100).toFixed(2)),
          dataLabels: {
            enabled: true,
            format: `{point.name}:<br> 횟수: ${item.count}`,
            style: {
              fontSize: "15px",
              textOutline: "2px 2px white",
            },
          },
        }));

        if (!newData) setData([]);
        else setData(seriesData);
      } catch (error) {
        // console.error(error); // 에러 처리
      }
    };

    fetchData();
  }, [endDateTime, startDateTime]);

  const options = {
    credits: {
      enabled: false, // 워터마크 제거
    },
    accessibility: {
      enabled: false,
    },
    chart: {
      type: "pie",
      backgroundColor: "transparent",
      width: 350, // 차트의 너비 설정
      height: 300, // 차트의 높이 설정
    },
    title: {
      text: null,
    },
    plotOptions: {
      pie: {
        innerSize: "50%",
        depth: 45,
      },
    },
    tooltip: {
      style: {
        fontSize: "18px",
      },
      padding: 15,
    },
    series: [
      {
        name: "사용량(%)",
        data,
      },
    ],
  };

  return data.length > 0 ? (
    <HighchartsReact highcharts={Highcharts} options={options} />
  ) : (
    <div>데이터가 없습니다.</div>
  );
}

export default OsActiveUser;
