import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        colors: {
            background: string,
            primary: string,
            white: string,
            gray: string,
            title: string,
            shapeinput: string,
          },
        
          fonts: {
            regular: string,
            italic: string,
            medium: string,
            bold: string,
        
          },
    }
}