describe ('Proceso de Filtrar Flores', ()=> {
  it('Filtra correctamente las flores por nombre', () => {
      cy.visit("http://localhost:3000")
      cy.get("#search_input").type('Rosa de damasco', { delay: 50 });
      cy.get('#card_link').click();
  })
})