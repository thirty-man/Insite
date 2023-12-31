package com.thirty.insiterealtimereadservice.data.service;

import com.thirty.insiterealtimereadservice.data.dto.response.AbnormalResDto;
import com.thirty.insiterealtimereadservice.data.dto.response.ReferrerResDto;
import com.thirty.insiterealtimereadservice.data.dto.response.UserCountResDto;

public interface DataService {

    ReferrerResDto getReferrer(int memberId, String applicationToken);

    UserCountResDto getUserCount(int memberId, String applicationToken);

    AbnormalResDto getAbnormal(int memberId, String applicationToken);
}
