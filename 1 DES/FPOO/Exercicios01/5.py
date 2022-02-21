a=int(input("Digite quantos alqueires sua fazenda tem: "))
c=int(input("Digite quantos caminhões sua fazenda tem: "))
v=(a*250)/(c*18)
print("Você precisará fazer {:.2f} viagens para transportar toda a carga". format(v))