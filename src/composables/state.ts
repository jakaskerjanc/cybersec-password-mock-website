import { ref } from 'vue'

export default (function () {
    type PasswordPolicy = '1C8' | '3C12'
    const passwordPolicies : Array<PasswordPolicy> = ['1C8', '3C12']
    const passwordPolicy = ref<PasswordPolicy>(passwordPolicies[1])

    type Page = 'Landing' | 'Login' | 'Register'
    const currentPage = ref<Page>('Landing')

    const accountPassword = ref<string | null>(null)
    const accountEmail = ref<string | null>(null)

    return {
        currentPage,
        passwordPolicy,
        accountPassword,
        accountEmail
    }
  })()  