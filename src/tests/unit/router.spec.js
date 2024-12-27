import router from '@/router';

describe('Vue Router', () => {
  test('Rutas configuradas correctamente', () => {
    const routes = router.getRoutes();
    expect(routes).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ name: 'Home' }),
        expect.objectContaining({ name: 'About' })
      ])
    );
  });
});