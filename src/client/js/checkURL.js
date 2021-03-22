var validUrl = require('valid-url');
/*
 *  URI validation function using valid-url package
 */
function CheckUrl(url) {

    if (validUrl.isUri(url))
    {
        return true;
    } else {
        
        return false ;
    }
} 

export { CheckUrl }