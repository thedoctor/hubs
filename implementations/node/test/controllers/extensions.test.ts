import { axios, integrationTestSetup } from '../test_helper';

integrationTestSetup();

it('retuns the id in the message', async () => {
  const id = 2;
  const resp = await axios.get(`/extensions/${id}`);
  return expect(resp.data).toBe(`extension with id: ${id}`);
});
