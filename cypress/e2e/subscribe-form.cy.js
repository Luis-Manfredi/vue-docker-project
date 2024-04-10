describe('Verificar campo de suscripción', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Comprobar que el campo de suscripción funciona', () => {
        const email = 'lsman2098@gmail.com'
        cy.getDataTest('subscribe-form').find('input').type(email)
        cy.wait(3000)
        cy.getDataTest('subscribe-btn').click()
    })
})