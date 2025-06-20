# Flash.getThemeColor()

## Availability

Adobe Animate.

## Usage

fl.getThemeColor(themeParamName)

## Parameters

### **themeParamName**

#### Type

```typescript
string
```

#### Description

A string that contains a theme parameter from the list returned by the `fl.getThemeColorParameters()` method. If the theme parameter is "themeUseGradients", this method returns either "true" or "false".

## Returns

A string containing a theme color (in #rrggbb or #rrggbbaa format) that matches the passed parameter. If the theme parameter is "themeUseGradients", this method returns either "true" or "false".

### Type

```typescript
string
```

## Description

Method; Returns the theme color that matches the passed theme parameter. Adobe Animate introduced 2 UI themes: Dark and Light UI, and this method retrieves the current theme color to help you render your custom content.

## Example

The following example returns the theme colors that corresponds to "themeAppBackgroundColor" and
"themeStaticTextNormalColor":

```javascript
var colorValue = fl.getThemeColor("themeAppBackgroundColor");
fl.trace("app background color " + colorValue);
var staticColor = fl.getThemeColor("themeStaticTextNormalColor");
fl.trace("staticColor " + staticColor);
```
