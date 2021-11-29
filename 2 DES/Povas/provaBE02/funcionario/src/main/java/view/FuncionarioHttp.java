package view;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.stream.Collectors;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import controller.FuncionarioProcess;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import model.Funcionario;

@WebServlet("/funcionario")
public class FuncionarioHttp extends HttpServlet {

	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		PrintWriter pw = resp.getWriter();
		
		String body = req.getReader().lines().collect(Collectors.joining(System.lineSeparator()));
		
		try {
			JSONObject obj = new JSONObject(body);
			
			String nome_completo = obj.getString("nome_completo");
			String data_desligamento = obj.getString("data_desligamento");
			float ultimo_salario = obj.getFloat("ultimo_salario");
			
			Funcionario f = new Funcionario();
			f.setNome_completo(nome_completo);
			f.setData_desligamento(data_desligamento);
			f.setUltimo_salario(ultimo_salario);
			
			FuncionarioProcess fp = new FuncionarioProcess();
			
			if(fp.create(f) == true) {
				obj.put("matricula", f.getMatricula());
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
		FuncionarioProcess fp = new FuncionarioProcess();
		
		String temp = req.getParameter("matricula");
		
		int matricula = 0;
		
		if(temp != null) {
			matricula = Integer.parseInt(temp);
		}
		
		JSONArray arr = fp.readAll(matricula);
		
		pw.write(arr.toString());
	}
	
	protected void doPut(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		PrintWriter pw = resp.getWriter();
		
		String body = req.getReader().lines().collect(Collectors.joining(System.lineSeparator()));
		
		JSONObject retJson = new JSONObject();
		
		try {
			JSONObject obj = new JSONObject(body);
			
			Funcionario f = new Funcionario();
			
			f.setMatricula(obj.getInt("matricula"));
			f.setNome_completo(obj.getString("nome_completo"));
			f.setData_desligamento(obj.getString("data_desligamento"));
			f.setUltimo_salario(obj.getFloat("ultimo_salario"));
			
			FuncionarioProcess fp = new FuncionarioProcess();
			
			
			String ret = fp.update(f);
			
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
		
		String temp = req.getParameter("matricula");
		
		int matricula = Integer.parseInt(temp);
		
		FuncionarioProcess fp = new FuncionarioProcess();
		
		if(fp.delete(matricula) == true) {
			pw.write("{'matricula':" + matricula + "}");
		}else {
			resp.setStatus(401);
		}
	}
}
