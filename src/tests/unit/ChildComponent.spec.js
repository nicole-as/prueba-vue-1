import { shallowMount } from '@vue/test-utils';
import Child from '@/components/ChildComponent.vue';
import ChildComponent from '@/components/ChildComponent.vue';

describe('Child.vue', () => {
  test('Emite el evento con texto', () => {
    const wrapper = shallowMount(ChildComponent);
    const input = wrapper.find('input');
    input.setValue('Hola');

    wrapper.find('button').trigger('click');
    expect(wrapper.emitted().enviarTexto[0]).toEqual(['Hola']);
  });
});