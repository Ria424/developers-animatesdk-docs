# ComponentInstance.parameters

## Availability

Flash MX 2004.

## Description

Read-only property; `Parameter[]`; An array of ActionScript 2.0 properties that are accessible from the component Property inspector. See [Parameter object](../Parameter_object/Parameter_summary.md).

## Example

The following example illustrates getting and setting the parameters property:

```javascript
var params = fl.getDocumentDOM().selection[0].parameters;
params[0].value = "some value";
```

## See also

[Parameter object](../Parameter_object/Parameter_summary.md)
