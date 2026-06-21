import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { getPOSTAPIRequestBody } from '../../src/utils/APIHelper';

test.use({
    baseURL: process.env.BASE_API_URL,
})

test('Create POST API request using TypeSafety api request body in playwright with typescript using faker', async ({ request }) => {
    //reading the Json file
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const totalPrice = faker.number.int({ min: 1000, max: 10000 })

    //passing the dynamic data
    const postAPIRequest = await getPOSTAPIRequestBody(firstName, lastName
        , totalPrice, true, 'breakfast', '2026-06-20', '2026-06-21');

    //Updating Post API request body
    //Create POST API request
    const postAPIResponse = await request.post('booking', { data: postAPIRequest });
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