<template>
    <el-button @click="go('')" type="primary">home</el-button>
    <el-button @click="go('vuex')" type="warning">vuex</el-button>
    <el-button @click="go('axios')" type="success">axios</el-button>
    <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
    name: 'App',
    setup() {
        const router = useRouter();
        const go = (path: String) => {
            router.push(`/${path}`);
        };
        return {
            go
        };
    }
});
</script>

<style></style>
