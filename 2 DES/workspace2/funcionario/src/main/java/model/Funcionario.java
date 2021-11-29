package model;

public class Funcionario {
	
	private int matricula;
	private String nome_completo;
	private String data_desligamento;
	private float ultimo_salario;
	
	public int getMatricula() {
		return matricula;
	}
	public void setMatricula(int matricula) {
		this.matricula = matricula;
	}
	public String getNome_completo() {
		return nome_completo;
	}
	public void setNome_completo(String nome_completo) {
		this.nome_completo = nome_completo;
	}
	public String getData_desligamento() {
		return data_desligamento;
	}
	public void setData_desligamento(String data_desligamento) {
		this.data_desligamento = data_desligamento;
	}
	public float getUltimo_salario() {
		return ultimo_salario;
	}
	public void setUltimo_salario(float ultimo_salario) {
		this.ultimo_salario = ultimo_salario;
	}
	
	
	public float gerarAliquota() {
		float aliquota = 0;
		
		if(this.ultimo_salario <= 1980.90) {
			aliquota = (float) 0;
		}else if(this.ultimo_salario > 1980.90 && this.ultimo_salario <= 2940.85) {
			aliquota = (float) 0.075;
		}else if (this.ultimo_salario > 2940.85 &&  this.ultimo_salario <= 3902.59) {
			aliquota = (float) 0.15;
		}else if(this.ultimo_salario > 3902.59  && this.ultimo_salario <= 4853.13) {
			aliquota = (float) 0.225;
		}else {
			aliquota = (float) 0.275;
		}
		
		return aliquota;
	}
	
	public float gerarIRRF() {
		float irrf = this.ultimo_salario * gerarAliquota();
		
		return irrf;
	}

}
