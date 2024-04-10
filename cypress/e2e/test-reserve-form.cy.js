describe('Comprobar que el formulario de reservas funciona', () => {
    beforeEach(() => {
        cy.visit('/servicio')
    })

    it('Selecciona un restaurante', () => {
        cy.getDataTest('reserve-form').scrollIntoView()
        cy.wait(2000)
        cy.getDataTest('selectionCardOne').click()
        cy.wait(3000)
        cy.getDataTest('selectionCardTwo').click()
    })
})