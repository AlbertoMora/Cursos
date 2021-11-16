package com.cursospring.form.app.controllers;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.bind.support.SessionStatus;

import com.cursospring.form.app.models.Usuario;
import com.cursospring.form.app.validations.UserValidator;

@Controller
@RequestMapping("/form")
@SessionAttributes("usuario")
public class FormController {
	
	//@Autowired
	//private UserValidator validador;
	
	//@InitBinder
	//public void initBinder(WebDataBinder binder) {
		//binder.setValidator(validador); replace the default validator
		//binder.addValidator(validador); add an additional validator
	//}
	
	@GetMapping({"", "/"})
	public String getForm(Model model) {
		Usuario usuario = new Usuario();
		//This way you can pass default info to the view form
		usuario.setEmail("alberto@mail.com");
		usuario.setId(1);
        model.addAttribute("usuario", usuario);
		return "form";
	}
	
	@PostMapping({"", "/"})
	//BindingResult argument must be just after the validated object
	public String postForm(@Valid Usuario usuario, BindingResult result, Model model, SessionStatus status) {
		
		//With the commented sentence you can validate with an injected custom validation Class, line 24 and line 47
		//another alternative you can register the validator on the InitBinder, line 28
		//validador.validate(usuario, result);
		if(!result.hasErrors()) {			
			model.addAttribute("user", usuario);
			status.setComplete();
		}else {
			
			//This is the custom form, but it's not recommended
//			Map<String, String> errores = new HashMap<>();
//			
//			result.getFieldErrors().forEach(err -> {
//				errores.put(err.getField(), "El campo ".concat(err.getField()).concat(" ").concat(err.getDefaultMessage()));
//			});
			
//			model.addAttribute("errores", errores);
			return "form";
		}
		
		return "resultado";
	}
}
