# Color Mixer

Implement a web app that can mix red, green and blue into any color like this [example](https://coding-katas.netlify.app/color-mixer/).

## Requirments

- [ ] Add a header with three sliders (input with type `range`)
- [ ] The sliders will control the values for a rgb color (one slider for red, one slider for green, one slider for blue)
- [ ] Once a slider is moved the background color of the web app is updated
- [ ] Also show the color value in the header (can be in hex or as a rgb value like this `rgb(xx,xx,xx)`)
- [ ] Load a default color an the beginning (i.e. hotpink or dodgerblue)

## Hints

Example range input. The `value` property sets the default value for the range input.

```html
<input type="range" step="1" min="0" max="255" value="50">
```


# Color Mixer with API

This kata assumes that you already implemented the Color Mixer Kata.

Add a Get Random Color button to your color mixer that will load a random color from the random color API.