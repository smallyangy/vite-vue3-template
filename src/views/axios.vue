<template>
    <div v-loading="loading" class="title">
        <h2>axios</h2>
        <h3>个人信息</h3>
        <div class="user-cell">
            <img class="img" :src="user.avatar" />
            <div class="info">
                <div class="name">{{ user.name }}</div>
                <div class="website">
                    <a :href="user.html_url" target="_blank">{{ user.html_url }}</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, reactive } from 'vue';
import axios from '../utils/axios';

export default defineComponent({
    setup() {
        const loading = ref(false);
        const user = reactive({
            name: '',
            avatar: '',
            html_url: ''
        });

        onMounted(async () => {
            try {
                loading.value = true;
                const { data } = await axios.get('/users/smallyangy');
                user.name = data.name;
                user.avatar = data.avatar_url;
                user.html_url = data.html_url;
            } catch (e) {
                console.error(e);
            } finally {
                loading.value = false;
            }
        });

        return {
            loading,
            user
        };
    }
});
</script>

<style lang="scss">
.title {
    h2 {
        color: orange;
    }
    .user-cell {
        display: flex;
        align-items: center;
        .img {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            flex: none;
        }
        .info {
            flex: 1;
            margin-left: 20px;
            .name {
                font-weight: bold;
            }
            .website {
                font-size: 12px;
                a {
                    color: #999;
                }
            }
        }
    }
}
</style>
