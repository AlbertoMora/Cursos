package com.cursospring.di.app.models.services;


//To implement the inject using a plain class, you need to create a config class in the root package, and register the bean there.
public class MiServicioClase implements IServicio{
	
	//If a constructor method with params exists, you need to create a default constructor without them. This is required by Spring Component
	
	@Override
	public String operacion() {
		return "El objeto complejo ha sido insertado con éxito desde Clase";
	}
	
}
