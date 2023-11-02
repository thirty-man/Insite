package com.thirty.insitereadservice.cumulativedata.flow.dto.resDto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UrlFlowResDto {
    private String beforeUrl;
    private int count;

}
