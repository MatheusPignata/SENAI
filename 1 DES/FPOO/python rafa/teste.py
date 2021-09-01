a=int(input("Digite 1 para converter um número decimal\nDigite 2 para converter um número binário\nDigite 3 para converter um número octal\nDigite 4 para converter um número hexadecimal\n"))
if a==1:
    a = int(input("Qual o seu número decimal? "))
    print(f"Seu número decimal é {a}\nBinário: {bin(a)}\nOctal: {oct(a)}\nHexadecimal: {hex(a)}\n") 
elif a==2: 
    a = input("Qual o seu número binário? ")
    print(f"Seu número decimal é {int(a, 2)}\nBinário: {a}\nOctal: {oct(int(a, 2))}\nHexadecimal: {hex(int(a, 2))}\n")  
elif a==3:
    a = input("Qual o seu número octal? ")
    print(f"Seu número decimal é {int(a, 8)}\nBinário: {bin(int(a, 8))}\nOctal: {a}\nHexadecimal: {hex(int(a, 8))}\n")
elif a==4:
    a = input("Qual o seu número hexadecimal? ")
    print(f"Seu número decimal é {int(a, 16)}\nBinário: {bin(int(a, 16))}\nOctal: {oct(int(a, 16))}\nHexadecimal: {a}\n")
else:
    print("Você é burro, lhe falta ódio, néctar do conhecimento e discernimento")