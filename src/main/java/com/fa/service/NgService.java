package com.fa.service;

import com.fa.dto.CommonDto;
import com.fa.dto.NgDto;

public interface NgService {

	CommonDto save(NgDto ngDto);

	CommonDto fetch();

	CommonDto edit(NgDto ngDto);

	CommonDto delete(String name);

	CommonDto register(NgDto ngDto);

	CommonDto login(NgDto ngDto);

	CommonDto edit1(String name);

	

}
