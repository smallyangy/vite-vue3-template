<template>
    <div class="title">
        <h2>axios</h2>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import axios from '../utils/axios';

export default defineComponent({
    setup() {
        axios
            .get('/users/XPoet')
            .then((res) => {
                console.log('res: ', res);
            })
            .catch((err) => {
                console.log('err: ', err);
            });
    }
});
</script>

<style lang="scss">
.title {
    h2 {
        color: orange;
    }
}
</style>
