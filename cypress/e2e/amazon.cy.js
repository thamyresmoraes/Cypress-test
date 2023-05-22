// mobile_regression.spec.js
import { qase } from 'cypress-qase-reporter/dist/mocha';

describe('Mobile Regression Test Suite', () => {
   it('should add 3 random items to cart, sum their values and validate total', () => {
      cy.visit('https://www.amazon.com')
      cy.get('#twotabsearchtextbox').type('random item{enter}')
      cy.get('.s-result-item').eq(0).click()
      cy.get('#add-to-cart-button').click()
      cy.get('.a-button-stack > #hlb-view-cart-announce').click()
      cy.get('.a-size-medium').then(($items) => {
        const itemCount = $items.length
        expect(itemCount).to.eq(1)
        cy.get('.a-size-medium').eq(0).click()
        cy.get('#add-to-cart-button').click()
        cy.get('.a-button-stack > #hlb-view-cart-announce').click()
        cy.get('.a-size-medium').then(($items) => {
          const itemCount = $items.length
          expect(itemCount).to.eq(2)
          cy.get('.a-size-medium').eq(1).click()
          cy.get('#add-to-cart-button').click()
          cy.get('.a-button-stack > #hlb-view-cart-announce').click()
          cy.get('.a-size-medium').then(($items) => {
            const itemCount = $items.length
            expect(itemCount).to.eq(3)
            let total = 0
            cy.get('.a-size-medium').each(($el) => {
              const price = $el.find('.a-price > .a-offscreen').text().replace('$', '')
              total += parseFloat(price)
            }).then(() => {
              cy.get('#sc-subtotal-amount-activecart').then(($el) => {
                const subtotal = $el.text().replace('$', '')
                expect(parseFloat(subtotal)).to.eq(total)
              })
            })
          })
        })
      })
    })

  })


