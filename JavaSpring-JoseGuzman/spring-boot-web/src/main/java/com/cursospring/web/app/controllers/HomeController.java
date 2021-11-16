package com.cursospring.web.app.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {
	
	@GetMapping("/")
	public String home() {
		
		return "redirect:/app/home";
		
	}
	
	//You can also redirect to an external route
	@GetMapping("/google")
	public String google() {
		
		return "redirect:https://www.google.com";
		
	}
	
	//And also can use forward
	//Using this feature, the HTTP request doesn't changes, but you can use it only with internal routes
	@GetMapping("/forward")
	public String forward() {
		return "forward:/app/home";
	}
	
}
