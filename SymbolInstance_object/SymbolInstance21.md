# SymbolInstance.is3D

## Availability

Flash Pro CS6.

## Usage

SymbolInstance.is3D

## Description

Read-only property; `boolean`; Indicates whether the symbol instance contains a 3D matrix (transform).

## Example

The following example returns the value of the is3D property for the currently selected symbol instance on the Stage:

```javascript
fl.trace("the instance contains a 3D matrix: " + fl.getDocumentDOM().selection[0].is3D);
```
