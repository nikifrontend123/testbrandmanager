<template>
    <div class="row g-0" style="min-height: 100vh;">
        <div class="pt-2 col-md-6 d-flex flex-column justify-content-center align-items-center"
            style="background: linear-gradient(113deg, #F48B29 31%, #eca25d 97%);">

            <router-link to="/" class=" rounded-circle d-flex justify-content-center" style="height: 150px; width: 150px;">
                <img :src="`${publicPath}${logo}`" style="width: 100%; object-fit: contain;">
            </router-link>
            <div class="d-flex justify-content-center">
                <p class="mt-2 m-0 fw-bold icon">Fabricator</p>
            </div>
        </div>
        <div class="container d-flex flex-column justify-content-center col-md-6 bg-light pt-2">
            <p class="d-flex justify-content-center fs-5">Login Your Account </p>
            <form @submit.prevent="loginAccount()">
                <div class="w-100 p-2 form-floating">
                    <input type="tel" class="form-control" placeholder="Mobile" v-model="mobile">
                    <label for="floatingInput" class="text-muted">Mobile No.</label>
                </div>
                <p class="text-center m-0">Or</p>
                <div class="w-100 p-2 form-floating">
                    <input type="email" class="form-control" id="floatingInput" placeholder="Email" v-model="email"
                        required>
                    <label for="floatingInput" class="text-muted">Enter your Email</label>
                </div>

                <div class="w-100 p-2 form-floating">
                    <input type="password" class="form-control" id="floatingInput2" placeholder="Password"
                        v-model="password" required>
                    <label for="floatingInput2" class="text-muted">Password</label>
                </div>
                <!-- <div class="w-100 p-2 form-floating">
                    <input type="text" class="form-control" id="floatingInput2" placeholder="Type" v-model="type" required>
                    <label for="floatingInput2" class="text-muted">Type</label>
                </div> -->

                <div class="d-flex justify-content-center align-items-center w-100 px-2 mt-2">
                    <button type="submit" class="btn text-white py-2 fs-5 w-100"
                        style="padding: 10px 12px !important;background: linear-gradient(113deg, #F48B29 31%, #eca25d 97%);">Submit</button>
                </div>
            </form>
        </div>
        <div class="d-flex justify-content-center w-100 mt-4">
            <router-link to="/catalog">
                <button class="btn btn-danger">Catalog</button>
            </router-link>
        </div>
        <!-- <div class="d-flex justify-content-center p-2">
            <router-link to="/Registration" class="w-100 rounded"
                style="box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;">
                <button class="btn w-100 fs-5 text-white"
                    style="background: linear-gradient(113deg, #F48B29 31%, #eca25d 97%);">
                    Click here for Register
                </button>
            </router-link>
        </div> -->
    </div>
</template>

<script> 
import axiosinstance from '@/axiosPort'
export default {
    data() {
        return {
            logo: "img/logo/logo.png",
            publicPath: process.env.BASE_URL,
            email: "manager@gmail.com",
            password: "password",
            type: null,
            users: null,
            mobile: null
        };
    },
    methods: {
        loginAccount() {

            if (this.email && this.email !== '') {
                this.type = 'email';
            }

            if (this.mobile && this.mobile !== '') {
                this.type = 'mobile';
            }

            if (this.type) {
                axiosinstance.post('login', {
                    email: this.email,
                    mobile: this.mobile,
                    password: this.password,
                    type: this.type,
                    device: 'Nikhil'
                }).then((response) => {
                    console.log('data sent', response)
                    const token = response.data.data.token;
                    localStorage.setItem('token', token);
                    console.log('login succesful token stored', token)
                    this.$router.push('/stocks')
                }).catch((error) => {
                    console.log('error', error)
                })
            } else {
                alert('Either Mobile or Email is reqiored');
            }
        }
    },
}
</script>

<style scoped>
.icon {
    /* font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif; */
    font-family: Arial, Helvetica, sans-serif;
    font-size: 2rem;
    color: white;
    /* background: -webkit-linear-gradient(113deg, #28CC9E 31%, #1FAB89 97%); */
    padding: 14px 12px;
    /* -webkit-text-fill-color: transparent; */
    background-clip: text;
}
</style>