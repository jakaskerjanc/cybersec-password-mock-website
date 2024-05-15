/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides

const isDeviceDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
export default createVuetify({
  theme: {
    defaultTheme: isDeviceDarkTheme ? 'myDark' : 'light',
    themes: {
      myDark: {
        dark: false,
        colors: {
          "chrome-background": '#1E1E1E',
          "chrome-background-hover": '#2F2F2F',
          "chrome-lighter-text": '#FFFFFF',
          "chrome-darker-text": '#C7C7C7',
          "chrome-bottom-border": '#5E5E5E',
        },
        // variables: {
        //   "chrome-box-shadow": 'none'
        // }
      },
      light: {
        dark: false,
        colors: {
          "chrome-background": '#FFFFFF',
          "chrome-background-hover": '#F2F2F2',
          "chrome-lighter-text": '#474747',
          "chrome-darker-text": '#000000',
          "chrome-bottom-border": '#D8E7FE',
        },
        variables: {
          "chrome-box-shadow": '1px 1px 9px 1px #9e9e9e'
        }
      },
    },
  },
})
