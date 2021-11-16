package com.cursospring.form.app.validations;

import java.lang.annotation.Retention;
import static java.lang.annotation.RetentionPolicy.RUNTIME;
import static java.lang.annotation.ElementType.FIELD;
import static java.lang.annotation.ElementType.METHOD;

import java.lang.annotation.Target;

import javax.validation.Constraint;
import javax.validation.Payload;

@Constraint(validatedBy = EmailRegexValidator.class)
@Retention(RUNTIME)
@Target({FIELD, METHOD})
public @interface EmailRegex {
	String message() default "{InvalidEmail}";

	Class<?>[] groups() default { };

	Class<? extends Payload>[] payload() default { };
}
