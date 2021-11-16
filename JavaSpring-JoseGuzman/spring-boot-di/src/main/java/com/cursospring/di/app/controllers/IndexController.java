package com.cursospring.di.app.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import com.cursospring.di.app.models.services.IServicio;

@Controller
public class IndexController {
	
	//You can Autowired the property here without using the setter or constructor
	@Autowired
	//With the Qualifier annotation you can inject an specific implementation of the interface
	@Qualifier("miServicioClase")
	private IServicio servicio;
	
	@GetMapping({"/", "", "/index"})
	public String index(Model model) {
		
		model.addAttribute("objeto", servicio.operacion());
		
		return "index";
	}

	
	public IndexController() {
	}
	
	//Injecting by constructor you can omit the Autowired Data Annotation
	/*@Autowired
	public IndexController(IServicio servicio) {
		this.servicio = servicio;
	}*/
	
	
	//This way you can inject the dependency using the setter
	/*@Autowired
	public void setServicio(IServicio servicio) {
		this.servicio = servicio;
	}*/
	
	
	
}
