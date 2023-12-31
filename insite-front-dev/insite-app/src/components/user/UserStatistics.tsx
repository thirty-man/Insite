import { useEffect, useState } from "react";
import { UserStatisticsDtoType } from "@customtypes/dataTypes";
import { useSelector } from "react-redux";
import { RootState } from "@reducer";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { getUserCount } from "@api/accumulApi";

function UserStatistics() {
  const [data, setData] = useState<UserStatisticsDtoType[]>([]);

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
        const response = await getUserCount(
          parseStartDateTime,
          parseEndDateTime,
        );
        if (!response.userCountDtoList) setData([]);
        else setData(response.userCountDtoList);
      } catch (error) {
        // console.error(error); // 에러 처리
      }
    };

    fetchData();
  }, [endDateTime, startDateTime]);

  // 카테고리 배열 생성
  const categories = data.map((item) => item.currentUrl);

  // 데이터 배열 생성
  const seriesData = data.map((item) => item.userCount);

  // 차트 구성
  const options = {
    credits: {
      enabled: false, // 워터마크 제거
    },
    accessibility: {
      enabled: false,
    },
    chart: {
      type: "column",
      backgroundColor: "transparent",
      marginTop: 40,
      width: 300, // 차트의 너비 설정
      height: 300, // 차트의 높이 설정
    },
    title: "",
    plotOptions: {
      series: {
        showInLegend: false,
      },
    },
    xAxis: {
      categories,
      labels: {
        style: {
          color: "white",
        },
      },
    },
    yAxis: {
      title: "",
      labels: {
        style: {
          color: "white",
        },
      },
    },
    series: [
      {
        name: "방문수",
        data: seriesData,
        colors: [
          "#9b20d9",
          "#9215ac",
          "#861ec9",
          "#7a17e6",
          "#7010f9",
          "#691af3",
          "#6225ed",
          "#5b30e7",
          "#533be1",
          "#4c46db",
          "#4551d5",
          "#3e5ccf",
          "#3667c9",
          "#2f72c3",
          "#277dbd",
          "#1f88b7",
          "#1693b1",
          "#0a9eaa",
          "#03c69b",
          "#00f194",
        ],
        colorByPoint: true,
        groupPadding: 0,
      },
    ],
  };

  return data.length > 0 ? (
    <HighchartsReact highcharts={Highcharts} options={options} />
  ) : (
    <div>데이터가 없습니다.</div>
  );
}

export default UserStatistics;
