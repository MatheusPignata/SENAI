<%@page import="vo.Carro"%>
<%@page import="ctr.CarroProcess" %>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>CRUD</title>
</head>
<body>
	<%
	Carro carro;
	String id = request.getParameter("id");
	String nome = request.getParameter("nome");
	String ano = request.getParameter("ano");
	String valor = request.getParameter("valor");
	String acao = request.getParameter("acao");

	//CarroProcess.abrir();
	%>
	
	<div class="top">
	<% 
		if(acao==null){
	%>
	<form>
	<label>ID</label>
	<input type="number" name="id" required/>
	<label>Carro</label>
	<input type="text" name="nome" required/>
	<label>Ano</label>
	<input type="number" name="ano" required/>
	<label>Valor</label>
	<input type="number" name="valor" required/>
	<button type="submit">Cadastrar</button>
	</form>
	<%
		}else{
			carro=CarroProcess.carros.get(CarroProcess.carros.indexOf(new Carro(id)));
		
	%>
	<form>
		<label>ID</label>
		<input type="number" name="id" value="<%=carro.getId() %>" required/>
		<label>Carro</label>
		<input type="number" name="nome" value="<%=carro.getNome() %>" required/>
		<label>Ano</label>
		<input type="number" name="ano" value="<%=carro.getAno() %>" required/>
		<label>Valor</label>
		<input type="number" name="valor" value="<%=carro.getValor() %>" required/>
		<input type='hidden' name='acao' value='edit' />
		<button type="submit">Atualizar</button>
	</form>
	<%
	}
	%>
	</div>
	<div class="msg">
		<%
		if(id!=null && nome!=null && ano!=null && valor!=null){
			carro=new Carro(id,nome,ano,valor);
		CarroProcess.carros.add(carro);
		CarroProcess.salvar();
		response.sendRedirect("crud.jsp");
		}else if (id!=null && nome!=null && ano!=null && valor!=null && acao!=null){
			carro = new Carro(id,nome,ano,valor);
			if(CarroProcess.carros.contains(carro)){
				out.print("Ja tem ");
			}else{
				CarroProcess.carros.add(carro);
				CarroProcess.salvar();
				response.sendRedirect("crud.jsp");
			}
			
		}else{
			if(id!=null && acao.equals("del")){
				CarroProcess.carros.remove(new Carro(id));
				CarroProcess.salvar();
				response.sendRedirect("crud.jsp");
			}
		}
		%>
	</div>
	<table>
		<tr>
			<th>ID </th>
			<th>Nome</th>
			<th>Ano </th>
			<th>Preço </th>
			<th>Deletar </th>
			<th>Editar </th>
		</tr>
		<% 

		%>
	</table>

</body>
</html>