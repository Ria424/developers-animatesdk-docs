# Flash.toggleBreakpoint()

## Availability

Adobe Animate.

## Usage

fl.toggleBreakpoint(String fileURI, int line, Boolean enable)

## Parameters

### **fileURI**

#### Type

```typescript
string
```

#### Description

The URI of the the AS file in which to toggle the breakpoint.

### **line**

#### Type

```typescript
number
```

#### Description

An integer; the line number at which to toggle the breakpoint.

### **enable**

#### Type

```typescript
boolean
```

#### Description

If set to true, the breakpoint is enabled. If set to false, the breakpoint is disabled.

## Returns

### Type

```typescript
void
```

## Description

Toggles a breakpoint for the given .as file at the given line. If enable is false, the breakpoint currently stored at that line will be erased.

## Example

The following example enables a breakppoint at line 10 of the AS file located at C:\AS\breakpointTest.as:

```javascript
fl.toggleBreakpoint("file:///C|/AS/breakpointTest.as", 10, 1);
```
