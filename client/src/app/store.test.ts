import { store } from './store';

describe('Redux store', () => {
  it('starts with the application initialized', () => {
    expect(store.getState().app.initialized).toBe(true);
  });
});
