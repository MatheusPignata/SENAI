package view;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.stream.Collectors;

import org.json.JSONArray;
import org.json.JSONObject;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@WebServlet("/cliente")
public class Cliente extends HttpServlet{

	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

			JSONArray arr = new JSONArray();
		
			BufferedReader br = new BufferedReader(new FileReader("C:/Users/aluno/Desktop/SENAI AULAS/2 DES/dbs/vendedor.csv"));
			String linha = "";
			while( (linha = br.readLine()) != null ) {
				JSONObject cli = new JSONObject();
				String[] cliente = linha.split(";");
				cli.put("id", cliente[0]);
				cli.put("nome", cliente[1]);
				arr.put(cli);
			}
			br.close();	
		
		
		PrintWriter pw = resp.getWriter();
		
		pw.write(arr.toString());
	}

	
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		

		String data = req.getReader().lines().collect(Collectors.joining(System.lineSeparator()));
		
		JSONObject cli = new JSONObject (data);
		
		
		BufferedWriter bw = new BufferedWriter(new FileWriter("C:/Users/aluno/Desktop/SENAI AULAS/2 DES/dbs/vendedor.csv", true));
		bw.write(cli.getInt("id") + ";" + cli.getString("nome") + "\r\n");
		bw.close();
	
		PrintWriter pw = resp.getWriter();
		
		pw.write(cli.toString());
	
	}
}
