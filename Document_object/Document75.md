# Document.getCustomStroke()

## Availability

Flash MX 2004.

## Usage

Document.getCustomStroke([locationOfStroke])

## Parameters

### **locationOfStroke**

#### Type

```typescript
"toolbar" | "selection"?
```

#### Description

A string that specifies the location of the stroke object. The following values are valid:


- "toolbar", if set, returns the stroke object of the Tools panel and Property inspector.

- "selection", if set, returns the stroke object of the selection.

If you omit this parameter, it defaults to "selection". If there is no selection, it returns undefined. This parameter is optional.

## Returns

`Stroke | undefined`; The [Stroke object](../Stroke_object/Stroke_summary.md) specified by the *locationOfStroke* parameter, if successful; otherwise, it returns undefined.

## Description

Returns the stroke object of the selected shape or, if specified, of the Tools panel and Property inspector.

## Example

The following example returns the current stroke settings of the selection and changes the stroke thickness to 2:

```javascript
var stroke = fl.getDocumentDOM().getCustomStroke("selection");
stroke.thickness = 2;
fl.getDocumentDOM().setCustomStroke(stroke);
```

The following example returns the current stroke settings of the Tools panel and Property inspector and sets the stroke color to red:

```javascript
var stroke = fl.getDocumentDOM().getCustomStroke("toolbar");
stroke.color = "#FF0000";
fl.getDocumentDOM().setCustomStroke(stroke);
```

## See also

[Document.setCustomStroke()](../Document_object/Document480.md)
