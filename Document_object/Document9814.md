## Document.setStrokeStyle()

#### Availability

Flash MX 2004.

#### Usage

document.setStrokeStyle(strokeType)

#### Parameters

**strokeType** `"hairline" | "solid" | "dashed" | "dotted" | "ragged" | "stipple" | "hatched"`; A string that specifies the stroke style for the current selection. Acceptable values are "hairline", "solid", "dashed", "dotted", "ragged", "stipple", and "hatched".

#### Returns

Nothing.

#### Description

Method; changes the stroke style of the selection to the specified style. For information on changing the stroke in the Tools panel and Property inspector, see [Document.setCustomStroke()](../Document_object/Document480.md).

#### Example

The following example changes the stroke style for the selection to "dashed":

```javascript
fl.getDocumentDOM().setStrokeStyle("dashed");
```
