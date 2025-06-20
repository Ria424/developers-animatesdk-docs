# Flash.getAppMemoryInfo()

## Availability

Flash 8 (Windows only).

## Usage

fl.getAppMemoryInfo(memType)

## Parameters

### **memType**

#### Type

```typescript
0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
```

#### Description

An integer that specifies the memory utilization area to be queried. For a list of acceptable values, see the following description.

## Returns

An integer that represents the number of bytes being used in a specified area of Flash.exe memory.

### Type

```typescript
0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
```

## Description

Method (Windows only); returns an integer that represents the number of bytes being used in a specified area of Flash.exe memory. Use the following table to determine which value you want to pass as **`memType`**:

| **memType** | **Resource data** |
| --- | --- |
| 0 | PAGEFAULTCOUNT |
| 1 | PEAKWORKINGSETSIZE |
| 2 | WORKINGSETSIZE |
| 3 | QUOTAPEAKPAGEDPOOLUSAGE |
| 4 | QUOTAPAGEDPOOLUSAGE |
| 5 | QUOTAPEAKNONPAGEDPOOLUSAGE |
| 6 | QUOTANONPAGEDPOOLUSAGE |
| 7 | PAGEFILEUSAGE |
| 8 | PEAKPAGEFILEUSAGE |

## Example

The following example displays the current working memory consumption:

```javascript
var memsize = fl.getAppMemoryInfo(2);
fl.trace("Flash current memory consumption is " + memsize + " bytes or " + memsize / 1024 + "KB"); 
```
