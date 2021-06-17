import {gettingWeatherData} from "../src/client/js/app";
// import {describe, expect} from "@jest/globals";


describe('Testing gettingWeatherData function', () => {
    test('It should return true because the function is defined', () => {
        expect(gettingWeatherData).toBeDefined();
    });
    test('It should return true as gettingWeatherData is a function', () => {
        expect(typeof gettingWeatherData).toBe('function');
    });
});