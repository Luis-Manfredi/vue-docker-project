describe('Testear el menu en mobile', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.viewport(430, 932) // iPhone 14 Pro Max size
  })

  it('Comprobar que el contenido del botón se muestre', () => {
    // Comprobar si el elemento dropdown NO es visible
    cy.get('[data-test="dropdown-content"]').should('not.be.visible')
    // Hacer click en el botón
    cy.get('[data-test="appbar-menu"]').click()
    // Ahora el dropdown debería ser visible
    cy.get('[data-test="dropdown-content"]').should('be.visible')
    // Entonces hacer click de nuevo en el botón
    cy.get('[data-test="appbar-menu"]').click()
    // Y ahora el dropdown debería NO ser visible 
    cy.get('[data-test="dropdown-content"]').should('not.be.visible')
  })

  it('Asegurar que el botón "Cerrar" dentro del dropdown funcione correctamente', () => {
    // Hacer click en el botón
    cy.getDataTest('appbar-menu').click()
    // Hacer click en el botón Cerrar
    cy.getDataTest('close-btn').click()
    // Ahora el dropdown no debería ser visible 
    cy.getDataTest('dropdown-content').should('not.be.visible')
  })
})