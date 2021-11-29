package controller;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import org.json.JSONArray;
import org.json.JSONObject;

import model.Funcionario;

public class FuncionarioProcess {

	private Connection con;
	private ResultSet rs;
	
	public FuncionarioProcess() {
		this.con = new ConnectionDB().getConnection();
	}
	
	public boolean create (Funcionario funcionario) {
		
		String query = "INSERT INTO funcionario VALUES (DEFAULT, ? , ?, ?)";
		
		try {
			PreparedStatement ps = con.prepareStatement(query);
			
			ps.setString(1, funcionario.getNome_completo());
			ps.setString(2, funcionario.getData_desligamento());
			ps.setFloat(3, funcionario.getUltimo_salario());
			
			if(ps.executeUpdate() > 0) {
				rs = ps.getGeneratedKeys();
				rs.next();
				int novaMatricula = rs.getInt(1);
				funcionario.setMatricula(novaMatricula);
				con.close();
				return true;
			}else {
				con.close();
			}
			
		} catch (SQLException e) {
			e.printStackTrace();
		}
		
		return false;
	}
	
	public JSONArray readAll(int matricula) {
		JSONArray arr = new JSONArray();
		
		String query = "SELECT * FROM funcionario";
		
		if(matricula > 0) {
			query += "  WHERE matricula = ?";
		}
		
		try {
			PreparedStatement ps = con.prepareStatement(query);
			
			if(matricula > 0) {
				ps.setInt(1, matricula);
			}
			
			 rs = ps.executeQuery();
			
			 while(rs.next()) {
				 JSONObject obj = new JSONObject();
				 
				 obj.put("matricula", rs.getInt(1));
				 obj.put("nome_completo", rs.getString(2));
				 obj.put("data_desligamento", rs.getString(3));
				 obj.put("ultimo_salario", rs.getFloat(4));
				 
				 Funcionario f = new Funcionario();
				 f.setUltimo_salario(obj.getFloat("ultimo_salario"));
				 
				 obj.put("aliquota", f.gerarAliquota() + " %");
				 obj.put("IRRF", "R$ " + f.gerarIRRF());
				 
				 arr.put(obj);
			 }
			 
			 con.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		
		return arr;
	}

	public String update(Funcionario funcionario) {
		String query = "UPDATE funcionario SET nome_completo = ?, data_desligamento = ?, ultimo_salario = ? WHERE matricula = ?";
		
		try {
			PreparedStatement ps = con.prepareStatement(query);
			
			ps.setString(1, funcionario.getNome_completo());
			ps.setString(2, funcionario.getData_desligamento());
			ps.setFloat(3, funcionario.getUltimo_salario());
			ps.setInt(4, funcionario.getMatricula());
			
			if(ps.executeUpdate() > 0){
				con.close();
				return "sucesso";
			}
			
			con.close();
		} catch (SQLException e) {
			return e.toString();
		}
		
		return "Falha ao atualizar cadastro";
	}

	public boolean delete(int matricula) {
		
		String query = "DELETE FROM funcionario WHERE matricula = ?";
		
		try {
			PreparedStatement ps = con.prepareStatement(query);
			
			ps.setInt(1, matricula);
			
			if(ps.executeUpdate() > 0) {
				con.close();
				return true;
			}
		} catch (SQLException e) { 

			e.printStackTrace();
		}
		
		return false;
	}
}
