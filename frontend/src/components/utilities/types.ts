import { DefaultTheme } from 'styled-components';

type PropsToTransientProps<TProps extends Record<string, any>> = {
    [K in keyof TProps as `$${string & K}`]: TProps[K];
};

type DefaultThemeOrCSSProp<T extends keyof DefaultTheme, K extends keyof React.CSSProperties> =
    | keyof DefaultTheme[T]
    | React.CSSProperties[K];

type PolymorphicRef<C extends React.ElementType> = React.ComponentPropsWithRef<C>['ref'];

export type {
    PropsToTransientProps,
    DefaultThemeOrCSSProp,
    PolymorphicRef
}