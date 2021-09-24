package vo.dao;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;

import vo.Carro;

public class CarroDAO {

	private BufferedReader br;
	private BufferedWriter bw;
	private String arquivo = "c:\\dbs\\carros.csv";
	private ArrayList<Carro> carros; 
	private Carro carro; 
	public void escrever(ArrayList<Carro> carros) {
		try {
			bw = new BufferedWriter(new FileWriter(arquivo, false));
			for (Carro l : carros) {
				bw.write(l.toCSV());
			}
			bw.close();
		} catch (IOException e) {
			System.out.println("Erro ao salvar: " + e);
		}
	}

	public ArrayList<Carro> ler() {
		carros = new ArrayList<>();
		try {
			br = new BufferedReader(new FileReader(arquivo));
			String linha = "";
			while ((linha = br.readLine()) != null) {
				carro = new Carro(linha.split(";"));
				carros.add(carro);
			}
			br.close();
		} catch (FileNotFoundException e) {
			System.out.println("Arquivo não encontrado: " + e);
		} catch (IOException e) {
			System.out.println("Erro ao abrir: " + e);
		}
		return carros;
	}
}
