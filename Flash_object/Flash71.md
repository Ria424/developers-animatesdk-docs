# Flash.setPrefBoolean()

## Availability

Adobe Animate.

## Usage

fl.setPrefBoolean(keySection, keyName, keyValue)

## Parameters

### **keySection**

#### Type

```typescript
string
```

#### Description

A string that contains the preferences section that contains keyName. (usually this is "Settings").

### **keyName**

#### Type

```typescript
string
```

#### Description

A string that contains the name of the boolean preference setting to be set.

### **keyValue**

#### Type

```typescript
string
```

#### Description

A string that contains the value to be set (true or false).

## Returns

None.

## Description

Method; Sets a boolean preference value.

## Example

The following example calls the fl.setPrefBoolean() method:

```javascript
fl.setPrefBoolean("BridgeTalk", "LogIncoming", true);
```
