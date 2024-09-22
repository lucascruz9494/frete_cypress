## Execução dos Testes

- Para executar os testes em modo interativo:

npx cypress open

- Para executar os testes em modo headless:

npx cypress run

## Casos de Teste Automatizados

1. Fluxo com dados válidos sem nenhum serviço adicional
   Descrição: Testa o cálculo de frete com todas as entradas válidas, incluindo CEPs válidos, dimensões e peso dentro dos limites permitidos.
   Cenário:
   CEP de origem válido.
   CEP de destino válido.
   Formato "Caixa/Pacote".
   Peso válido.
   Dimensões válidas.
   Verificação das opções de frete (PAC, Sedex, Mini Envios).
2. Fluxo com CEP de destino inválido
   Descrição: Testa o comportamento do sistema ao inserir um CEP de destino inválido.
   Cenário:
   CEP de destino inválido.
   outros dados válidos.
   Verificação de mensagem de erro.
3. Fluxo com peso inválido
   Descrição: Testa o comportamento ao inserir um peso inválido.
   Cenário:
   Peso inválido (campo vazio, valor negativo ou não numérico).
   outros dados válidos.
   Verificação de mensagem de erro.
   (não foi feito devido a não ter elementos específicos vinculados a mensagem de erro, apenas uma classe generica)
4. Fluxo com dimensões inválidas
   Descrição: Testa o comportamento ao inserir dimensões fora dos limites permitidos ou com valor não numérico.
   Cenário:
   Dimensões inválidas (valores abaixo do mínimo ou acima do máximo e valores não numéricos).
   outros dados válidos.
   Verificação de mensagem de erro.
5. Fluxo com seleção de "Rolo/Cilindro"
   Descrição: Testa o cálculo de frete para pacotes com formato "Rolo/Cilindro".
   Cenário:
   Formato "Rolo/Cilindro".
   outros dados válidos.
   Verificação das opções de frete.
   (não foi feito devido a falta de tempo)
6. Teste com seleções de serviços
   Descrição: Testa o cálculo de frete com uma ou mais opções de serviços selecionadas ("Mão Própria" e "AR").
   Cenário:
   Seleção de uma ou mais serviços.
   outros dados válidos.
   Verificação das opções de frete.
   (não foi feito com declaração de valor por não saber das regras por trás desta opção e falta de tempo, já que não sei se os valores calculados podem mudar com o passar dos dias)
7. Teste de validação de campos obrigatórios
   Descrição: Testa se o sistema exibe mensagens de erro adequadas ao tentar calcular o frete sem preencher campos obrigatórios.
   Cenário:
   Não preencher CEP de origem ou destino.
   outros dados válidos.
   Verificação de mensagens de erro.
   (não foi feito o de peso devido aos motivos explicados no caso 3, e altura,largura e comprimento foram contemplados no caso 4, já que a mensagem de erro é a mesma caso não preencha os campos)
8. Teste de persistência de informações
   Descrição: Verifica se o botão "Salvar" persiste as informações inseridas para consultas futuras.
   Cenário:
   Preencher todos os campos.
   Clicar em "Salvar".
   Verificar se os dados são carregados corretamente ao reabrir a tela.
   (não foi feito, pois ao salvar e atualizar a página, apesar dos dados persistirem, o valor persistido não fica exposto na DOM)
9. Pesquisa de cep
   não foi feito pois não tem relação com os testes de cálculo solicitados
10. Teste com pesos diferentes de 300g
    não foram feitos devido a falta de tempo e por ter uma grande quantidade de pesos disponíveis

obs : existe uma modal de preenchimento de email na aplicação que possivelmente atrapalhe nos testes, sendo necessário fechar os testes e abrir novamente. Ou preencher com algum email, pois aparece apenas 1x.
