require('dotenv').config()

export default {
  modules: [
    [
      '@storyblok/nuxt-auth',
      {
        id: 'RFE0yOWi4mpcMGZrO6zbrA==',
        secret: 'TtmZyfcdQrvPzhIjGheFZm3AaaqeNXK8uCkh0QANo2/AgmaLeGRmECDukgUqphDwTOR+m4FIE9oJxfm2Xafwfw==',
        redirect_uri: 'https://ae12-45-112-31-103.in.ngrok.io/auth/callback'
      }
    ]
  ]
}