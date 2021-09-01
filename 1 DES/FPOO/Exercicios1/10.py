a=int(input("Digite o valor da área a ser revestida em m²: "))
v=13
m=0.37
p=a/m
t=p*v
print("Será necessario {} kg de pedra mineira e custará {:.2f} reais".format (p,t))