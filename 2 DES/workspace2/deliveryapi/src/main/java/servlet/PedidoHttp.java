package servlet;

import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.stream.Collectors;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import controllers.PedidoProcess;
import domains.Pedido;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@WebServlet("/pedidos")
public class PedidoHttp extends HttpServlet {

	private static final long serialVersionUID = 1L;

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		PrintWriter pw = resp.getWriter();
		resp.setContentType("application/json");
		resp.setCharacterEncoding("utf8");
		PedidoProcess.abrir();
		
		String body = req.getReader().lines().collect(Collectors.joining(System.lineSeparator()));
		try {
			JSONObject jIn = new JSONObject(body);
			int id = jIn.getInt("id");
			if (PedidoProcess.pedidos.contains(new Pedido(id))) {
				int indice = PedidoProcess.pedidos.indexOf(new Pedido(id));// Obtem o indice
				pw.print(PedidoProcess.pedidos.get(indice).toJSON());
			} else {
				resp.setStatus(HttpServletResponse.SC_NOT_FOUND);
			}
		}catch (JSONException e) {
			System.out.println("Erro na conversão JSON " + e);
		}

		if (body.equals("")) {
			JSONArray vetor = new JSONArray(); // Cria um vetor para armazenar cada obj json
			for (Pedido p : PedidoProcess.pedidos) {
				vetor.put(p.toJSON());// Preenche o vetor
			}
			pw.print(vetor);
		}
		
		
		/*
		String id = req.getParameter("id");
		if(id != null) {
			if(PedidoProcess.pedidos.contains(new Pedido(id))) {
				int indice = PedidoProcess.pedidos.indexOf(new Pedido(id));
				pw.print(PedidoProcess.pedidos.get(indice).toJSON());
			}else {
				pw.print("ID não encontrado");
			}
			
		}else {
			PedidoProcess.abrir();
			
			JSONArray vetor = new JSONArray();
			for(Pedido p: PedidoProcess.pedidos) {
				vetor.put(p.toJSON());
			}
			
			pw.print(vetor);	
		}
		*/
	}
	
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		PrintWriter pw = resp.getWriter();
		resp.setContentType("application/json");
		resp.setCharacterEncoding("utf8");
		PedidoProcess.abrir();
		String body = req.getReader().lines().collect(Collectors.joining(System.lineSeparator()));
		
		try {
			JSONObject jin = new JSONObject(body);
			PedidoProcess.pedidos.add(new Pedido(jin.getString("cliente"),jin.getString("endereco"),jin.getString("produto")));
			PedidoProcess.salvar();
			resp.setStatus(HttpServletResponse.SC_CREATED);
;
			}catch (JSONException e) {
			System.out.println("Erro na conversão JSON " + e);
		}
	}

}