---
title: "DiscordColorways and presets: a platform for a new kind of themes"
excerpt: "What if presets weren't used to adapt themes to use colorways, but to create entire themes built around colorways?"
date: "2024-12-22T17:53:00+02:00"
coverImage: /dc/banner.png
ogImage:
    url: /dc/banner.png
author:
    name: DaBluLite
    picture: https://avatars.githubusercontent.com/u/73998678?v=4

---

With the introduction of the new preset system, a very peculiar opportunity has been created: to make themes something more than just semi static pieces of code that require the end user to have a bare minimum knowledge of CSS to modify them.

What if presets weren't used to adapt themes to use colorways, but to create entire themes built around colorways? This would also allow themes to build more reactivity around colors and utilize features exclusive to the colorways CSS preprocessor, as well as making it easier for end users to make simple changes to tweak their themes, with just a few clicks.

## Enter Colorway themes and the Colorway CSS Preprocessor

With DiscordColorways leading the way for colorways in general, it was only given that it would be the first app to receive Colorway themes and the Colorway CSS Preprocessor. Colorway themes, in the case of DiscordColorways, use the same format as normal BetterDiscord/Vencord themes, but also support a custom syntax to allow usage of colorways natively inside the theme, as if it was part of it.

### Type 1: Colorways Meta

```css
/**
 * @name ClearVision
 * @author ClearVision Team
 * @version 6.9.0
 * @description Highly customizable theme for BetterDiscord.
 * @source https://github.com/ClearVision/ClearVision-v6
 * @website https://clearvision.github.io
 * @invite dHaSxn3
 * @colorwayVar main-color colorway(accent)
 * @colorwayVar hover-color colorway(accent)
 * @colorwayVar background-overlay colorway(primary)
 */
```

Colorways Metadata allow themes to stay BetterDiscord compatible, while also leveraging some of DiscordColorways' CSS features, those mainly being creating custom compiled variables, using DC's ```colorway(color)``` and ```colorway(color-<h|s|l>)``` function. Although this should be enough for most themes, there are ways to go beyond that, with Colorways Themes:

### Type 2: Colorways-Exclusive Theme CSS

~~~css
body {
  color: white;
}
@if(accent_l > 80) {
  body {
    color: black;
  }
  .test {
    color: colorway(primary);
  }

  |if(primary_l > 80) {
    .test {
      color: colorway(secondary);
    }
  }|end-if();
}@end-if();
~~~

One of the key features that Colorway themes have access to is the `if` custom at-rule, allowing themes to be more reactive and adjust better to the colors of a colorway.

<small>note: the ```if``` statements (eg: ```accent_h < 80```) get evaluated using [expr-eval](https://github.com/silentmatt/expr-eval)</small>

## Conclusion

All in all, colorways have come a long way, and with Colorway CSS, so has the way we utilize them in our projects. Stay tuned for more updates.

Happy theming!