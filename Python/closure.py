def outter():
    i = 0
    def inner():
        nonlocal i # 不加nonlocal會有錯: local variable 'i' referenced before assignment
        i += 1
        return i
    return inner

a = outter()

# 印出1到10
for i in range(10):
    print(a())

# 印出十個11
for i in range(10):
    print(a() - i)