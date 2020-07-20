<template>
    <div class="main-content container">
        <p class="caption-text">
            Enter Your Email
        </p>
        <br>
        <at-input v-model="value" class="button"></at-input>
        <br>
        <br>
        <at-button @click="handleClick" class="btn-success" id="startNewSession-button">Start New Session </at-button>
    </div>
</template>

<script>
    export default {
        name: 'StartNewSession',
        data() {
            return {
                value: ''
            }
        },
        methods: {
            handleClick () {
                this.$router.push({name: 'ShareLink'});
            }
        }
    }
</script>