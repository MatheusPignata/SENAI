package controllers;

import java.util.ArrayList;

import models.Produto;

public class ProdutoProcess {

	public static ArrayList<Produto> produtos;
	
	public static void iniciar() {
		produtos = new ArrayList<>();
		produtos.add(new Produto(1,"Arroz","Pct. de 5kg Pateco",19.95f,10));
		produtos.add(new Produto(2,"Feij�o","Carioca Broto Legal 1Kg",10.5f,20));
		produtos.add(new Produto(3,"Macarr�o","Galo Conchinha 500g",4.25f,30));
		produtos.add(new Produto(4,"Macarr�o","Galo Espaguete 500g",4.25f,30));
		produtos.add(new Produto(5,"Macarr�o","Galo Pene 500g",4.25f,30));
	}
}