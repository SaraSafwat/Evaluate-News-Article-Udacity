// TODO: import the url check function
import { CheckUrl } from '../js/checkURL'


var url_valid = "https://jamesclear.com/2019-annual-review" ; 
var url_notValid = "jamesclear.com" ;


describe('Test check url functionality', () => {
    test('Testing the checkUrl function defined or not', () => {
        var result = CheckUrl(url_valid);
        expect(result).toBeDefined();
    })

    test('Testing the checkUrl function return false for invalid url', () => {
        var result = CheckUrl(url_notValid);
        expect(result).toBe(false);
    })

    test('Testing the checkUrl function return true for valid url', () => {
        var result = CheckUrl(url_valid);
        expect(result).toBe(true);
    })
})
