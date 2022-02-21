a = int(input("Digite um numero: "))
b = int(input("Digite um numero: "))
c = int(input("Digite um numero: "))

if a > b:
    if a > c:
        print(f"O maior numero é {a}")
    else:
        print(f"O maior numero é {c}")
elif a < b:
    if b > c:
        print(f"O maior numero é {b}")
    else:
        print(f"O maior numero é {c}")