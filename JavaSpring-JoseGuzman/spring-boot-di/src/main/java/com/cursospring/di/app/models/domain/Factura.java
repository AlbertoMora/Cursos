package com.cursospring.di.app.models.domain;

import java.util.List;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.context.annotation.RequestScope;

//Components are established as a Singleton by default on its scope, this means, the components exist during the whole life-cycle of the app 
//and only 1 instance exists. To change this you need to use scope Data Annotations, for example: RequestScope which create a scope where the
//component will last only during the HTTP request exists. This changes DOESN'T AFFECT the internal properties, this means, in this class
//Cliente property will keep existing only once during the whole life-cycle of the app, which triggers that the Cliente will concatenated 
//the name multiple times on the method onInit
//RequestScope: HTTP Request, SessionScope: HTTP Session, ApplicationScope: Servlet
@Component
@RequestScope
public class Factura {

	@Value("${factura.descripcion}")
	private String descripcion;
	@Autowired
	private Cliente cliente;
	@Autowired
	private List<ItemFactura> items;

	//A method annotated with PostConstruct is executed once the component is created and after the dependencies have been injected.
	@PostConstruct
	public void onInit() {
		cliente.setNombre(this.cliente.getNombre().concat(" ").concat("Alonso"));
		descripcion += " ".concat(cliente.getNombre());
	}
	
	//A method annotated with PreDestroy is executed before the component is destroyed
	//On the session scope this method will no be executed
	@PreDestroy
	public void onDestroy() {
		System.out.println("Factura destruída ".concat(descripcion));
	}
	
	public String getDescripcion() {
		return descripcion;
	}
	
	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public Cliente getCliente() {
		return cliente;
	}

	public void setCliente(Cliente cliente) {
		this.cliente = cliente;
	}

	public List<ItemFactura> getItems() {
		return items;
	}

	public void setItems(List<ItemFactura> items) {
		this.items = items;
	}

}
