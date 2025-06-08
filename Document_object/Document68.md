# Document.exportVideo()

## Availability

Adobe Animate.

## Usage

Document.exportVideo(fileURI [, convertInAdobeMediaEncoder] [, transparent] [, stopAtFrame] [, stopAtFrameOrTime])

## Parameters

### **fileURI**

#### Type

```typescript
string
```

#### Description

A string, expressed as a file:/// URI, that specifies the fully qualified path to which the video is saved.

### **convertInAdobeMediaEncoder**

#### Type

```typescript
boolean?
```

#### Description

Specifies whether or not to send the recorded video to Adobe Media Encoder. The default value is true, which sends the video to Adobe Media Encoder. This parameter is optional.

### **transparent**

#### Type

```typescript
boolean?
```

#### Description

Specifies whether or not the background should be included in the video. The default value is false, which includes the movie background in the video. This parameter is optional.

### **stopAtFrame**

#### Type

```typescript
boolean?
```

#### Description

Specifies whether the video should be recorded until it reaches a certain frame or a specific time. The default value is true, stop when a certain frame is reached. This parameter is optional.

### **stopAtFrameOrTime**

#### Type

```typescript
number?
```

#### Description

If stopAtFrame is true, this is an integer specifying the number of frames to record. If stopAtFrame is false, this is the number of milliseconds to record. The default value is 0 which, if stopAtFrame is true, will record all the frames in the main timeline. This parameter is optional.

## Returns

Nothing.

## Description

Method; Exports a video from the document and optionally sends it to Adobe Media Encoder to convert the video.

## Example

The following example illustrates the use of this method:

```javascript
fl.getDocumentDOM().exportVideo("file:///C\|/myProject/myVideo.mov");
```
