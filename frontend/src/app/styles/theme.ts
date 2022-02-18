import { DeepPartial, extendTheme, Theme } from '@chakra-ui/react'

const customTheme: DeepPartial<Theme> = {
  colors: {
    gray: {
      "900": "#181B23",
      "800": "#1F2029",
      "700": "#353646",
      "600": "#4B4D63",
      "500": "#616480",
      "400": "#797D9A",
      "300": "#9699B0",
      "200": "#B3B5C6",
      "100": "#D1D2DC",
      "50": "#EEEEF2",
    },
    blue: {
      "50": "#CEE6D9",
      "200": "#72b6b7"
    }
  },
  fonts: {
    heading: 'Roboto',
    body: 'Roboto'
  },
  styles: {    
    global: {
      body: {
        bg: 'blue.50',
        color: 'gray.50'
      }
    }
  }
}

export const theme = extendTheme(customTheme)