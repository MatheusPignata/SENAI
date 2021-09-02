<%@page import="ctr.LivrosProcess"%>
<%@page import="vo.Livros" %>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Cadastro de Livros</title>
</head>
<body>

	<form method="POST">
		<input type="number" name="id" required placeholder="ID" class="input">
		<input type="text" name="autor" required placeholder="Autor" class="input">
		<input type="text" name="titulo" required placeholder="Título" class="input">
		<input type="number" name="preco" required placeholder="Preço" class="input">
		<input type="submit" value="enviar" class="btn">
	</form>
	
	<%
		String id = request.getParameter("id");
		String autor = request.getParameter("autor");
		String titulo = request.getParameter("titulo");
		String preco = request.getParameter("preco");
		Livros livro = new Livros(id, autor, titulo, preco);
		LivrosProcess.livros.add(livro);
	%>

	<table class="tabela">
		<tr>
			<th>ID</th>
			<th>Autor</th>
			<th>Titulo</th>
			<th>Preço</th>
		</tr>
		
		
		<%
			LivrosProcess.abrir();
			out.print("<tbody class='tablebody'");
			for (Livros l : LivrosProcess.livros){
				out.print(l.toHTML());
			}
			out.print("</tbody");
		%>
			
	</table>

</body>
</html>