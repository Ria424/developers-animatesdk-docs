## Document.exportSWF()

#### Availability

Flash MX 2004.

#### Usage

Document.exportSWF([fileURI [, bCurrentSettings]])

#### Parameters

**fileURI** `string?`; A string, expressed as a file:/// URI, that specifies the name of the exported file. If *fileURI* is empty or not specified, Flash displays the Export Movie dialog box. This parameter is optional.

**bCurrentSettings** `boolean?false`; A boolean value that, when set to true, causes Flash to use current SWF publish settings. Otherwise, Flash displays the Export Flash Player dialog box. The default is false. This parameter is optional.

#### Returns

Nothing.

#### Description

Method; Exports the document in the Flash SWF format.

#### Example

The following example exports the document to the specified file location with the current publish settings:

```javascript
fl.getDocumentDOM().exportSWF("file:///C\|/Documents and Settings/joe\_user/Desktop/qwerty.swf", true);
```

The following example displays the Export Movie dialog box and the Export Flash Player dialog box and then exports the document based on the specified settings:

```javascript
fl.getDocumentDOM().exportSWF("", false);
```

The following example displays the Export Movie dialog box and the Export Flash Player dialog box and then exports the document based on the specified settings:

```javascript
fl.getDocumentDOM().exportSWF();
```
