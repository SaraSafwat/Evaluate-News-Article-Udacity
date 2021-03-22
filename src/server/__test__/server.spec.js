// to solve ReferenceError: regeneratorRuntime is not defined
// https://knowledge.udacity.com/questions/174638

// To solving "ReferenceError: regeneratorRuntime is not defined"
import 'babel-polyfill'


describe('Server Test', () => {

    describe('Sample Test', () => {

        it('should test that true === true', () => {

            expect(true).toBe(true);

        })
    })

})
