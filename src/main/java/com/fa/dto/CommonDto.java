package com.fa.dto;

import java.util.List;

public class CommonDto {
	private String status;
	private Object responseData;
	private List<?> responseDto;
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public Object getResponseData() {
		return responseData;
	}
	public void setResponseData(Object responseData) {
		this.responseData = responseData;
	}
	public List<?> getResponseDto() {
		return responseDto;
	}
	public void setResponseDto(List<?> responseDto) {
		this.responseDto = responseDto;
	}

}
