package com.cursospring.di.app.models.services;

import org.springframework.stereotype.Service;


//You can use Component or Service, the difference is just that Service is the most semantic way.
@Service("miServicioSimple")
public class MiServicio implements IServicio{
	
	//If a constructor method with params exists, you need to create a default constructor without them. This is required by Spring Component
	
	@Override
	public String operacion() {
		return "El objeto simple ha sido insertado con éxito";
	}
	
}
