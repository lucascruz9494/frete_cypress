import { elements } from "../fixtures/utils";
describe("Ao acessar o cálculo de frete,", () => {
  it("não deve permitir o cálculo de frete ao não informar cep origem", () => {
    cy.visit("/");
    cy.insereDados(" ", "05407002", 0.3, "2", "11", "16");
    cy.dadoInvalido(elements.cepOrigemInvalido, "CEP de origem é obrigatório");
  });
  it("não deve permitir o cálculo de frete ao não informar cep destino", () => {
    cy.visit("/");
    cy.insereDados("08090284", " ", 0.3, "2", "11", "16");
    cy.dadoInvalido(
      elements.cepDestinoInvalido,
      "CEP de destino é obrigatório"
    );
  });
  it("deve conseguir realizar o cálculo de frete corretamente digitando dados válidos", () => {
    cy.visit("/");
    cy.insereDados("08090284", "05407002", 0.3, "2", "11", "16");
    cy.validaCalculoPacESedexEMini(
      "R$ 22,00",
      "R$ 9,39",
      "R$ 22,00",
      "R$ 2,07",
      "Exclusivono app",
      "R$ 4,15"
    );
  });
  it("deve conseguir realizar o cálculo de frete corretamente digitando dados válidos usando o serviço de mão própria", () => {
    cy.visit("/");
    cy.expandeServicosAdicionais();
    cy.selecionaServico(elements.maoPropria);
    cy.insereDados("08090284", "05407002", 0.3, "2", "11", "16");
    cy.validaCalculoPacESedex("R$ 31,15", "R$ 19,73", "R$ 31,15", "R$ 12,41");
  });
  it("deve conseguir realizar o cálculo de frete corretamente digitando dados válidos usando o serviço de aviso de recebimento", () => {
    cy.visit("/");
    cy.expandeServicosAdicionais();
    cy.selecionaServico(elements.avisoRecebimento);
    cy.insereDados("08090284", "05407002", 0.3, "2", "11", "16");
    cy.validaCalculoPacESedexEMini(
      "R$ 29,75",
      "R$ 18,15",
      "R$ 29,75",
      "R$ 10,83",
      "Exclusivono app",
      "R$ 12,91"
    );
  });
  it("deve conseguir realizar o cálculo de frete corretamente digitando dados válidos usando o serviço de aviso de recebimento e mão propria", () => {
    cy.visit("/");
    cy.expandeServicosAdicionais();
    cy.selecionaServico(elements.avisoRecebimento);
    cy.selecionaServico(elements.maoPropria);
    cy.insereDados("08090284", "05407002", 0.3, "2", "11", "16");
    cy.validaCalculoPacESedex("R$ 38,90", "R$ 28,49", "R$ 38,90", "R$ 21,17");
  });
  it("não deve permitir o cálculo de frete ao digitar cep de origem inválido", () => {
    cy.visit("/");
    cy.insereDados("08090285", "05407002", 0.3, "2", "11", "16");
    cy.dadoInvalido(elements.cepOrigemInvalido, "CEP de origem inválido.");
  });
  it("não deve permitir o cálculo de frete ao digitar cep de destino inválido", () => {
    cy.visit("/");
    cy.insereDados("08090284", "05407111", 0.3, "2", "11", "16");
    cy.dadoInvalido(elements.cepDestinoInvalido, "CEP de destino inválido.");
  });
  it("não deve permitir o cálculo de frete ao digitar valor inferior de altura minima", () => {
    cy.visit("/");
    cy.insereDados("08090284", "05407002", 0.3, "0.3", "11", "16");
    cy.dadoInvalido(elements.alturaInvalida, "Altura mínima 0.4 cm.");
  });
  it("não deve permitir o cálculo de frete ao digitar valor inferior de largura minima", () => {
    cy.visit("/");
    cy.insereDados("08090284", "05407002", 0.3, "2", "1", "16");
    cy.dadoInvalido(elements.larguraInvalida, "Largura mínima 8 cm.");
  });
  it("não deve permitir o cálculo de frete ao digitar valor inferior de comprimento minimo", () => {
    cy.visit("/");
    cy.insereDados("08090284", "05407002", 0.3, "2", "11", "12");
    cy.dadoInvalido(elements.comprimentoInvalido, "Comprimento mínimo 13 cm.");
  });
  it("não deve permitir o cálculo de frete ao digitar valor superior de altura máxima", () => {
    cy.visit("/");
    cy.insereDados("08090284", "05407002", 0.3, "151", "11", "16");
    cy.dadoInvalido(elements.alturaInvalida, "Altura máxima 150 cm.");
  });
  it("não deve permitir o cálculo de frete ao digitar valor inferior de largura maxima", () => {
    cy.visit("/");
    cy.insereDados("08090284", "05407002", 0.3, "2", "151", "16");
    cy.dadoInvalido(elements.larguraInvalida, "Largura máxima 150 cm.");
  });
  it("não deve permitir o cálculo de frete ao digitar valor superior de comprimento maximo", () => {
    cy.visit("/");
    cy.insereDados("08090284", "05407002", 0.3, "2", "11", "151");
    cy.dadoInvalido(elements.comprimentoInvalido, "Comprimento máximo 150 cm.");
  });
  it("não deve permitir o cálculo de frete ao digitar valor não numerico na altura", () => {
    cy.visit("/");
    cy.insereDados("08090284", "05407002", 0.3, "teste", "11", "16");
    cy.dadoInvalido(elements.alturaInvalida, "altura precisa ser um número.");
  });
  it("não deve permitir o cálculo de frete ao digitar valor não numerico na largura", () => {
    cy.visit("/");
    cy.insereDados("08090284", "05407002", 0.3, "2", "teste", "16");
    cy.dadoInvalido(elements.larguraInvalida, "largura precisa ser um número.");
  });
  it("não deve permitir o cálculo de frete ao digitar valor não numerico no comprimento", () => {
    cy.visit("/");
    cy.insereDados("08090284", "05407002", 0.3, "2", "11", "teste");
    cy.dadoInvalido(
      elements.comprimentoInvalido,
      "comprimento precisa ser um número."
    );
  });
  it("não deve permitir o cálculo de frete ao digitar valor de altura + largura + comprimento superior a 300cm", () => {
    cy.visit("/");
    cy.insereDados("08090284", "05407002", 0.3, "100", "100", "101");
    cy.validaTextoEmTela(
      "a soma resultante da altura + largura + comprimento não deve superar 300 cm."
    );
  });

  it("deve limpar dados da tela ao clicar em botão de limpar", () => {
    cy.visit("/");
    cy.limparDados("08090285", "05407111", 0.3, "2", "11", "16");
  });
});
