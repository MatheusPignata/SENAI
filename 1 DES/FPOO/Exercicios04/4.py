a = int(input("Valor desejado para o imprestimo:"))
b = int(input("Quantia de parcelas:"))
c = int(input("Salário do solicitante:"))

if ( a / b ) <= (c * 0.3):
    print("Emprestimo aprovado")
else:
    print("Emprestimo negado")