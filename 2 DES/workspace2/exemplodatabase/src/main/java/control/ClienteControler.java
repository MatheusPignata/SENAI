package control;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import database.ConexaoMysql;
import model.Cliente;

public class ClienteControler {
	
	public static ArrayList<Cliente> listarClientes(){
		
		ArrayList<Cliente> lista = new ArrayList<>();
		
		Connection con = ConexaoMysql.getConexaoMySQL();
		
		if(con != null) {
			
			String query = "SELECT * FROM clientes;";
			
			try {
				PreparedStatement ps = con.prepareStatement(query);
				
				ResultSet rs =ps.executeQuery();
				
				while(rs.next()) {
					int id = rs.getInt("id");
					String nome = rs.getString("nome");
					String endereco = rs.getString("endereco");
					
					Cliente cli = new Cliente(id, nome, endereco);
					
					lista.add(cli);
				}
				
			} catch (SQLException e) {
				e.printStackTrace();
				
			} finally {
				ConexaoMysql.FecharConexao();
			}
			
		}
		
		return lista;
	}
	
	public static boolean cadastrarCliente(Cliente cli) {
		
		Connection con = ConexaoMysql.getConexaoMySQL();
		
		if(con != null) {
			
			String insert = "INSERT INTO clientes VALUES(DEFAULT, ?, ?);";
			
			try {
				PreparedStatement ps = con.prepareStatement(insert);
				
				ps.setString(1, cli.getNome());
				ps.setString(2,  cli.getEndereco());
				
				return ps.execute();
				} catch (SQLException e) {

				e.printStackTrace();
			} finally {
				ConexaoMysql.FecharConexao();			}
		}
		
		return false;
	}

}
