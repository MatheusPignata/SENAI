a=float(input("Digite sua altura: "))
b=float(input("Digite seu peso: "))
c=b/(a*a)

if c<18.5:
    print("Seu IMC é {:.2f}, você está abaixo do peso".format(c))
elif 18.5<c<25:
    print("Seu IMC é {:.2f}, você está no peso ideal".format(c))
elif 25<c<=30:
    print("Seu IMC é {:.2f}, você está acima do peso".format(c))
elif c>30:
    print("Seu IMC é {:.2f}, você está obeso".format(c))
