package view;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.stream.Collectors;

import org.json.JSONArray;
import org.json.JSONObject;

import control.ClienteControler;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import model.Cliente;

@WebServlet("/cliente")
public class ClienteView extends HttpServlet{
	
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		ArrayList<Cliente> clientes = ClienteControler.listarClientes();
		
		JSONArray arr = new JSONArray();
		
		for(Cliente cli : clientes) {
			JSONObject obj = new JSONObject();
			
			obj.put("id", cli.getId());
			obj.put("nome", cli.getNome());
			obj.put("endereco", cli.getEndereco());
			
			arr.put(obj);
		}
		
		PrintWriter pw = resp.getWriter();
		
		pw.write(arr.toString());
	}
	
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		String body = req.getReader().lines().collect(Collectors.joining(System.lineSeparator()));
		
		JSONObject obj = new JSONObject(body);
		
		Cliente cli = new Cliente(obj.getString("nome"), obj.getString("endereco"));
		
		boolean cadastrou = ClienteControler.cadastrarCliente(cli);
		
		PrintWriter pw = resp.getWriter();
		
		pw.write(obj.toString());
	}

}
