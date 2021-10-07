package database;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class ConexaoMysql {

	public static String status = "Não conectou...";

	public ConexaoMysql() {

	}

	public static Connection getConexaoMySQL() {
		Connection connection = null; 

		try {
			String driverName = "com.mysql.jdbc.Driver";

			Class.forName(driverName);

			String serverName = "localhost"; 
			String mydatabase = "loja";			
			String url = "jdbc:mysql://" + serverName + "/" + mydatabase;
			String username = "root"; 

			String password = "";

			connection = DriverManager.getConnection(url, username, password);

			if (connection != null) {
				status = ("STATUS--->Conectado com sucesso!");
			} else {
				status = ("STATUS--->Não foi possivel realizar conexão");
			}

			return connection;
		} catch (ClassNotFoundException e) {
			System.out.println("O driver expecificado nao foi encontrado.");

			return null;
		} catch (SQLException e) {
			System.out.println("Nao foi possivel conectar ao Banco de Dados.");

			return null;
		}
	}

	public static String statusConection() {
		return status;
	}

	public static boolean FecharConexao() {
		try {
			ConexaoMysql.getConexaoMySQL().close();

			return true;
		} catch (SQLException e) {
			return false;
		}
	}

	public static Connection ReiniciarConexao() {
		FecharConexao();

		return ConexaoMysql.getConexaoMySQL();
	}

}