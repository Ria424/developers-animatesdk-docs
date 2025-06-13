# Timeline.setLayerProperty()

## Availability

Flash MX 2004.

## Usage

Timeline.setLayerProperty(property, value \[, layersToChange\])

## Parameters

### **property**

#### Type

```typescript
string
```

#### Description

The property to set. For a list of properties, see "[Layer object](../Layer_object/Layer_summary.md)".

### **value**

#### Type

```typescript
any
```

#### Description

The value to which you want to set the property. Use the same type of value you would use when setting the property in the layer object.

### **layersToChange**

#### Type

```typescript
"selected" | "all" | "others"?
```

#### Description

A string that identifies which layers should be modified. Acceptable values are "selected", "all", and "others". The default value is "selected" if you omit this parameter. This parameter is optional.

## Returns

Nothing.

### Type

```typescript
void
```

## Description

Method; Sets the specified property on all the selected layers to a specified value.

## Example

The following example makes the selected layer(s) invisible:

```javascript
fl.getDocumentDOM().getTimeline().setLayerProperty("visible", false);
```

The following example sets the name of the selected layer(s) to selLayer:

```javascript
fl.getDocumentDOM().getTimeline().setLayerProperty("name", "selLayer");
```
