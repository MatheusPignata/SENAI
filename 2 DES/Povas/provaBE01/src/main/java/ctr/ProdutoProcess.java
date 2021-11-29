package ctr;

import java.util.ArrayList;

import vo.Produto;
import vo.dao.ProdutoDAO;

public class ProdutoProcess {
	
	public static ArrayList<Produto> produtos;
	public static ProdutoDAO pd = new ProdutoDAO();
	
	public static void testes() {
		produtos = new ArrayList<>();
		produtos.add(new Produto("1","Controle PS4","Um controle azul de PlayStation 4","R$ 200,00", "2"));
		produtos.add(new Produto("2","Controle Xbox One","Um controle branco de Xbox One","R$ 300,00", "1"));

	}
	
	public static void abrir() {
		produtos = pd.ler();
	}
	
	public static void salvar() {
		pd.escrever(produtos);
	}

}
