# Flash.reloadTools()

## Availability

Flash MX 2004.

## Usage

fl.reloadTools()

## Parameters

None.

## Returns

Nothing.

### Type

```typescript
void
```

## Description

Method; rebuilds the Tools panel from the toolconfig.xml file. This method is used only when creating extensible tools. Use this method when you need to reload the Tools panel, for example, after modifying the JSFL file that defines a tool that is already present in the panel.

## Example

The following example is a one-line script that you can place in the Commands folder. When you need to reload the Tools panel, run the script from the Commands menu.

```javascript
fl.reloadTools();
```
