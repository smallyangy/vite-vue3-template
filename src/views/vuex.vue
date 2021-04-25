<template>
    <div>
        <div>unit test page</div>
        <p>count is: {{ count }}</p>
        <button @click="increment">increment</button>
    </div>
    <div>123123</div>
    <p>aaa</p>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
    name: 'Vuex',
    setup() {
        const count = ref<number>(0);
        const increment = () => {
            count.value += 1;
        };

        return {
            count,
            increment
        };
    }
});
</script>

<style></style>
