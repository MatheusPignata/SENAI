package controller;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import org.json.JSONArray;
import org.json.JSONObject;

import model.Aluno;

public class AlunoProcess {
	
	private Connection con;
	private ResultSet rs;
	
	public AlunoProcess() {
		this.con = new ConnectionDB().getConnection();
	}
	
	public JSONArray readAll() {
		JSONArray arr = new JSONArray();
		
		String query = "SELECT * FROM aluno";
		
		try {
			PreparedStatement ps = con.prepareStatement(query);
			
			 rs = ps.executeQuery();
			 
			 while(rs.next()) {
				 JSONObject obj = new JSONObject();
				 
				 obj.put("id", rs.getInt(1));
				 obj.put("nome", rs.getString(2));
				 obj.put("peso", rs.getFloat(3));
				 obj.put("altura", rs.getFloat(4));
				 obj.put("nascimento", rs.getInt(5));
				 
				 arr.put(obj);
			 }
			 
			 con.close();
		} catch (SQLException e) {
			
			e.printStackTrace();
		}
		
		return arr;
	}

	public boolean create(Aluno aluno) {
		String query = "INSERT INTO aluno VALUES (DEFAULT,?,?,?,?)";
		
		try {
			PreparedStatement ps = con.prepareStatement(query);
			
			ps.setString(1, aluno.getNome());
			ps.setFloat(2, aluno.getPeso());
			ps.setFloat(3, aluno.getAltura());
			ps.setInt(4, aluno.getNascimento());
			
			if (ps.executeUpdate() > 0) {
				rs = ps.getGeneratedKeys();
				rs.next();
				int novoID = rs.getInt(1);
				aluno.setId(novoID);
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
	
}
