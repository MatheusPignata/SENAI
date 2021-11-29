<%@page import="vo.Produto"%>
<%@page import="ctr.ProdutoProcess"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Cadastro de Produtos</title>
<link rel="stylesheet" href="crud.css">
</head>
<body>

	<%

	Produto produto;
	
	String id = request.getParameter("id");
	String nome = request.getParameter("nome");
	String descricao = request.getParameter("descricao");
	String valor = request.getParameter("valor");
	String quantidade = request.getParameter("quantidade");
	String acao = request.getParameter("acao");

	ProdutoProcess.abrir();
	%>
	
	<div class="nome">
	Cadastro de Produtos UL
	</div>
	
	<div class="topo">
		
		<%
		if (acao == null) {
		%>
		
		<form>
			<label>Id</label><input type="number" name="id" required />
			<label>Nome</label><input type="text" name="nome" required />
			<label>Descrição</label><input type="text" name="descricao" required />
			<label>Valor</label><input type="number" step="any" name="valor" required />
			<label>Quantidade</label><input type="number" name="quantidade" required />				
			<button type="submit" id="btn_enviar" onclick="subtotal()">Enviar</button>
		</form>
		
		<%
		} else {
		produto = ProdutoProcess.produtos.get(ProdutoProcess.produtos.indexOf(new Produto(id)));
		%>
		
		<form>
			<label>Id</label><input type="number" name="id" value="<%=produto.getId()%>" required />
			<label>nome</label><input type="text" name="nome" value="<%=produto.getNome()%>" required />
			<label>Descrição</label><input type="text" name="descricao" value="<%=produto.getDescricao()%>" required />
			<label>Valor</label><input type="number" step="any" name="valor" value="<%=produto.getValor()%>" required />
			<label>Quantidade</label><input type="number" name="quantidade" value="<%=produto.getQuantidade()%>" required />
			<input type='hidden' name='acao' value='edit' />
			<button type="submit">Atualizar</button>
		</form>
		
		<%
		}
		%>
		
	</div>
	
	<div class="msg">
		<%
		if (id != null && nome != null && descricao != null && valor != null && quantidade != null && acao != null) {
			produto = new Produto(id, nome, descricao, valor, quantidade);
			ProdutoProcess.produtos.set(ProdutoProcess.produtos.indexOf(produto), produto);
			ProdutoProcess.salvar();
			response.sendRedirect("crud.jsp");
		} else if (id != null && nome != null && descricao != null && quantidade != null && valor != null) {
			produto = new Produto(id, nome, descricao, valor, quantidade);
			if (ProdutoProcess.produtos.contains(produto)) {
				out.print("Id já cadastrado!");
			} else {
				ProdutoProcess.produtos.add(produto);
				ProdutoProcess.salvar();
				response.sendRedirect("crud.jsp");
			}
		} else {
			if (id != null && acao.equals("del")) {
				ProdutoProcess.produtos.remove(new Produto(id));
				ProdutoProcess.salvar();
				response.sendRedirect("crud.jsp");
			}
		}
		%>
		
	</div>
	
	<table>
		<thead>
			<tr>
				<th>Id</th>
				<th>Nome</th>
				<th>Descrição</th>
				<th>Valor</th>
				<th>Quantidade</th>
				<th>Edit</th>
				<th>Del</th>
			</tr>
		</thead>
		
		<tbody>
			<%
			for (Produto l : ProdutoProcess.produtos) {
				out.print("<tr>");
				out.print(l.toHTML());
				out.print("<td>");
				out.print("<form>");
				out.print("<input type='hidden' name='acao' value='edit'/>");
				out.print("<input type='hidden' name='id' value='" + l.getId() + "'/>");
				out.print("<button type='submit'>Edit</button>");
				out.print("</form>");
				out.print("</td>");
				out.print("<td>");
				out.print("<form>");
				out.print("<input type='hidden' name='acao' value='del'/>");
				out.print("<input type='hidden' name='id' value='" + l.getId() + "'/>");
				out.print("<button type='submit'>Del</button>");
				out.print("</form>");
				out.print("</td>");
				out.print("</tr>");
			}
			%>
		</tbody>
	</table>
	
</body>
<script src="crud.js"></script>
</html>