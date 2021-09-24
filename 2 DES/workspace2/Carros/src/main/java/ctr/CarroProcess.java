package ctr;

import java.util.ArrayList;

import vo.Carro;
import vo.dao.CarroDAO;

public class CarroProcess {

	public static ArrayList<Carro>carros;
	public static CarroDAO ld = new CarroDAO();
	
	public static void testes() {
		carros = new ArrayList<>();
		carros.add(new Carro("1","Ferrari","2002","45.000"));
	}
	public static void abrir() {
		carros = ld.ler();
		
	}
	public static void salvar() {
		ld.escrever(carros);
	}
}
