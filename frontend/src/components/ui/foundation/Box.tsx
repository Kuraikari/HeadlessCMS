"use client";

import * as React from 'react'
import { styled, type CSSProperties} from 'styled-components'
import { PolymorphicRef, PropsToTransientProps } from '../../utilities/types'
import { handleResponsiveValues } from '../../utilities/handleResponsiveValues'
import { forwardRef } from '../../utilities/forwardRef'

export interface TransientBoxProps {
    /**
     * CSS Properties
     */

    pointerEvents?: CSSProperties['pointerEvents']
    display?: CSSProperties['display']
    position?: CSSProperties['position']
    overflow?: CSSProperties['overflow']
    cursor?: CSSProperties['cursor']
    transition?: CSSProperties['transition']
    transform?: CSSProperties['transform']
    animation?: CSSProperties['animation']
    textAlign?: CSSProperties['textAlign']
    textTransform?: CSSProperties['textTransform']
    flex?: CSSProperties['flex']
    basis?: CSSProperties['flexBasis']
    grow?: CSSProperties['flexGrow']
    shrink?: CSSProperties['flexShrink']
    borderStyle?: CSSProperties['borderStyle']

    /**
     * Shorthand responsive Properties
     */
    margin?: CSSProperties['margin']
    padding?: CSSProperties['padding']

    /**
     * Individual Responsive Properties
     */
    marginLeft?: CSSProperties['marginLeft']
    marginRight?: CSSProperties['marginRight']
    marginTop?: CSSProperties['marginTop']
    marginBottom?: CSSProperties['marginBottom']
    marginBlock?: CSSProperties['marginBlock']
    marginBlockStart?: CSSProperties['marginBlockStart']
    marginBlockEnd?: CSSProperties['marginBlockEnd']
    marginInline?: CSSProperties['marginInline']
    marginInlineStart?: CSSProperties['marginInlineStart']
    marginInlineEnd?: CSSProperties['marginInlineEnd']
    paddingLeft?: CSSProperties['paddingLeft']
    paddingRight?: CSSProperties['paddingRight']
    paddingTop?: CSSProperties['paddingTop']
    paddingBottom?: CSSProperties['paddingBottom']
    paddingBlock?: CSSProperties['paddingBlock']
    paddingBlockStart?: CSSProperties['paddingBlockStart']
    paddingBlockEnd?: CSSProperties['paddingBlockEnd']
    paddingInline?: CSSProperties['paddingInline']
    paddingInlineStart?: CSSProperties['paddingInlineStart']
    paddingInlineEnd?: CSSProperties['paddingInlineEnd']
    borderRadius?: CSSProperties['borderRadius']
    borderWidth?: CSSProperties['borderWidth']
    top?: CSSProperties['top']
    bottom?: CSSProperties['bottom']
    left?: CSSProperties['left']
    right?: CSSProperties['right']
    width?: CSSProperties['width']
    maxWidth?: CSSProperties['maxWidth']
    minWidth?: CSSProperties['minWidth']
    height?: CSSProperties['height']
    maxHeight?: CSSProperties['maxHeight']
    minHeight?: CSSProperties['minHeight']

    /**
     * Theme Properties
     */
    borderColor?: CSSProperties['borderColor']
    color?: CSSProperties['color']
    background?: CSSProperties['background']
    shadow?: CSSProperties['boxShadow']
    fontSize?: CSSProperties['fontSize']
    fontWeight?: CSSProperties['fontWeight']
    lineHeight?: CSSProperties['lineHeight']
    zIndex?: CSSProperties['zIndex']
    hasRadius?: boolean
}

type BoxProps<C extends React.ElementType = 'div'> = TransientBoxProps & { children?: React.ReactNode, ref?: React.ComponentPropsWithRef<C>['ref'] }

const Box = forwardRef(<C extends React.ElementType = 'div'>(props: BoxProps<C>, ref: PolymorphicRef<C>) => {
    const {
        background,
        borderColor,
        color,
        flex,
        fontSize,
        grow,
        padding,
        paddingLeft,
        paddingRight,
        paddingBottom,
        paddingTop,
        paddingBlock,
        paddingBlockEnd,
        paddingBlockStart,
        paddingInline,
        paddingInlineEnd,
        paddingInlineStart,
        margin,
        marginTop,
        marginBottom,
        marginLeft,
        marginRight,
        marginBlock,
        marginBlockEnd,
        marginBlockStart,
        marginInline,
        marginInlineEnd,
        marginInlineStart,
        shadow,
        shrink,
        lineHeight,
        fontWeight,
        width,
        minWidth,
        maxWidth,
        height,
        minHeight,
        maxHeight,
        top,
        left,
        bottom,
        right,
        borderRadius,
        borderStyle,
        borderWidth,
        pointerEvents,
        display,
        position,
        zIndex,
        overflow,
        cursor,
        transition,
        transform,
        animation,
        textAlign,
        textTransform,
        basis,
        hasRadius,
        ...rest
    } = props;

    const mappedProps: PropsToTransientProps<TransientBoxProps> = {
        $background: background,
        $basis: basis,
        $borderColor: borderColor,
        $color: color,
        $flex: flex,
        $fontSize: fontSize,
        $grow: grow,
        $hasRadius: hasRadius,
        $padding: padding,
        $paddingBottom: paddingBottom,
        $paddingLeft: paddingLeft,
        $paddingRight: paddingRight,
        $paddingTop: paddingTop,
        $margin: margin,
        $marginLeft: marginLeft,
        $marginBottom: marginBottom,
        $marginRight: marginRight,
        $marginTop: marginTop,
        $shadow: shadow,
        $shrink: shrink,
        $lineHeight: lineHeight,
        $fontWeight: fontWeight,
        $width: width,
        $minWidth: minWidth,
        $maxWidth: maxWidth,
        $height: height,
        $minHeight: minHeight,
        $maxHeight: maxHeight,
        $top: top,
        $left: left,
        $bottom: bottom,
        $right: right,
        $borderRadius: borderRadius,
        $borderStyle: borderStyle,
        $borderWidth: borderWidth,
        $pointerEvents: pointerEvents,
        $display: display,
        $position: position,
        $zIndex: zIndex,
        $overflow: overflow,
        $cursor: cursor,
        $transition: transition,
        $transform: transform,
        $animation: animation,
        $textAlign: textAlign,
        $textTransform: textTransform,
      };

    return <StyledBox {...mappedProps} {...rest} />
}) as BoxComponent

const StyledBox = styled.div<PropsToTransientProps<TransientBoxProps>>`
    ${({ theme, ...props}) => {
        return handleResponsiveValues({
            padding: props.$padding,
        paddingTop: props.$paddingTop,
        paddingBottom: props.$paddingBottom,
        paddingLeft: props.$paddingLeft,
        paddingRight: props.$paddingRight,
        margin: props.$margin,
        marginTop: props.$marginTop,
        marginBottom: props.$marginBottom,
        marginLeft: props.$marginLeft,
        marginRight: props.$marginRight,
        top: props.$top,
        left: props.$left,
        bottom: props.$bottom,
        right: props.$right,
        width: props.$width,
        minWidth: props.$minWidth,
        maxWidth: props.$maxWidth,
        height: props.$height,
        minHeight: props.$minHeight,
        maxHeight: props.$maxHeight,
        color: props.$color,
        background: props.$background,
        fontSize: props.$fontSize,
        fontWeight: props.$fontWeight,
        lineHeight: props.$lineHeight,
        borderRadius: props.$hasRadius ? theme.borderRadius : props.$borderRadius,
        borderStyle: props.$borderColor && !props.$borderStyle ? 'solid' : props.$borderStyle,
        borderWidth: props.$borderColor && !props.$borderWidth ? '1px' : props.$borderWidth,
        borderColor: props.$borderColor,
        zIndex: props.$zIndex,
        boxShadow: props.$shadow,
        display: props.$display,
        pointerEvents: props.$pointerEvents,
        cursor: props.$cursor,
        textAlign: props.$textAlign,
        textTransform: props.$textTransform,
        transition: props.$transition,
        transform: props.$transform,
        animation: props.$animation,
        position: props.$position,
        overflow: props.$overflow,
        flex: props.$flex,
        flexShrink: props.$shrink,
        flexGrow: props.$grow,
        flexBasis: props.$basis,
        }, theme)
    }}
`

type BoxComponent<C extends React.ElementType = 'div'> = <T extends React.ElementType = C>(
    props: BoxProps<T>,
) => React.JSX.Element

export {
    Box
}

export type {
    BoxComponent,
    BoxProps
}