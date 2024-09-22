import { elements } from "../fixtures/utils";

Cypress.Commands.add(
  "insereDados",
  (cepOrigem, cepDestino, peso, altura, largura, comprimento) => {
    cy.get(elements.cepOrigem).should("be.visible").type(cepOrigem);
    cy.get(elements.campoFormato).should("be.visible").click();
    cy.get(elements.opcaoSelecionada(1)).should("be.visible").click();
    cy.get(elements.campoPeso).should("be.visible").click();
    cy.get(elements.opcaoSelecionada(peso)).should("be.visible").click();
    cy.get(elements.campoAltura).should("be.visible").type(altura);
    cy.get(elements.campoLargura).should("be.visible").type(largura);
    cy.get(elements.campoComprimento).should("be.visible").type(comprimento);
    cy.get(elements.cepDestino).should("be.visible").type(cepDestino);
  }
);

Cypress.Commands.add("expandeServicosAdicionais", () => {
  cy.get(elements.expandeCampoSAAR).should("be.visible").click();
});

Cypress.Commands.add("selecionaServico", (servico) => {
  cy.get(servico).click();
});

Cypress.Commands.add("calculaFrete", () => {
  cy.get(elements.botaoCalculaFrete)
    .should("be.visible")
    .should("be.enabled")
    .click();
});

Cypress.Commands.add(
  "validaCalculoPacESedex",
  (valorPacBalcao, valorPacApp, valorSedexBalcao, valorSedexApp) => {
    cy.calculaFrete();
    cy.get(elements.pacBalcao)
      .scrollIntoView()
      .should("be.visible")
      .should("have.text", valorPacBalcao);
    cy.get(elements.pacApp)
      .should("be.visible")
      .should("have.text", valorPacApp);
    cy.get(elements.sedexBalcao)
      .should("be.visible")
      .should("have.text", valorSedexBalcao);
    cy.get(elements.sedexApp)
      .should("be.visible")
      .should("have.text", valorSedexApp);
  }
);

Cypress.Commands.add(
  "validaCalculoPacESedexEMini",
  (
    valorPacBalcao,
    valorPacApp,
    valorSedexBalcao,
    valorSedexApp,
    valorMiniBalcao,
    valorMiniApp
  ) => {
    cy.calculaFrete();
    cy.get(elements.miniBalcao)
      .scrollIntoView()
      .should("be.visible")
      .should("have.text", valorMiniBalcao);
    cy.get(elements.miniApp)

      .should("be.visible")
      .should("have.text", valorMiniApp);
    cy.get(elements.pacBalcao)

      .should("be.visible")
      .should("have.text", valorPacBalcao);
    cy.get(elements.pacApp)
      .should("be.visible")
      .should("have.text", valorPacApp);
    cy.get(elements.sedexBalcao)
      .should("be.visible")
      .should("have.text", valorSedexBalcao);
    cy.get(elements.sedexApp)
      .should("be.visible")
      .should("have.text", valorSedexApp);
  }
);

Cypress.Commands.add("dadoInvalido", (elemento, texto) => {
  cy.calculaFrete();
  cy.get(elemento).should("be.visible").should("have.text", texto);
});

Cypress.Commands.add("validaTextoEmTela", (texto) => {
  cy.calculaFrete();
  cy.contains(texto);
});

Cypress.Commands.add(
  "limparDados",
  (cepOrigem, cepDestino, peso, altura, largura, comprimento) => {
    cy.insereDados(cepOrigem, cepDestino, peso, altura, largura, comprimento);
    cy.get(elements.botaoLimpar).should("be.visible").click();

    cy.get(elements.cepOrigem).should("be.visible").should("have.text", "");

    cy.get(elements.campoAltura).should("be.visible").should("have.text", "");
    cy.get(elements.campoLargura).should("be.visible").should("have.text", "");
    cy.get(elements.campoComprimento)
      .should("be.visible")
      .should("have.text", "");
    cy.get(elements.mensagemCamposLimpos)
      .should("be.visible")
      .should("have.text", "As informações do pacote foram limpas.");
  }
);
