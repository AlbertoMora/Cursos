package com.cursospring.web.app.controllers;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.cursospring.web.app.models.Usuario;

@Controller
@RequestMapping("/app")
public class IndexController {

	@Value("${texto.indexcontroller.index.titulo}")
	private String textoIndex;
	
	@Value("${texto.indexcontroller.perfil.titulo}")
	private String textoPerfil;
	
	@Value("${texto.indexcontroller.listar.titulo}")
	private String textoListar;
	
	// If HTTP method is skipped its default value is GET
	// Also you can use httpMethod+Mapping annotations instead of @RequestMapping,
	// example.: @GetMapping
	// Value is the default parameter, so you can write only "/Index" instead of
	// value = "/Index" when value is the only parameter
	// you can map multiple routes with the same method, example: {"/index", "/",
	// "", "/home"} "" means without / on the top routing, example: domain/app
	@RequestMapping(value = "/home", method = RequestMethod.GET)
	// Instead of Model you can use ModelMap, ModelAndView or Map. If you use Map
	// you need to set the data types <String, Object> and use .put method
	// instead of addAttribute. If you use ModelAndView use the method .addObject
	// instead of addAttribute, and you need to return the ModelAndView instance.
	public String index(Model model) {

		System.out.println(textoIndex);
		model.addAttribute("titulo", textoIndex);

		return "index";
	}

	@RequestMapping("/perfil")
	public String perfil(Model model) {

		Usuario usuario = new Usuario();
		usuario.setNombre("Alberto");
		usuario.setApellido("Mora");
		usuario.setEmail("alberto@email.com");
		model.addAttribute("usuario", usuario);
		model.addAttribute("titulo", textoPerfil.concat(usuario.getNombre()));

		return "perfil";
	}

	@RequestMapping("/listar")
	public String listar(Model model) {

		


		model.addAttribute("titulo", textoListar);
		//model.addAttribute("usuarios", usuarios);

		return "listar";
	}
	
	
	//This is another way to pass data to the view. Is commonly used to pass data that should be common between controller handlers
	@ModelAttribute("usuarios")
	public List<Usuario> poblarUsuarios() {
		
		List<Usuario> usuarios = Arrays.asList(
				new Usuario("Alberto", "Mora", "alberto@mora.com"),
				new Usuario("Alberto", "Porras", "alberto2@mora.com"),
				new Usuario("Alonso", "Mora", "alonso@mora.com"),
				new Usuario("Tornado", "Mora", "rot@mora.com")
		);
		
		return usuarios;
	}
	
	

}
