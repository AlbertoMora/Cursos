package com.cursospring.di.app.models.services;

import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;


//You can use Component or Service, the difference is just that Service is the most semantic way.
@Service("miServicioComplejo")
//This Data Annotation let the container know which is the default bean that will be used when they try to inject a property 
//that references this interface
@Primary
public class MiServicioComplejo implements IServicio{
	
	//If a constructor method with params exists, you need to create a default constructor without them. This is required by Spring Component
	
	@Override
	public String operacion() {
		return "El objeto complejo ha sido insertado con éxito";
	}
	
}
