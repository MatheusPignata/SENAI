<%@page import="ctr.LivrosProcess"%>
<%@page import="vo.Livros" %>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Cadastro de Livros</title>
<link rel="stylesheet" href="crud.css">
</head>
<body>

	<form method="POST">
		<input type="number" name="id" required placeholder="ID" class="input">
		<input type="text" name="autor" required placeholder="Autor" class="input">
		<input type="text" name="titulo" required placeholder="Título" class="input">
		<input type="number" name="preco" required placeholder="Preço" class="input" step="any">
		<input type="submit" value="enviar" class="btn">
	</form>
	<div class="meio">
		<%		
			String id = request.getParameter("id");
			String autor = request.getParameter("autor");
			String titulo = request.getParameter("titulo");
			String preco = request.getParameter("preco");
			if(id != null && autor != null && titulo != null && preco != null){
				Livros livro = new Livros(id, autor, titulo, preco);
				if(LivrosProcess.livros.contains(livro)){
					out.print("Livro já cadastrado");
				}else{
					LivrosProcess.livros.add(livro);
					out.print(LivrosProcess.salvar());
					response.sendRedirect("crud.jsp");
				}
			}else{
				out.print("Aguardando requisições");
				
			}
			
		%>
	
		<table class="tabela">
			<thead>
				<tr>
					<th>ID</th>
					<th>Autor</th>
					<th>Titulo</th>
					<th>Preço</th>
					<th>Ações</th>
				</tr>
			</thead>
			
			<% 
				LivrosProcess.abrir();
				out.print("<tbody class='tablebody'");
				for (Livros l : LivrosProcess.livros){
					out.print("<tr>");
					out.print(l.toHTML());
					out.print("<td><button type='submit'>Delete</button></td>");
					out.print("</tr>");
				}
				out.print("</table");
			%>
				
		</table>
		
	</div>
</body>
</html>