a=input("Digite seu nome: ")
b=int(input("Digite seu salário: "))
c=float(input("Digite o valor do indice percentual do reajuste: "))
d=((c/100)*b)+b
print("Seu novo salário será {:.2f} reais".format (d))