# Instance.libraryItem

## Availability

Flash MX 2004.

## Usage

instance.libraryItem

## Description

Property; `Item`; A library item used to instantiate this instance. You can change this property only to another library item of the same type (that is, you cannot set a symbol instance to refer to a bitmap). See [Library object](../Library_object/Library_summary.md).

## Example

The following example changes the selected symbol to refer to the first item in the library:

```javascript
fl.getDocumentDOM().selection[0].libraryItem = fl.getDocumentDOM().library.items[0];
```
