<%@page import="controll.ProcessProduto"%>
<%@page import="vo.Produto"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
	<meta charset="ISO-8859-1">
	<title>CRUD</title>
	<link rel="stylesheet" href="style.css">
</head>
<body>
	<%
		String cod = request.getParameter("cod");
		String nome = request.getParameter("nome");
		String preco = request.getParameter("preco");
		String ctr = request.getParameter("ctr");
		Produto prod;
	%>
	
	<form method="post">
		<input type="text" placeholder="cod" name="cod" id="cod" required>
		<input type="text" placeholder="nome" name="nome" id="nome" required>
		<input type="text" placeholder="preco" name="preco" id="preco" required>
		<input type="hidden" value=0 name="ctr" id="ctr">
		<button type="submit" id="btn-submit">Salvar</button>
	</form>
	
	<table>
		<thead>
			<tr>
				<th>Cod</th>
				<th>Nome</th>
				<th>Preço</th>
			</tr>
		</thead>
		<tbody>
			<%
				ProcessProduto.abrir();
				for(Produto p: ProcessProduto.produtos){
					out.print(p.toHtml());
				}
			%>
		</tbody>
	</table>
	
	<%
		if(cod != null && nome != null && preco != null){
			prod = new Produto(cod, nome, preco);
			switch(ctr){
			case "0":
				ProcessProduto.cadastrar(prod);
				response.sendRedirect("index.jsp");
				break;
			case "1":
				ProcessProduto.remover(prod);
				response.sendRedirect("index.jsp");
				break;
			case "2":
				ProcessProduto.editar(prod);
				response.sendRedirect("index.jsp");
				break;
			}
		}
	%>
</body>
<script src="scripts.js"></script>
</html>