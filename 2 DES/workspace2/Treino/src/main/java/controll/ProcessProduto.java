package controll;

import java.util.ArrayList;
import vo.Produto;
import vo.dao.ProdutoDAO;

public class ProcessProduto {
	public static ArrayList<Produto> produtos = new ArrayList<>();
	private static ProdutoDAO pd = new ProdutoDAO();
	private static Produto prod;
	
	public static boolean salvar() {
		return pd.salvar(produtos);
	}
	
	public static void abrir() {
		produtos = pd.abrir();
	}
	
	public static void cadastrar(Produto p) {
		produtos.add(p);
		salvar();
	}
	
	public static void remover(Produto p) {
		for(int i = 0; i<produtos.size(); i++) {
			prod = produtos.get(i);
			if(prod.equals(p)) {
				produtos.remove(i);
				salvar();
			}
		}
	}
	
	public static void editar(Produto p) {
		for(int i = 0; i<produtos.size(); i++) {
			prod = produtos.get(i);
			if(prod.equals(p)) {
				produtos.remove(i);
				produtos.add(i, p);
				salvar();
			}
		}
	}
}
