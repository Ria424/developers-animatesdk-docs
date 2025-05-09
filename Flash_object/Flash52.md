# Flash.publishCacheMemoryEntrySizeLimit

## Availability

Flash CS5.5 Professional.

## Description

Property: an integer that sets the maximum size, in kilobytes, of entries that can be added to the publish cache in memory. Anything at or below this size will be kept in memory; anything larger will be written to disk.

Users with a lot of memory might want to raise this value to increase performance, while a user with very little memory might want to make it lower to keep the publish cache from consuming too much memory.

## Example

The following code sets the maximum publish cache entry size that can be stored in memory to 100 kilobytes:

```javascript
fl.publishCacheMemoryEntrySizeLimit = 100;
```

## See also

[Flash.publishCacheDiskSizeMax](../Flash_object/Flash50.md), [Flash.publishCacheEnabled](../Flash_object/Flash51.md), [Flash.clearPublishCache()](../Flash_object/Flash5.md), [Flash.publishCacheMemorySizeMax](../Flash_object/Flash53.md)
