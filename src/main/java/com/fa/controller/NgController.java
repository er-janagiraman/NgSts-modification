package com.fa.controller;

import javax.annotation.Resource;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.fa.dto.CommonDto;
import com.fa.dto.NgDto;
import com.fa.service.NgService;

@Controller
@CrossOrigin(origins = "*", maxAge = 3600)
public class NgController {

	@Resource
	NgService ngService;
	
					//	Save API
	@RequestMapping(value = "/save", method = RequestMethod.POST)
	public ResponseEntity<?> save(@RequestBody NgDto ngDto) {
//		System.err.println(ngDto);
		CommonDto commonDto = ngService.save(ngDto);
		return new ResponseEntity<CommonDto>(commonDto,HttpStatus.OK);
		
	}
					//	Fetch API
	@RequestMapping(value="/fetch",method=RequestMethod.GET)
	public ResponseEntity<?> fetch(){
		CommonDto res = ngService.fetch();
//		System.err.println(res);
		return new ResponseEntity<CommonDto>(res,HttpStatus.OK);
	}
					//	Edit API
	@RequestMapping(value = "/edit", method = RequestMethod.POST)
	public ResponseEntity<?> edit(@RequestBody NgDto ngDto) {
//		System.err.println(ngDto);
		CommonDto commonDto = ngService.edit(ngDto);
		return new ResponseEntity<CommonDto>(commonDto,HttpStatus.OK);
		
	}
					//	Delete API
	@RequestMapping(value = "/delete", method = RequestMethod.POST)
	public ResponseEntity<?> delete(@RequestParam(name = "name") String name) {
	//	System.err.println(name);
		CommonDto commonDto = ngService.delete(name);
		return new ResponseEntity<CommonDto>(commonDto,HttpStatus.OK);
		
	}
					//	Register API
	@RequestMapping(value = "/register", method = RequestMethod.POST)
	public ResponseEntity<?> register(@RequestBody NgDto ngDto) {
//		System.err.println(ngDto);
		CommonDto commonDto = ngService.register(ngDto);
		return new ResponseEntity<CommonDto>(commonDto,HttpStatus.OK);
		
	}
					//	Login API
	@RequestMapping(value = "/login", method = RequestMethod.POST)
	public ResponseEntity<?> login(@RequestBody NgDto ngDto) {
//		System.err.println(ngDto);
		CommonDto commonDto = ngService.login(ngDto);
		return new ResponseEntity<CommonDto>(commonDto,HttpStatus.OK);
		
	}
	
	//	Edit API
	@RequestMapping(value = "/edit1", method = RequestMethod.POST)
	public ResponseEntity<?> edit1(@RequestParam(name = "ename") String name) {
		//System.err.println(ngDto);
		CommonDto commonDto = ngService.edit1(name);
		return new ResponseEntity<CommonDto>(commonDto,HttpStatus.OK);

	}

}
