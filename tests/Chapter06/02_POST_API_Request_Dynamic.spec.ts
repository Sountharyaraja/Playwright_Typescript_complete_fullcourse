import { test, expect } from '@playwright/test';
import { formatAPIRequest } from '../../src/utils/APIHelper';
import path from 'path';
import fs from 'fs';
import { faker } from '@faker-js/faker';

test.use({
    baseURL: process.env.BASE_API_URL,
})

test('Create POST API request using dynamic api request body in playwright with typescript', async ({ request }) => {
    //reading the Json file
    const filePath = path.join(__dirname, '../../test-data/api_requests/DYNMAIC_POST_API_Request.json');
    const jsonTemplate = fs.readFileSync(filePath, 'utf-8');

    //passing the dynamicdata
    const values = ['Soundarya', 'Raja', 2000];

    //Updating Post API request body
    const postAPIRequest = await formatAPIRequest(jsonTemplate, values);

    //Create POST API request
    const postAPIResponse = await request.post('booking', { data: JSON.parse(postAPIRequest) });
    //Printing JSON API response
    const jsonPostAPIResponse = await postAPIResponse.json();
    console.log('POST API Response: ' + JSON.stringify(jsonPostAPIResponse, null, 2));
    //validate API response
    //validate status code
    expect(postAPIResponse.status()).toBe(200);
    //validate response successful
    expect(postAPIResponse.ok()).toBeTruthy();
    expect(postAPIResponse.headers()['content-type']).toContain('application/json');

    //validate property/key names
    expect(jsonPostAPIResponse.booking).toHaveProperty('firstname');
    expect(jsonPostAPIResponse.booking).toHaveProperty('lastname');

    expect(jsonPostAPIResponse.booking.bookingdates).toHaveProperty('checkin');
    expect(jsonPostAPIResponse.booking.bookingdates).toHaveProperty('checkout');

    //validate API response body
    expect(jsonPostAPIResponse.bookingid).toBeGreaterThan(0);
    expect(jsonPostAPIResponse.booking.firstname).toBe('Soundarya');
    expect(jsonPostAPIResponse.booking.lastname).toBe('Raja');

    //validate nested json object body
    expect(jsonPostAPIResponse.booking.bookingdates.checkin).toBe('2026-06-20');
    expect(jsonPostAPIResponse.booking.bookingdates.checkout).toBe('2026-06-21');
});


test('Create POST API request using dynamic api request body in playwright with typescript using faker', async ({ request }) => {
    //reading the Json file
    const filePath = path.join(__dirname, '../../test-data/api_requests/DYNMAIC_POST_API_Request.json');
    const jsonTemplate = fs.readFileSync(filePath, 'utf-8');

    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const totalPrice = faker.number.int({ min: 1000, max: 10000 })

    //passing the dynamicdata
    //const values = ['Soundarya', 'Raja', 2000];
    const values = [firstName, lastName, totalPrice];

    //Updating Post API request body
    const postAPIRequest = await formatAPIRequest(jsonTemplate, values);

    //Create POST API request
    const postAPIResponse = await request.post('booking', { data: JSON.parse(postAPIRequest) });
    //Printing JSON API response
    const jsonPostAPIResponse = await postAPIResponse.json();
    console.log('POST API Response: ' + JSON.stringify(jsonPostAPIResponse, null, 2));
    //validate API response
    //validate status code
    expect(postAPIResponse.status()).toBe(200);
    //validate response successful
    expect(postAPIResponse.ok()).toBeTruthy();
    expect(postAPIResponse.headers()['content-type']).toContain('application/json');

    //validate property/key names
    expect(jsonPostAPIResponse.booking).toHaveProperty('firstname');
    expect(jsonPostAPIResponse.booking).toHaveProperty('lastname');

    expect(jsonPostAPIResponse.booking.bookingdates).toHaveProperty('checkin');
    expect(jsonPostAPIResponse.booking.bookingdates).toHaveProperty('checkout');

    //validate API response body
    expect(jsonPostAPIResponse.bookingid).toBeGreaterThan(0);
    expect(jsonPostAPIResponse.booking.firstname).toBe(firstName);
    expect(jsonPostAPIResponse.booking.lastname).toBe(lastName);

    //validate nested json object body
    expect(jsonPostAPIResponse.booking.bookingdates.checkin).toBe('2026-06-20');
    expect(jsonPostAPIResponse.booking.bookingdates.checkout).toBe('2026-06-21');
});