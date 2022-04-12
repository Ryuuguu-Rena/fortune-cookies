<template>
    <div id="cookie">
        <div id="prophecy">
            {{prophecy}}
        </div>
    </div>
    <button @click="fetchRandomText">click</button>
</template>

<script>
import axios from 'axios'
export default {
    name: 'cookie',
    data() {
        return{
            prophecy: ''
        }
    },
    methods: {
        async fetchRandomText() {
            try {
                const response = await axios.post('http://185.228.233.132:31111/apiv1/fortune', {
                    data: {}
                });
                this.prophecy = response.data.text;
            } catch (e){
                alert('Ошибка');
                console.log(e);
            }
        }
    }
}
</script>


<style scoped>

</style>
