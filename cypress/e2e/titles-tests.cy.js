// https://on.cypress.io/api

describe('Mi primera prueba', () => {
  it('Verificar que los títulos estén correctos', () => {
    cy.visit('/')
    // cy.get('h1').should('contain.text', 'Un ambiente excelente para ti') Funciona, pero no es recomendado
    cy.get('[data-test="landing-title"]').contains(/Un ambiente excelente para ti/i)
    cy.get('[data-test="featured-title"]').contains(/Los mejores platos/i)
    cy.get('[data-test="about-title"]').should('contain.text', 'Sobre nosotros')
  })
})
