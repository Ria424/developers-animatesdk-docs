## SymbolInstance.shortcut

#### Availability

Flash MX 2004.

#### Usage

SymbolInstance.shortcut

#### Description

Property; `string`; A string that is equivalent to the shortcut key associated with the symbol. This property is equivalent to the Shortcut field in the Accessibility panel. This key is read by the screen readers.
This property is not available for graphic symbols.

#### Example

The following example stores the value for the shortcut key of the object in the theShortcut variable:

```javascript
var theShortcut = fl.getDocumentDOM().selection[0].shortcut; 
```

The following example sets the shortcut key of the object to Ctrl+i:

```javascript
fl.getDocumentDOM().selection[0].shortcut = "Ctrl+i";
```
