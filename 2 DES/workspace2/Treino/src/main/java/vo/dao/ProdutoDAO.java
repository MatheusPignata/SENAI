package vo.dao;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;
import java.util.ArrayList;
import vo.Produto;

public class ProdutoDAO {
	private Produto prod;
	private ArrayList<Produto> produtos;
	private static String arquivo = "c:\\dbs\\Produtos.csv";
	
	public ArrayList<Produto> abrir() {
		produtos = new ArrayList<>();  
		try {
			BufferedReader br = new BufferedReader(new FileReader(arquivo));
			
			String line = null;
			
			while((line = br.readLine()) != null) {
				String[] linha = line.split(";");
				prod = new Produto(Integer.parseInt(linha[0]), linha[1], Float.parseFloat(linha[2]));
				produtos.add(prod);
			}
			
		} catch (Exception e) {
			System.out.println("Erro" + e);
		}
		return produtos;
	}
	
	public boolean salvar(ArrayList<Produto> pd) {
		try {
			BufferedWriter bw = new BufferedWriter(new FileWriter(arquivo, false));
			for (Produto i: pd) {
				bw.write(i.toCsv());
			}
			bw.close();
			return true;
		} catch (Exception e) {
			System.out.println("Erro: " + e);
			return false;
		}
	}
}
