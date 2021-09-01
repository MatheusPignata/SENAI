r=int(input("Digite o valor do raio da base do seu cilindro em cm: "))
a=int(input("Digite o valor da altura do seu cilindro em cm: "))
ab=3.14*(r*r)
al=2*3.14*r*a
at=(2*ab)+al
v=ab*a
print(f"A área do seu cilindro é igual a {at} cm² e tem um volume de {v} cm³")