/**
 * @jest-environment jsdom
 */

const { fetchBrandData, toggleSearchActive } = require('../searchFunctionality');

// Mocking the global.fetch method for avoiding making real HTTP requests
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ brand: 'Test Brand' })
  })
);

beforeEach(() => {
  // Clear all instances and calls to constructor and all methods:
  fetch.mockClear();

  // Setup a basic DOM structure
  document.body.innerHTML = `
    <div class="search-box"></div>
    <div id="response-container"></div>
  `;
});

describe('Search Functionality', () => {
  test('toggles the active class on the search element', () => {
    const searchBox = document.querySelector('.search-box');
    toggleSearchActive(searchBox);
    expect(searchBox.classList.contains('active')).toBeTruthy();

    toggleSearchActive(searchBox);
    expect(searchBox.classList.contains('active')).toBeFalsy();
  });

  test('fetches brand data successfully', async () => {
    const responseContainer = document.getElementById('response-container');
    const data = await fetchBrandData('Toyota', responseContainer);

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(data).toEqual({ brand: 'Test Brand' });
    expect(responseContainer.innerText).toContain('Test Brand');
  });

  // Incorrect fetch data expactations (the test should fail)
  // test('fetches brand data successfully', async () => {
  //   const responseContainer = document.getElementById('response-container');
  //   const data = await fetchBrandData('Toyota', responseContainer);
  // // Expect data that does not match the mock
  //   expect(data).toEqual({ brand: 'Nonexistent Brand' }); // This will fail because the mock returns { brand: 'Test Brand' }.
  // });
  

  test('handles search input correctly', async () => {
    const responseContainer = document.getElementById('response-container');
    await fetchBrandData('Camry', responseContainer);

    expect(fetch).toHaveBeenCalledWith(expect.stringContaining('Camry'), expect.anything());
  });

  test('handles year input correctly', async () => {
    const responseContainer = document.getElementById('response-container');
    await fetchBrandData('2018', responseContainer);

    expect(fetch).toHaveBeenCalledWith(expect.stringContaining('2018'), expect.anything());
  });
});
