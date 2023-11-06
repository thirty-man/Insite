package com.thirty.insitewriteservice.longtime;

import org.springframework.stereotype.Service;

import com.thirty.insitewriteservice.global.service.InfluxDBService;
import com.thirty.insitewriteservice.global.service.KafkaProducer;
import com.thirty.insitewriteservice.write.dto.DataReqDto;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class LongtimeServiceImpl implements LongtimeService {
	private final InfluxDBService influxDBService;
	private final KafkaProducer kafkaProducer;

	@Override
	public void writeLongData(DataReqDto dataReqDto) {

		kafkaProducer.send("data", dataReqDto);

		//influxDBService.writeDataToData(dataReqDto);
	}
}