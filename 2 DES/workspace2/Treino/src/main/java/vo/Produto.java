package vo;

import java.util.Objects;

public class Produto {
	private int cod;
	private String nome;
	private float preco;
	
	public Produto() {}
	
	public Produto(int cod) {
		this.cod = cod;
	}
	
	public Produto(int cod, String nome, float preco) {
		this.cod = cod;
		this.nome = nome;
		this.preco = preco;
	}

	public Produto(String cod, String nome, String preco) {
		this.cod = Integer.parseInt(cod);
		this.nome = nome;
		this.preco = Float.parseFloat(preco);
	}

	
	public int getCod() {
		return cod;
	}

	public void setCod(int cod) {
		this.cod = cod;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public float getPreco() {
		return preco;
	}

	public void setPreco(float preco) {
		this.preco = preco;
	}

	@Override
	public int hashCode() {
		return Objects.hash(cod);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Produto other = (Produto) obj;
		return cod == other.cod;
	}

	@Override
	public String toString() {
		return cod + "\t" + nome + "\t" + preco + "\n";
	}
	
	public String toCsv() {
		return cod + ";" + nome + ";" + preco + "\n";
	}
	
	public String toHtml() {
		return "<tr><td>" + cod + "</td><td>" + nome + "</td><td>" + preco + "</td><td>" + "<button onclick='excluir(this)'>Excluir item</button><button onclick='editar(this)'>Editar</button>" + "</td></tr><br>";
	}
}
 