import { } from 'styled-components';
import { CSSProp } from 'styled-components';

import { theme, ThemeType } from './theme';

declare module 'react' {
    interface Attributes {
        css?: CSSProp | CSSObject;
    }
}

declare module 'styled-components' {
    export interface DefaultTheme extends ThemeType { } // extends the global DefaultTheme with our ThemeType.
}

// declare module 'styled-components' {
//     type Theme = typeof theme;
//     export interface DefaultTheme extends Theme { }
// }

