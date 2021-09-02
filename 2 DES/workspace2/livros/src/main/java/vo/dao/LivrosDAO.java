package vo.dao;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;

import vo.Livros;

public class LivrosDAO {
	private Livros livro;
	private ArrayList<Livros> livros;
	private BufferedReader br;
	private BufferedWriter bw;
	private String arquivo = "C:\\Users\\aluno\\Desktop\\SENAI AULAS\\2 DES\\dbs\\livros.csv";
	
	public ArrayList<Livros> abrir() {
		livros = new ArrayList<>();
		try {
			br = new BufferedReader(new FileReader(arquivo));
			String linha = "";
			while ((linha = br.readLine()) != null) {
				livro = new Livros(linha.split(";"));
				livros.add(livro);
			}
			br.close();
		} catch (IOException e) {
			System.out.println("Erro ao abrir arquivo: " + e);
		}
		return livros;
	}

	public boolean salvar(ArrayList<Livros> vs) {
		try {
			bw = new BufferedWriter(new FileWriter(arquivo, false));
			for (Livros l : livros) {
				bw.write(l.toCSV());
			}
			bw.close();
			return true;
		} catch (IOException e) {
			System.out.println("Erro ao gravar arquivo: " + e);
			return false;
		}
	}
}
