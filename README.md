# Counter Application using ReactJS ⚛️

Live demo - [https://srikanth-kandi.github.io/react-counter-app/](https://srikanth-kandi.github.io/react-counter-app/)

<h3 id="executing-local">Executing on Local Machine</h3>

<details>
<summary><b>Steps to Run on your Local Machine</b></summary>

<blockquote>

<details>
<summary><b>Requirements</b></summary>

- Install NodeJS from [https://nodejs.org/en/download](https://nodejs.org/en/download)
- Install `Git` from [https://git-scm.com/downloads](https://git-scm.com/downloads)
</details>

<blockquote>

1. Cloning this repository

    ```bash
    git clone https://github.com/srikanth-kandi/react-counter-app
    ```

2. Move to the cloned directory

    ```bash
    cd react-counter-app
    ```

3. Installing the dependencies of this project

    ```bash
    npm install
    ```

4. Starting the development server

    ```bash
    npm start
    ```

5. If everything works fine you can see the output at [http://localhost:3000/react-counter-app](http://localhost:3000/react-counter-app)

6. Check details of implementation [here](#details-implementation)
</details>

<h3 id="details-implementation">Details of Implementation</h3>

Implemented using the [ES6 Class](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes) to define a component.

```jsx
import { Component } from 'react'

class Counter extends Component {
    ...
}
```

_As we are extending the `Component` class all the pre-defined methods and objects will be [Inherited](https://en.wikipedia.org/wiki/Inheritance_(object-oriented_programming)) to the `Counter` class so we can easily implement new functionality to the `Counter` component._

So to define a new component we need to create a folder under the `src/` as `src/components`, under this directory we will store our new components.

Now, we need to create the `Counter` component under the path `src/components/Counter`

_NOTE: In ReactJS all the Components we create must be started with an Uppercase Alphabet_

Under the `src/components/Counter` we create two files `index.js` and `index.css` which holds the functionality and design part of the `Counter` component.

In the `index.js` file, we create `Counter` class extends the `Component` class and linking the `index.css` to `Counter` component.

The `render()` is a method Inherited from `Component` class which is crucial for rendering the `JSX` elements to `<html>` elements.

```jsx
import { Component } from 'react'
import './index.css'

class Counter extends Component {
    render() {
        return (
            <div className="container">
                <h1 className="heading">Counter</h1>
                <p className="count">0</p>
                <div>
                    <button className="button">Decrease 🔽</button>
                    <button className="button">Increase 🔼</button>
                </div>
            </div>
        )
    }
}

export default Counter
```

Now, importing the `Counter` component to `src/App.js` file for displaying on Homepage.

```jsx
import Counter from './components/Counter'

const App = () => {
    return <Counter />
}
export default App
```

To see the output on your Local machine follow [Executing on Local Machine](#executing-local) section