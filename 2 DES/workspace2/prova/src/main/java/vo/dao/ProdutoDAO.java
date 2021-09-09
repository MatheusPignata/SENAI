package vo.dao;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;

import vo.Produto;



public class ProdutoDAO {
	
	private BufferedReader br;
	private BufferedWriter bw;
	private String arquivo = "C:\\Users\\aluno\\Desktop\\SENAI AULAS\\2 DES\\dbs\\prova.csv";
	private ArrayList<Produto> produtos;
	private Produto produto;

	public void escrever(ArrayList<Produto> livros) {
		try {
			bw = new BufferedWriter(new FileWriter(arquivo, false));
			for (Produto l : produtos) {
				bw.write(l.toCSV());
			}
			bw.close();
		} catch (IOException e) {
			System.out.println("Erro ao salvar: " + e);
		}
	}

	public ArrayList<Produto> ler() {
		produtos = new ArrayList<>();
		try {
			br = new BufferedReader(new FileReader(arquivo));
			String linha = "";
			while ((linha = br.readLine()) != null) {
				produto = new Produto(linha.split(";"));
				produtos.add(produto);
			}
			br.close();
		} catch (FileNotFoundException e) {
			System.out.println("Arquivo não encontrado: " + e);
		} catch (IOException e) {
			System.out.println("Erro ao abrir: " + e);
		}
		return produtos;
	}
}
