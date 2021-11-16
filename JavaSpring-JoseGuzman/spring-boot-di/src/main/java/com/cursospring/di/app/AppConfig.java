package com.cursospring.di.app;

import java.util.Arrays;
import java.util.List;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.cursospring.di.app.models.domain.ItemFactura;
import com.cursospring.di.app.models.domain.Producto;
import com.cursospring.di.app.models.services.IServicio;
import com.cursospring.di.app.models.services.MiServicioClase;


//The use of this class let us implement injection with a simple plain Java Class
@Configuration
public class AppConfig {
	
	@Bean("miServicioClase")
	public IServicio registrarServicio() {
		return new MiServicioClase();
	}
	
	@Bean
	public List<ItemFactura> registrarItems() {
		
		Producto producto1 = new Producto("Camara Sony", 100);
		Producto producto2 = new Producto("Camara Canon", 150);
		
		ItemFactura item1 = new ItemFactura(producto1, 2);
		ItemFactura item2 = new ItemFactura(producto2, 4);
		
		
		return Arrays.asList(item1, item2);
	}
}
