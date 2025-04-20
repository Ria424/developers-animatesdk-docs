## Document.screenOutline - dropped

#### Availability

Flash MX 2004. *Dropped in Adobe Animate.*

#### Usage

Document.screenOutline

#### Example

The following example displays the array of values in the screenOutline property:

```javascript

var myArray = new Array();
for (var i in fl.getDocumentDOM().screenOutline) {
    myArray.push(" " + i + " : " + fl.getDocumentDOM().screenOutline[i]);
}
fl.trace("Here is the property dump for screenOutline: " + myArray);
```

#### See also

[Document.allowScreens() - dropped](../Document_object/Document14.md)
