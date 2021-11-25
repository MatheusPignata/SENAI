package view;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.stream.Collectors;

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

}