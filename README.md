## Haplogroup Story

#### HTML
The index.html file contains a story viewer, implemented as an iframe, that imports a requested story, and inline CSS and jQuery which ensure the viewer fills the viewport. In the following

```
<iframe src="https://www.britainsdna.com/mydna/stories/view/{{HAPLOGROUP_ID}}"></iframe>

e.g.

<iframe src="https://www.britainsdna.com/mydna/stories/view/5146fc72e4b037228546e7f1"></iframe>
```

There is a test Haplogroup id at the end of the url and you would replace this with the Haplogroup id for the customer result.

#### CSS + jQuery

Inline CSS and jQuery ensure the viewer occupies the whole of the viewport.

#### Support

Email me at david.scott@scotlandsdna.com for any questions and usage.

©The Moffat Partnership
