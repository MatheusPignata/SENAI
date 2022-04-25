1) Quando foi o último pedido do cliente "Cesar Augusto Pascali Rago"? Qual o valor deste pedido?

R)  +------------+------------+
    | max(data)  | max(valor) |
    +------------+------------+
    | 2022-04-08 |     354.71 |
    +------------+------------+

    select max(data), max(valor) from pedidos where Cliente_id = (select Cliente_id from clientes where nome = 'Cesar Augusto Pascali Rago');
_______________________________________________________________________________________________________________________________________________________________

2) Quantas pizzas ele pediu e quantos sabores diferentes?

R)  +-------+-----------------+
    | total | count(pizza_id) |
    +-------+-----------------+
    |    11 |               4 |
    +-------+-----------------+

    select sum(quantidade) as total, count(pizza_id) from itens_pedido where pedido_id = 22;
_______________________________________________________________________________________________________________________________________________________________

3) Crie uma view da tabela Itens_pedido que mostre também o nome de cada pizza em ordem de pedido_id, coloque o nome de "vw_itens"

R) create view vw_itens as select ip.*, p.nome from itens_pedido ip inner join pizzas p on ip.pizza_id = p.pizza_id order by pedido_id; 
_______________________________________________________________________________________________________________________________________________________________

4) Crie uma view que mostre por ordem de pedido os dados (pedido_id, cliente_id, data, hora, pizza_id, nome da pizza, valor da pizza, subtotal e total), nomeie como "vw_pedidos"

R) create view vw_pedidos as select pe.pedido_id, pe.cliente_id, pe.data, pe.hora, ip.pizza_id, p.nome, p.valor, (ip.quantidade*ip.valor) as subtotal, pe.valor from pedidos pe
   inner join itens_pedido ip on pe.pedido_id = ip.pedido_id
   inner join pizzas p on ip.pizza_id = p.pizza_id order by pe.pedido_id; 
_______________________________________________________________________________________________________________________________________________________________

5) Acrescente na view anterior o nome do cliente e mostre na ordem de pedido decrescente.

R) create view vw_pedidos as select c.nome as cliente, pe.pedido_id, pe.cliente_id, pe.data, pe.hora, ip.pizza_id, p.nome, p.valor as total, (ip.quantidade*ip.valor) as subtotal, pe.valor from clientes c 
   inner join pedidos pe on c.Cliente_id = pe.pedido_id
   inner join itens_pedido ip on pe.pedido_id = ip.pedido_id
   inner join pizzas p on ip.pizza_id = p.pizza_id order by pe.pedido_id; 