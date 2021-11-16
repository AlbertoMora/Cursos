package com.cursospring.web.app.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/variables")
public class EjemploVariablesPathController {
	
	@GetMapping({"/index", "/" })
	public String index(Model model) {
		model.addAttribute("titulo", "Variables Index");
		return "variables/index";
	}
	
	@GetMapping("/ver/{texto}")
	//If you set the property inside {} with another name than the argument, you can set the PathVariable property name with same value inside {}
	public String variables(@PathVariable String texto, Model model) {
		
		model.addAttribute("titulo", "Recibir parámetros de la ruta");
		model.addAttribute("resultado", "El texto enviado por medio de la ruta es: ".concat(texto));
		
		return "variables/ver";
	}
	
	@GetMapping("/ver/{texto}/{numero}")
	//If you set the property inside {} with another name than the argument, you can set the PathVariable property name with same value inside {}
	public String variables(@PathVariable String texto, @PathVariable Integer numero, Model model) {
		
		model.addAttribute("titulo", "Recibir parámetros de la ruta");
		model.addAttribute("resultado", "El texto enviado por medio de la ruta es: ".concat(texto) + " y el numero es " + numero);
		
		return "variables/ver";
	}
}
