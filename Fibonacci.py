a = 0
b = 1
z=0
while True: #using while loop in order to get the input again from the user in case of wrong input
    try:
        x = int(input("Enter the number up until you want the Fibonacci Series: "))
        if x <= 0:
            print("Enter positive value.\n")
            continue #using "continue" to go back to the start of the "while loop" in case of wrong input
        elif x == b:
            print("The Required Fibonacci Series is: ",b)
            break
        else:
            print("The required Fabonacci Series is: ")
            print(a)
            print(b)
            for i in range (0,x-2): #since we have already printed first two values 'a' and 'b' of the Fab Series, that's why loop is from 0->x-2 and not 0->x
                z=a+b
                print(z)
                a=b
                b=z
            break
    except:
        break