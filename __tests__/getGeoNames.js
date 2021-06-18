import { geoNamesData } from '../src/client/js/geonames';

describe("Testing the call to external API for geonames", () => {
    test("Test 'geoNamesData' function", () => {
        const textURI = '&of=json&txt=' + encodeURI('I have brought peace, freedom, justice, and security to my new empire.')
        const place = "Bangalore";
        const geonameUsername = "abhikumar";
        const url = `http://api.geonames.org/searchJSON?q=${place}&maxRows=10&username=${geonameUsername}`;
        const output = "OK"
        expect(geoNamesData(url)).resolves.toContain(output);
    })
});