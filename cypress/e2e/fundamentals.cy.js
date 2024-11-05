describe('template spec', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  
  it('renders correct h2 text', () => {
    cy.get('h2').should('contain.text','DASHBOARD')
  })

  it('check for h2', () => {
    cy.get('.MuiBox-root.css-69i1ev').find('h2')
  })
  it('check for h5 under h2', () => {
    cy.get('main').find('div').eq(4).find('h5')
  })
  it('renders section with correct elements', () => {
    cy.get('main').find('div').eq(8).within(() => {
      cy.get('h4').should('exist')
    })
  })
  it('click bar button', () => {
    cy.contains('div.pro-inner-item', 'Bar Chart').click()

  })
})