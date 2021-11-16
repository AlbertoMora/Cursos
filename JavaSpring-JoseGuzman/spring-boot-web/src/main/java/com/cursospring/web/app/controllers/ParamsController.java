package com.cursospring.web.app.controllers;


import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("/params")
public class ParamsController {
	
	@GetMapping("/")
	public String index(Model model) {
		
		return "params/index";
	}
	
	@GetMapping("/string")
	//To set an optional RequestParam you can set the defaultValue property of the annotation or you can also set required property to false or both. 
	public String param(@RequestParam(defaultValue="default text") String texto, Model model) {
		
		model.addAttribute("resultado", "El parámetro enviado es: ".concat(texto));
		model.addAttribute("titulo", "Recibir parámetros del GET");
		return "params/ver";
	}
	
	@GetMapping("/multi-params")
	//To set an optional RequestParam you can set the defaultValue property of the annotation or you can also set required property to false or both. 
	public String param(HttpServletRequest request, Model model) {
		
		String texto = request.getParameter("texto");
		Integer numero = Integer.parseInt(request.getParameter("numero"));
		model.addAttribute("resultado", "El parámetro 1 enviado es: ".concat(texto) + " y el parámetro 2 es: ".concat(numero.toString()));
		model.addAttribute("titulo", "Recibir parámetros del GET");
		return "params/ver";
	}
	
	@GetMapping("/multi-params-s")
	//To set an optional RequestParam you can set the defaultValue property of the annotation or you can also set required property to false or both. 
	public String multiParams(
			@RequestParam(defaultValue="default text") String texto, 
			@RequestParam(defaultValue="default text") Integer numero, 
			Model model) {
		
		model.addAttribute("resultado", "El parámetro 1 enviado es: ".concat(texto) + " y el parámetro 2 es: ".concat(numero.toString()));
		model.addAttribute("titulo", "Recibir parámetros del GET");
		return "params/ver";
	}
}
