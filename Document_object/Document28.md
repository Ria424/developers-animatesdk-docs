# Document.canTestScene()

## Availability

Flash MX 2004.

## Usage

Document.canTestScene()

## Parameters

None.

## Returns

`boolean`; true if you can use the [Document.testScene()](../Document_object/Document5979.md) method successfully; false otherwise.

## Description

Method; Determines whether you can use the [Document.testScene()](../Document_object/Document5979.md) method successfully.

## Example

The following example first tests whether `fl.getDocumentDOM().testScene()` can be used successfully. If so, it calls the method.

```javascript
if (fl.getDocumentDOM().canTestScene()) { 
    fl.getDocumentDOM().testScene();
}
```

## See also

- [Document.canTestMovie()](../Document_object/Document27.md)
- [Document.testMovie()](../Document_object/Document5948.md)
