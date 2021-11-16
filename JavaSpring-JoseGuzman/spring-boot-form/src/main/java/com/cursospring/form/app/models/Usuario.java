package com.cursospring.form.app.models;

import java.util.Date;

import javax.validation.constraints.Email;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.stereotype.Component;

@Component
public class Usuario {
	
	@NotNull
	@Min(1)
	@Max(23050)
	private Integer id;
	
	@Size(min = 2, max = 3)
	@NotEmpty
	private String name;
	
	//@NotEmpty(message = "")
	private String lastname;
	
	@NotEmpty
	@Email
	//This way you can add a custom validation annotation
	//@EmailRegex
	private String email;
	
	@NotNull
	@DateTimeFormat(pattern = "dd/MM/yyyy")
	private Date birthDate;
	
	//With the annotation Pattern, you can validate a regular expression with the argument "regexp" Example: @Pattern(regexp = "[0-9][\\d]{3}")

	public Usuario() {
	
	}

	public Usuario(String name, String lastname) {
		this.name = name;
		this.lastname = lastname;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String correo) {
		this.email = correo;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Date getBirthDate() {
		return birthDate;
	}

	public void setBirthDate(Date birthDate) {
		this.birthDate = birthDate;
	}
	
	

	
}
