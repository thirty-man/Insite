package com.thirty.insitewriteservice.global.service;

import java.time.Instant;

import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.influxdb.client.InfluxDBClient;
import com.influxdb.client.WriteApi;
import com.influxdb.client.domain.WritePrecision;
import com.influxdb.client.write.Point;
import com.thirty.insitewriteservice.write.dto.DataReqDto;

@Service
public class InfluxDBService {

	@Resource
	private InfluxDBClient influxDBClient;

	@Value("${influxdb.org}")
	private String org;

	@Value("${influxdb.bucket}")
	private String bucket;

	public void writeDataToData(DataReqDto dataReqDto) {

		try (WriteApi writeApi = influxDBClient.getWriteApi()) {
			Point point = Point.measurement("data")
				.addTag("cookieId", dataReqDto.getCookieId())
				.addTag("currentUrl", dataReqDto.getCurrentUrl())
				.addTag("activityId", dataReqDto.getActivityId())
				.addTag("serviceToken", dataReqDto.getApplicationToken())
				.addField("beforeUrl", dataReqDto.getBeforeUrl())
				.addField("responseTime", dataReqDto.getResponseTime())
				.addField("deviceId", dataReqDto.getDeviceId())
				.addField("osId", dataReqDto.getOsId())
				.addField("isNew", dataReqDto.isNew())
				.time(Instant.now(), WritePrecision.MS);

			writeApi.writePoint(bucket, org, point);
		}
	}

	public void writeDataToAbnormal() {
		try (WriteApi writeApi = influxDBClient.getWriteApi()) {
			Point point = Point.measurement("abnormal")
				.addField("value", 456)
				.time(Instant.now(), WritePrecision.MS);

			writeApi.writePoint(bucket, org, point);
		}
	}

	public void writeDataToButton() {
		try (WriteApi writeApi = influxDBClient.getWriteApi()) {
			Point point = Point.measurement("button")
				.addField("value", 456)
				.time(Instant.now(), WritePrecision.MS);

			writeApi.writePoint(bucket, org, point);
		}
	}

	//비동기
	// public void addTSData() {
	// 	Point row = Point.measurement("launcher_client_connection")
	// 		.addTag("privateIp", vo.getPrivateIp())
	// 		.addTag("port", vo.getPort())
	// 		.addField("clientCnt", vo.getClientCnt());
	// 	influxDBClient.getWriteApiBlocking().writePoint(row);
	// }

	//대량넣기
	// try (WriteApi writeApi = influxDBClient.getWriteApi()) {
	// 	List<Point> points = new ArrayList<>();
	//
	// 	// 데이터 포인트 생성 및 리스트에 추가
	// 	Point point1 = Point.measurement("measurement1").addField("field1", value1);
	// 	Point point2 = Point.measurement("measurement2").addField("field2", value2);
	// 	points.add(point1);
	// 	points.add(point2);
	//
	// 	// 리스트에 있는 모든 데이터 포인트를 InfluxDB에 한 번에 쓰기
	// 	writeApi.writePoints(bucket, org, points);
	// }

}