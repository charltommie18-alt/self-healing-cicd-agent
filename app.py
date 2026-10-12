import os

# INTENTIONAL FLAWS: Unused variable and missing newline at end of file
debug_mode = True
unused_var = "hello world"

def main():
    port = int(os.environ.get("PORT", 8080))
    print(f"App running successfully on port {port}")

if __name__ == "__main__":
    main()
