# Flash.reloadEffects() - dropped

## Availability

Flash MX 2004. *Dropped in Adobe Animate*.

## Usage

fl.reloadEffects()

## Parameters

None.

## Returns

Nothing.

### Type

```typescript
void
```

## Description

*Dropped in Adobe Animate.*

Method; reloads all effects descriptors defined in the user’s Configuration Effects folder. This permits you to rapidly change the scripts during development, and it provides a mechanism to improve the effects without relaunching the application. This method works best if used in a command placed in the Commands folder.

## Example

The following example is a one-line script that you can place in the Commands folder. When you need to reload effects, go to the Commands menu and execute the script.

```javascript
fl.reloadEffects();
```
