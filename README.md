## Execução dos Testes

- Para executar os testes em modo interativo:

npx cypress open

- Para executar os testes em modo headless:

npx cypress run

## Casos de Teste Automatizados

1. Fluxo com dados válidos sem nenhum serviço adicional
   
**Descrição**: Testa o cálculo de frete com todas as entradas válidas, incluindo CEPs válidos, dimensões e peso dentro dos limites permitidos.

**Cenário**:
   1. CEP de origem válido.
   2. CEP de destino válido.
   3. Formato "Caixa/Pacote".
   4. Peso válido.
   5. Dimensões válidas.
   6. Verificação das opções de frete (PAC, Sedex, Mini Envios).
      
2. Fluxo com CEP de destino inválido
   
**Descrição**: Testa o comportamento do sistema ao inserir um CEP de destino inválido.

**Cenário**:
   1. CEP de destino inválido.
   2. outros dados válidos.
   3. Verificação de mensagem de erro.
      
3. Fluxo com peso inválido
   
   **Descrição**: Testa o comportamento ao inserir um peso inválido.
   
   **Cenário**:
   1. Peso inválido (campo vazio, valor negativo ou não numérico).
   2. outros dados válidos.
   3. Verificação de mensagem de erro.
   (não foi feito devido a não ter elementos específicos vinculados a mensagem de erro, apenas uma classe generica)

4. Fluxo com dimensões inválidas
   
   **Descrição**: Testa o comportamento ao inserir dimensões fora dos limites permitidos ou com valor não numérico.
   
   **Cenário**:
   1. Dimensões inválidas (valores abaixo do mínimo ou acima do máximo e valores não numéricos).
   2. outros dados válidos.
   3. Verificação de mensagem de erro.
      
5. Fluxo com seleção de "Rolo/Cilindro"
    
   **Descrição**: Testa o cálculo de frete para pacotes com formato "Rolo/Cilindro".
   
   **Cenário**:
   1. Formato "Rolo/Cilindro".
   2. outros dados válidos.
   3. Verificação das opções de frete.
   (não foi feito devido a falta de tempo)
   
7. Teste com seleções de serviços
    
   **Descrição**: Testa o cálculo de frete com uma ou mais opções de serviços selecionadas ("Mão Própria" e "AR").
    
   **Cenário**:
   1. Seleção de uma ou mais serviços.
   2. outros dados válidos.
   3. Verificação das opções de frete.
   (não foi feito com declaração de valor por não saber das regras por trás desta opção e falta de tempo, já que não sei se os valores calculados podem mudar com o passar dos dias)

8. Teste de validação de campos obrigatórios
    
   **Descrição**: Testa se o sistema exibe mensagens de erro adequadas ao tentar calcular o frete sem preencher campos obrigatórios.
    
   **Cenário**:
   1. Não preencher CEP de origem ou destino.
   2. outros dados válidos.
   3. Verificação de mensagens de erro.
   (não foi feito o de peso devido aos motivos explicados no caso 3, e altura,largura e comprimento foram contemplados no caso 4, já que a mensagem de erro é a mesma caso não preencha os campos)

9. Teste de persistência de informações
    
   **Descrição**: Verifica se o botão "Salvar" persiste as informações inseridas para consultas futuras.
    
   **Cenário**:
   1. Preencher todos os campos.
   2. Clicar em "Salvar".
   3. Verificar se os dados são carregados corretamente ao reabrir a tela.
   4. (não foi feito, pois ao salvar e atualizar a página, apesar dos dados persistirem, o valor persistido não fica exposto na DOM)
      
10. Pesquisa de cep
    
   não foi feito pois não tem relação com os testes de cálculo solicitados
   
11. Teste com pesos diferentes de 300g

   não foram feitos devido a falta de tempo e por ter uma grande quantidade de pesos disponíveis

obs : existe uma modal de preenchimento de email na aplicação que possivelmente atrapalhe nos testes, sendo necessário fechar os testes e abrir novamente. Ou preencher com algum email, pois aparece apenas 1x.
