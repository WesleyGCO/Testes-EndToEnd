import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.chrome.service import Service

service = Service(ChromeDriverManager().install())
driver = webdriver.Chrome(service=service)

try:
    driver.get("https://ava.ifpr.edu.br/login/index.php")
    
    username_input = driver.find_element(By.ID, "username")
    password_input = driver.find_element(By.ID, "password")
    login_button = driver.find_element(By.ID, "loginbtn")
    
    username_input.send_keys("usuário")
    password_input.send_keys("senha")
    
    time.sleep(2)
    
    login_button.click()
    
    time.sleep(2)
    
    success_message = driver.find_element(By.TAG_NAME, "h2").text
    
    if "Olá," in success_message:
        print("Teste concluído com sucesso")
    else:
        print("Teste falhou: mensagem de sucesso não contém 'Olá,'.")  
    
except Exception as e:
    print(f"Erro durante o teste: {e}")
    
finally:
    # Fechar o navegador
    driver.quit()