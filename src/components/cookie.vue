<template>
    <div 
        :id="[isBroken ? 'broken-cookie' : 'cookie']"
        @click="brokeCookie"
    >
    </div>
    
    <div 
        id="prophecy"
        v-show="isBroken"
    >
            {{prophecy}}
    </div>
    <div
        @click="isBroken=false"
        v-show="isBroken"
    >
        Достать ещё печеньку
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'cookie',
    data() {
        return{
            prophecy: '',
            isBroken: false
        }
    },
    methods: {
        brokeCookie() {
            this.fetchRandomText();
            this.isBroken = true;
        },
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


<style>

@keyframes shake{
    20%, 60%{
        transform: translateX(-5px)
    }
    40%, 80%{
        transform: translateX(5px)
    }
}

body, html{
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
}
#cookie{
    
    content: url('../img/cookie.png');
}
#broken-cookie{
    content: url('../img/broken_cookie.png');
}
#broke-cookie{
    animation: shake 1s linear both;
}
#prophecy{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

</style>
