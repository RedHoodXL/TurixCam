import 'dotenv/config';

export default {
  "expo": {
    "name": "TurixCamApp",
    "slug": "turixcamapp",
    "version": "1.1.1",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "automatic",
    "plugins":
      ["@react-native-google-signin/google-signin", "react-native-email-link"],
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "supportsTablet": true,
      "bundleIdentifier": "com.enrique.guerra.ruiz.turixcamapp"
    },
    "android": {
      "package": "com.enrique_guerra_ruiz.turixcamapp",
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      },
      "android.config.googleMaps.apiKey": "AIzaSyDnNmX2KXACPsGW0swx0FQtZvTbnY5uU7"
    },
    "web": {
      "favicon": "./assets/favicon.png"
    },
    extra: {
      apiKey: process.env.API_KEY,
      authDomain: process.env.AUTH_DOMAIN,
      projectId: process.env.PROJECT_ID,
      storageBucket: process.env.STORAGE_BUCKET,
      messagingSenderId: process.env.MESSAGING_SENDER_ID,
      appId: process.env.APP_ID,
      "eas": {
        "projectId": "e9127d71-ad4f-48f2-8d9d-97ac0cfe127e"
      }
    },
    "owner": "enrique_guerra_ruiz",
    "scheme": "turixcamapp",
  }
}
