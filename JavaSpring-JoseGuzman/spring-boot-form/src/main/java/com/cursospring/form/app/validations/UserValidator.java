package com.cursospring.form.app.validations;

import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;
import org.springframework.validation.ValidationUtils;
import org.springframework.validation.Validator;

import com.cursospring.form.app.models.Usuario;

@Component
public class UserValidator implements Validator {
	
	@Override
	public boolean supports(Class<?> clazz) {
		return Usuario.class.isAssignableFrom(clazz);
	}
	
	@Override
	public void validate(Object target, Errors errors) {
		Usuario usuario = (Usuario)target;
		
		ValidationUtils.rejectIfEmpty(errors, "lastname", "NotEmpty.usuario.nombre");
		
		if(usuario.getId() == 255) {
			errors.rejectValue("id", "MatchLockedNumber.usuario.id");
		}
	}
}
