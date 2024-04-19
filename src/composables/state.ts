import { ref } from 'vue'

export default (function () {
    type PasswordPolicy = '1C8' | '3C12'
    const passwordPolicies : Array<PasswordPolicy> = ['1C8', '3C12']
    const passwordPolicy = ref<PasswordPolicy>(passwordPolicies[1])

    const isRegistering = ref(false)


    return {
        isRegistering,
        passwordPolicy,
    }
  })()  