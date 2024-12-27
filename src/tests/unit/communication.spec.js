import { mount } from '@vue/test-utils';
import ParentComponent from '@/components/ParentComponent.vue';
import ChildComponent from '@/components/ChildComponent.vue';

describe('Communication', () => {
  it('should send text from Child to Parent', async () => {
    const wrapper = mount(Parent);
    const child = wrapper.findComponent(Child);

    await child.find('input').setValue('Hola');
    await child.find('button').trigger('click');

    expect(wrapper.text()).toContain('Hola');
  });
});
