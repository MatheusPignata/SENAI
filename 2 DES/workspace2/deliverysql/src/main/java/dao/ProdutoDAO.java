package dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import domains.Produto;

public class ProdutoDAO {
	private Connection con;
	private PreparedStatement ps;
	private ArrayList<Produto> produtos;
	private Produto produto;
	
	
	public ArrayList<Produto> readAll() throws SQLException{
		produtos = new ArrayList<>();
		
		String query = "select * from produtos;";
		con = ConnectionDB.getConnection();
		ps = con.prepareStatement(query);
		ResultSet rs = ps.executeQuery();
		
		while(rs.next()) {
			produto = new Produto();
			produto.setIdProduto(rs.getInt("id_produto"));
			produto.setNome(rs.getString("nome"));
			produto.setPreco(rs.getDouble("preco"));
			produtos.add(produto);
			
		}
		
		return produtos;
	}
}
