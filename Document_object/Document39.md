# Document.currentTimeline

## Availability

Flash MX 2004.

## Description

Property; `integer`; Specifies the index of the active timeline. You can set the active timeline by changing the value of this property; the effect is almost equivalent to calling [Document.editScene()](../Document_object/Document57.md). The only difference is that you don’t get an error message if the index of the timeline is not valid; the property is simply not set, which causes silent failure.

## Example

The following example displays the index of the current timeline:

```javascript
var myCurrentTL = fl.getDocumentDOM().currentTimeline;
fl.trace("The index of the current timeline is: " + myCurrentTL);
```

The following example changes the active timeline from the main timeline to a scene named "myScene":

```javascript
var i = 0;
var curTimelines = fl.getDocumentDOM().timelines;
while (i < fl.getDocumentDOM().timelines.length) {
    if (curTimelines[i].name == "myScene") {
        fl.getDocumentDOM().currentTimeline = i;
    }
    ++i;
}
```

## See also

[Document.getTimeline()](../Document_object/Document88.md)
