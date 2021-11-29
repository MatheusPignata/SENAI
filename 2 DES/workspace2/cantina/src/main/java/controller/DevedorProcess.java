package controller;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import org.json.JSONArray;
import org.json.JSONObject;

import model.Devedor;

public class DevedorProcess {
	
	private Connection con;
	private ResultSet rs;
	
	public DevedorProcess() {
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

	
}
