package view;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.stream.Collectors;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import controller.AlunoProcess;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import model.Aluno;

@WebServlet("/aluno")
public class AlunoHttp extends HttpServlet{
	
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		PrintWriter pw = resp.getWriter();
		
		String body = req.getReader().lines().collect(Collectors.joining(System.lineSeparator()));
		
		try {
			JSONObject obj = new JSONObject(body);
			
			String nome = obj.getString("nome");
			float peso = obj.getFloat("peso");
			float altura = obj.getFloat("altura");
			int nascimento = obj.getInt("nascimento");
			
			Aluno a = new Aluno();
			a.setNome(nome);
			a.setPeso(peso);
			a.setAltura(altura);
			a.setNascimento(nascimento);
			
			AlunoProcess ap = new AlunoProcess();
			
			if(ap.create(a) == true) {
				obj.put("id", a.getId());
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
		AlunoProcess ap = new AlunoProcess();
		
		String tempId = req.getParameter("id");
		
		int id = 0;
		
		if(tempId != null) {
			id = Integer.parseInt(tempId);
		}
		
		JSONArray arr = ap.readAll(id);
		
		pw.write(arr.toString());
		
		//pw.write(ap.readAll().toString());
	}
	
	protected void doPut(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		PrintWriter pw = resp.getWriter();
		
		String body = req.getReader().lines().collect(Collectors.joining(System.lineSeparator()));
		
		JSONObject retJson = new JSONObject();
		
		try {
			JSONObject obj = new JSONObject(body);
			
			Aluno a = new Aluno();
			
			a.setId(obj.getInt("id"));
			a.setNome(obj.getString("nome"));
			a.setAltura(obj.getFloat("altura"));
			a.setPeso(obj.getFloat("peso"));
			a.setNascimento(obj.getInt("nascimento"));
			
			AlunoProcess ap = new AlunoProcess();
			
			/*if(ap.update(a) == true) {
				pw.write(obj.toString());
			}else {
				resp.setStatus(401);
			}*/
			
			String ret = ap.update(a);
			
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
		
		AlunoProcess ap = new AlunoProcess();
		
		if(ap.delete(id) == true) {
			pw.write("{'id':" + id + "}");
		}else {
			resp.setStatus(401);
		}
	}
}