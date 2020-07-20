<template>
    <div class="main-content container-fluid">
        <div class="row message-box">
            <div class="col-lg-2 col-md-3 col-sm-5 mb-5">
                <p class="m-1">
                    Attendees
                </p>
                <div class="message-email">
                    <ul class="message-email-list">
                        <li class="message-email-item">
                            duh@email.com
                        </li>
                        <li class="message-email-item">
                            duh@email.com
                        </li>
                    </ul>
                </div>
            </div>

            <div class="col-lg-8 col-md-7 col-sm-6">
                <div class="container-fluid">
                    <div class="row justify-content-between">
                    <p class="m-1">
                        Meeting Feed
                    </p>
                        <at-button>add item </at-button>
                    </div>
                </div>

                <div class="message-content">
                    <at-card class="mb-2 card-item">
                        <p slot="title" class="card-title">
                            notes
                        </p>
                        <div class="card-content">
                            asdasjdnasjdn asnd jaksn dkjansdjkn ajksdn ajknsd jkansdk nasjkd nask
                        </div>
                    </at-card>
                    <at-card class="mb-2 card-item">
                        <p slot="title" class="card-title">
                            notes
                        </p>
                        <div class="card-content">
                            asdasjdnasjdn asnd jaksn dkjansdjkn ajksdn ajknsd jkansdk nasjkd nask
                        </div>
                    </at-card>
                </div>
            </div>

            <div class="col-2">

            </div>
        </div>
        <div class="row justify-content-end m-0">
            <at-button @click="handleClick" class="btn-success" id="finishMessage-button">Finish Message </at-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'MessageFeed',
        methods: {
            handleClick() {
                this.$router.push({name: 'GreatSession'});
            }
        }
    }
</script>