def simple_chatbot():
    print("Chatbot: Hi! I'm a simple chatbot. How can I help you today?")
    
    while True:
        user_input = input("You: ").lower()

        if "hello" in user_input or "hi" in user_input:
            print("Chatbot: Hello there! What can I do for you?")
        elif "how are you" in user_input:
            print("Chatbot: I'm just a program, but I'm doing great! Thanks for asking.")
        elif "your name" in user_input:
            print("Chatbot: I don't have a name. I'm just a simple chatbot.")
        elif "bye" in user_input or "exit" in user_input or "quit" in user_input:
            print("Chatbot: Goodbye! Have a great day!")
            break
        else:
            print("Chatbot: Sorry") 