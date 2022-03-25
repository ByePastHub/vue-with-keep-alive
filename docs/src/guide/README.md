# Introduce

**VueWithKeepAlive** It is an extension based on the `<keep-alive />` component. It can automatically help you cache the page components in the route. Similarly, it will also help you automatically destroy the components that leave the page cache when you return. You can also custom destroy cached page components.

## How It Works?

Extending on the basis of the `<keep-alive />` component, rewrite some methods of `vue-router`, so as to judge whether to go forward or backward, use it to cache page components or destroy page components, it will The exported name of the page component you write in the route will be overwritten with route.name, to avoid some users who do not have the component without exporting the name, or write the wrong one and cause no cache to change the page component, and also make it more convenient to optimize the old project.
