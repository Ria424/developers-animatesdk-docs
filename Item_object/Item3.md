# Item.hasData()

## Availability

Flash MX 2004.

## Usage

Item.hasData(name)

## Parameters

### **name**

#### Type

```typescript
string
```

#### Description

Specifies the name of the data to check for in the library item.

## Returns

`boolean`; *true* if the specified data exists; *false* otherwise.

## Description

Method; Determines whether the library item has the named data.

## Example

The following example shows a message in the Output panel if the first item in the library contains data named myData:

```javascript
if (fl.getDocumentDOM().library.items[0].hasData("myData"))
    fl.trace("Yep, it's there!");
```
