package controller;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import org.json.JSONArray;
import org.json.JSONObject;

import model.Clientes;

public class ClientesProcess {
	
	private Connection con;
	private ResultSet rs;
	
	public ClientesProcess() {
		this.con = new ConnectionDB().getConnection();
	}
	
	public JSONArray readAll() {
		JSONArray arr = new JSONArray();
		
		String query = "SELECT * FROM clientes";
		
		try {
			PreparedStatement ps = con.prepareStatement(query);

			 rs = ps.executeQuery();
			
			 while(rs.next()) {
				 JSONObject obj = new JSONObject();
				 
				 obj.put("id", rs.getInt(1));
				 obj.put("nome", rs.getString(2));
				 obj.put("valor", rs.getFloat(3));
				 obj.put("status", rs.getString(4));
				 
				 arr.put(obj);
			 }
			 
			 con.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		
		return arr;
	}

	public boolean create(Clientes clientes) {
		String query = "INSERT INTO clientes VALUES (DEFAULT, ?, ?, ?)";
		
		try {
			PreparedStatement ps = con.prepareStatement(query);
			
			ps.setString(1, clientes.getNome());
			ps.setFloat(2, clientes.getValor());
			ps.setString(3, clientes.getStatus());
			
			if(ps.executeUpdate() > 0) {
				rs = ps.getGeneratedKeys();
				rs.next();
				int novoID = rs.getInt(1);
				clientes.setId(novoID);
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

	public String update(Clientes clientes) {
		String query = "UPDATE clientes SET nome = ?, valor = ?, status = ? WHERE id = ?";
		
		try {
			PreparedStatement ps = con.prepareStatement(query);
			
			ps.setString(1, clientes.getNome());
			ps.setFloat(2, clientes.getValor());
			ps.setString(3, clientes.getStatus());
			ps.setInt(4, clientes.getId());
			
			if(ps.executeUpdate() > 0) {
				con.close();
				return "sucesso";
			}
			
			con.close();
		} catch (SQLException e) {
			return e.toString();
			//e.printStackTrace();
		}
		
		return "Falha ao atualizar cadastro"; 
	}

	public boolean delete(int id) {
		String query = "DELETE FROM clientes WHERE id = ?";
		
		try {
			PreparedStatement ps = con.prepareStatement(query);
			
			ps.setInt(1, id);
			
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
