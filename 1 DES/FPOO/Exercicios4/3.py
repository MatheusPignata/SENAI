a = int(input("Digite seu salário: "))
b = int(input("Digite a quanto tempo você trabalha aqui: "))

if b >= 5:
    print(f"Seu bônus é de R$ {a * 0.20}")
else:
    print(f"Seu bônus é de R$ {a * 0.10}")