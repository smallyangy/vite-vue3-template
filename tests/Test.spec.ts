import { mount } from '@vue/test-utils';
import Test from '../src/views/vuex.vue';

test('Test.vue', async () => {
    const wrapper = mount(Test);
    expect(wrapper.html()).toContain('unit test page');
    expect(wrapper.html()).toContain('count is: 0');
    await wrapper.find('button').trigger('click');
    expect(wrapper.html()).toContain('count is: 1');
});
