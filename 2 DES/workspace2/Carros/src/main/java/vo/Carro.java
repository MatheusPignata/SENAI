package vo;

import java.util.Objects;

public class Carro {
	int id;
	String nome;
	int ano;
	float valor;
	
	
	
	public Carro(int id, String nome, int ano, float valor) {
	
		this.id = id;
		this.nome = nome;
		this.ano = ano;
		this.valor = valor;
	}
	public Carro(String id, String nome, String ano, String valor ) {
		this.id = Integer.valueOf(id);
		this.nome = nome;
		this.ano = Integer.valueOf(ano);
		this.valor = Float.valueOf(valor);
		
	}
	public Carro(String [] vetor ) {
		this.id = Integer.valueOf(vetor[0]);
		this.nome = vetor[1];
		this.ano = Integer.valueOf(vetor[2]);
		this.valor = Float.valueOf(vetor[3]);
	}
	public Carro(String id) {
		this.id=Integer.valueOf(id);
	}
	public Carro() {
		
	}
		
	

	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public int getAno() {
		return ano;
	}
	public void setAno(int ano) {
		this.ano = ano;
	}
	public float getValor() {
		return valor;
	}
	public void setValor(float valor) {
		this.valor = valor;
	}
	@Override
	public int hashCode() {
		return Objects.hash(id);
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Carro other = (Carro) obj;
		return id == other.id;
	}
	@Override
	public String toString() {
		return  id + "\t" + nome + "\t" + ano + "\t" + valor + "\n";
	}
	public String toCSV() {
		return  id + ";" + nome + ";" + ano + ";" + valor + "\r\n";
	}
	public String toHTML() {
		return "<td>"+ id + "</td><td>" + nome + "</td><td>" + ano + "</td><td>" + valor + "</td>";
	}
	
	
}
