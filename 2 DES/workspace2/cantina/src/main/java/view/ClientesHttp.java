package view;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.stream.Collectors;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import controller.ClientesProcess;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import model.Clientes;

@WebServlet("/clientes")
public class ClientesHttp extends HttpServlet{
	
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		PrintWriter pw = resp.getWriter();
		
		String body = req.getReader().lines().collect(Collectors.joining(System.lineSeparator()));
		
		try {
			JSONObject obj = new JSONObject(body);
			
			String nome = obj.getString("nome");
			float valor = obj.getFloat("valor");
			String status = obj.getString("status");
			
			Clientes c = new Clientes();
			c.setNome(nome);
			c.setValor(valor);
			c.setStatus(status);
			
			ClientesProcess cp = new ClientesProcess();
			
			if(cp.create(c) == true) {
				obj.put("id", c.getId());
				pw.write(obj.toString());
			}else {
				resp.setStatus(401);
			}
			
		}catch(JSONException e){
			e.printStackTrace();
		}
	}

	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		PrintWriter pw = resp.getWriter();		
		ClientesProcess cp = new ClientesProcess();
		
		JSONArray arr = cp.readAll();
		
		pw.write(arr.toString());
	}
	
	protected void doPut(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		PrintWriter pw = resp.getWriter();
		
		String body = req.getReader().lines().collect(Collectors.joining(System.lineSeparator()));
		
		JSONObject retJson = new JSONObject();
		
		try {
			JSONObject obj = new JSONObject(body);
			
			Clientes c = new Clientes();
			
			c.setId(obj.getInt("id"));
			c.setNome(obj.getString("nome"));
			c.setValor(obj.getFloat("valor"));
			c.setStatus(obj.getString("status"));
			
			ClientesProcess cp = new ClientesProcess();
			
			String ret = cp.update(c);
			
			if(ret.equals("sucesso")) {
				pw.write(obj.toString());
			}else {
				resp.setStatus(401);
				retJson.put("err", ret);
				pw.write(retJson.toString());
			}
		} catch (Exception e) {
			resp.setStatus(401);
			pw.write("{err:'" + e.toString() + "'}");
		}
	}
	
	protected void doDelete(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		PrintWriter pw = resp.getWriter();
		
		String tempId = req.getParameter("id");
		
		int id = Integer.parseInt(tempId);
		
		ClientesProcess ap = new ClientesProcess();
		
		if(ap.delete(id) == true) {
			pw.write("{'id':" + id + "}");
		}else {
			resp.setStatus(401);
		}
	}
}
