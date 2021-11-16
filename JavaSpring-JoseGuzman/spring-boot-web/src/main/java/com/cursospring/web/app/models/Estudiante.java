package com.cursospring.web.app.models;

public class Estudiante extends Usuario{

	private Integer idCarrera;
	private String direccion;
	
	public Integer getIdCarrera() {
		return idCarrera;
	}
	public void setIdCarrera(Integer idCarrera) {
		this.idCarrera = idCarrera;
	}
	public String getDireccion() {
		return direccion;
	}
	public void setDireccion(String direccion) {
		this.direccion = direccion;
	}
	
	
}
