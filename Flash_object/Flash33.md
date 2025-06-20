# Flash.getThemeColorParameters()

## Availability

Adobe Animate.

## Usage

fl.getThemeColorParameters()

## Parameters

None.

## Returns

An array of strings that contain the theme color parameters.

### Type

```typescript
string[]
```

## Description

Method; returns an Array of strings that contain the theme color parameters. The available theme color parameters are as follows:

- themeAppBackgroundColor
- themeItemSelectedColor
- themeItemHighlightedColor
- themeHotTextNormalColor
- themeHotTextRolloverColor
- themeHotTextDisableColor
- themeStaticTextNormalColor
- themeStaticTextDisableColor
- themeTextEditNormalBackgroundColor
- themeTextEditDisableBackgroundColor
- themeUseGradients
- themeEnableShading
- themeDividerLine
- themeDividerLineBevel
- themeControlFocus
- themeControlBorderNormal
- themeControlBorderDisabled
- themeControlFillNormal
- themeControlFillTopNormal
- themeControlFillBottomNormal
- themeControlFillOver
- themeControlFillTopOver
- themeControlFillBottomOver
- themeControlFillDown
- themeControlFillTopDown
- themeControlFillBottomDown
- themeControlFillDisabled
- themeControlFillTopDisabled
- themeControlFillBottomDisabled
- themeControlFillSelectedOver
- themeControlFillTopSelectedOver
- themeControlFillBottomSelectedOver
- themeGenericIconNormal
- themeGenericIconShadowNormal
- themeGenericIconDisabled
- themeGenericIconShadowDisabled

Adobe Animate introduced 2 UI themes: Dark and Light UI, and this method retrieves the current theme color parameters to help you render your custom content.

***Note:** The "top" and "bottom" colors are for drawing controls when shading is enabled. When shading is disabled, use*
*themeControlFillNormal, themeControlFillOver without the "top" and "bottom" in the names*

## Example

The following example lists the theme color parameters:

```javascript
var params = fl.getThemeColorParameters();
for (var x = 0; x < params.length; x++) {
    fl.trace("params: " + params[x]);
}
```
