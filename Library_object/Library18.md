## Library.unusedItems

#### Availability

Adobe Animate.

#### Usage

Library.unusedItems

#### Description

Property; `Item[]`; An array of Library Items that are not used in the document. This is the equivalent of the "Select Unused Items" menu item in the Library panel.

#### Example

The following example illustrates the use of this property:

```javascript
var items = fl.getDocumentDOM().library.unusedItems;
fl.trace("number of unused items found: " + items.length);
for (var i in items)
    fl.trace("" + items[i].name);
```
