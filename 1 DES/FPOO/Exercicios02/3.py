a=input("Digite o nome da cidade: ")
b=float(input("Digite o número total de eleitores da cidade: "))
c=float(input("Digite o número total de votos apurados: "))

print(f'{((c / b) * 100):.2f} % dos eleitores compareceram a votação' )