<template>
  <div id="login" class="login-container">
    <div class="form-outer">
      <h3>welcome</h3>

      <div class="form-inner">
        <p v-if="isCredentialsWrongErr" class="text-error text-center">
          Email or Password is incorrect
        </p>
        <p v-if="isOver5Times" class="text-error text-center">
          You entered the wrong login information more than 5 times <br />
          Please try again in an hour
        </p>
        <div class="form-group">
          <input
            class="input-control"
            name="email"
            type="text"
            placeholder="Email"
            v-model="email"
            @blur="validateOnBlur"
          />
          <p class="text-error" v-if="errorTexts.email">
            {{ errorTexts.email }}
          </p>
        </div>
        <div class="form-group password-group">
          <input
            class="input-control"
            :type="passwordFieldType === 0 ? 'password' : 'text'"
            placeholder="Password"
            name="password"
            v-model="password"
            @blur="validateOnBlur"
          />
          <button
            type="button"
            class="showpass"
            @click="toggleInputType('passwordFieldType')"
          >
            <img
              v-if="passwordFieldType === 1"
              src="@/assets/icons/ic-open_eye.png"
            />
            <img v-else src="@/assets/icons/ic-close_eye.png" />
          </button>
          <p class="text-error" v-if="errorTexts.password">
            {{ errorTexts.password }}
          </p>
        </div>
        <button
          class="login-button"
          v-loading="isLoading"
          type="button"
          @click="onClickLogin"
        >
          Login
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import schema from './validateSchema'

export default {
  components: {},
  data() {
    return {
      isLoading: false,
      email: '',
      password: '',
      passwordFieldType: 0,
      errorTexts: {
        email: '',
        password: '',
      },
      isOver5Times: false,
      isCredentialsWrongErr: false,
    }
  },
  methods: {
    toggleInputType(param) {
      this[param] = this[param] === 0 ? 1 : 0
    },

    validateOnBlur(e) {
      this.errorTexts[e.target.name] = ''

      const { error } = schema.validate({ [e.target.name]: e.target.value })

      if (error) {
        const message = error.details.find(
          (detail) => detail.context.label === e.target.name
        )

        if (message) {
          this.errorTexts[e.target.name] = message.message
        } else {
          this.errorTexts[e.target.name] = ''
        }
      } else {
        this.errorTexts[e.target.name] = ''
      }
    },
    onClickLogin() {
      if (this.isLoading) {
        return
      }

      this.isLoading = true
      this.isCredentialsWrongErr = false
      this.isOver5Times = false
      this.errorTexts = {
        email: '',
        password: '',
      }

      const { email, password } = this
      const { error } = schema.validate({ email, password })

      if (error) {
        error.details.forEach((detail) => {
          this.errorTexts[detail.context.label] = detail.message
        })
        this.isLoading = false
        return
      } else {
        this.$router.replace({
          name: 'Dashboard',
        })
      }
    },
  },
}
</script>
<style lang="scss" scoped>
@import './index.scss';
</style>
