package com.cursospring.form.app.validations;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

public class EmailRegexValidator implements ConstraintValidator<EmailRegex, String>{

	@Override
	public boolean isValid(String value, ConstraintValidatorContext context) {
		
		if(value == "This is my validation") {
			return true;
		}
		
		return false;
	}
	
}
