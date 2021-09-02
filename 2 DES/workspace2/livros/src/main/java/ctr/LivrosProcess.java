package ctr;

import java.util.ArrayList;

import vo.Livros;
import vo.dao.LivrosDAO;


public class LivrosProcess {
	
	public static ArrayList<Livros> livros = new ArrayList<>();
	public static LivrosDAO ld = new LivrosDAO();
	
	public static void abrir() {
		livros = ld.abrir();
	}
	
	public static String salvar() {
		if(ld.salvar(livros)) {
			return "<p>Salvo com sucesso!</p>";
		} else {
			return "<p>Falha ao salvar!</p>";
		}
	}
}