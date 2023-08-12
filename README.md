# Counter Application using ReactJS ⚛️

Live demo - [https://srikanth-kandi.github.io/react-counter-app/](https://srikanth-kandi.github.io/react-counter-app/)

<h3 id="executing-on-local-machine">Executing on Local Machine 💻</h3>

<details>
<summary><b>Steps to Run on your Local Machine</b></summary>

<blockquote>

<details>
<summary><b>Requirements</b></summary>

- Install `NodeJS` from [https://nodejs.org/en/download](https://nodejs.org/en/download)

- Install `Git` from [https://git-scm.com/downloads](https://git-scm.com/downloads)
</details>

</blockquote>

1. Cloning this repository

    ```bash
    git clone https://github.com/srikanth-kandi/react-counter-app
    ```

2. Move to the cloned directory

    ```bash
    cd react-counter-app
    ```

3. Installing all the dependencies

    ```bash
    npm install
    ```

4. Start the development server

    ```bash
    npm start
    ```

5. If everything works fine you can see the output at [http://localhost:3000/react-counter-app](http://localhost:3000/react-counter-app)

6. Check [Details of Implementation 👨🏻‍💻](#details-of-implementation) section for more information

<blockquote>

<details>
<summary><b>Deploying your ReactJS Application in GitHub</b><i> (Optional)</i></summary>

- Visit [this](https://youtu.be/7wzuievFjrk) video for reference

- Install the `gh-pages` package

    ```bash
    npm install gh-pages --save-dev
    ```

- Add `homepage` to the `package.json` file

    ```json
    "homepage": "https://<your-username>.github.io/<your-repository-name>"
    ```

- Add `predeploy` and `deploy` scripts to the `package.json` file

    ```json
    "scripts": {
        "predeploy": "npm run build",
        "deploy": "gh-pages -d build"
    }
    ```

- Deploy the application

    ```bash
    npm run deploy
    ```

- After successful execution of the above command you can see the deployed application at [https://\<your-username>.github.io/\<your-repository-name>](https://<username>.github.io/<repository-name>) and `gh-pages` branch will be created in your repository.
</details>

</blockquote>
</details>

<h3 id="details-of-implementation">Details of Implementation 👨🏻‍💻</h3>

1. Implemented using the [ES6 Class](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes) to define a component.

    ```jsx
    import { Component } from 'react'

    class Counter extends Component {
        ...
    }
    ```

    _As we are extending the `Component` class all the pre-defined methods and objects will be [Inherited](https://en.wikipedia.org/wiki/Inheritance_(object-oriented_programming)) to the `Counter` class, so we can easily implement new functionality to the `Counter` component._

2. So to define a new component we need to create a folder under the `src/` as `src/components`, under this directory we will store our new components.

3. Now, we need to create the `Counter` component under the path `src/components/Counter`

    _NOTE: In ReactJS all the Components we create must be started with an Uppercase Alphabet_

4. Under the `src/components/Counter` we create two files `index.js` and `index.css` which hold the functionality and design part of the `Counter` component.

    In the `index.js` file, we create the `Counter` class extends the `Component` class, and link the `index.css` to the `Counter` component.

5. `render()` is a method Inherited from the `Component` class which is crucial for rendering the `JSX` elements to `<html>` elements.

    ```jsx
    import { Component } from 'react'
    import './index.css'

    class Counter extends Component {
        render() {
            return (
                <div className="container">
                    <div className="shadow-container">
                        <h1 className="heading">Counter</h1>
                        <p className="count">0</p>
                        <div>
                            <button className="button">Decrease 🔽</button>
                            <button className="button">Increase 🔼</button>
                        </div>
                    </div>
                </div>
            )
        }
    }

    export default Counter
    ```

    Now, import the `Counter` component to the `src/App.js` file for displaying on Homepage.

    ```jsx
    import Counter from './components/Counter'

    const App = () => {
        return <Counter />
    }
    export default App
    ```

    To see the output on your Local machine follow [Executing on Local Machine 💻](#executing-on-local-machine) section

6. But we developed the static app till now, to make it dynamic we need to use the `state` object which is Inherited from the `Component` class.

    ```jsx
    class Counter extends Component {
        state = {
            count: 0
        }
    }
    ```

    _NOTE: `state` object is used to store the data which is frequently updated during the runtime of the application._

7. Now, we need to display the `count` value in the `<p>` tag, so we need to use the `JSX` syntax to display the `count` value.

    ```jsx
    class Counter extends Component {
        state = {
            count: 0
        }
        render() {
            const { count } = this.state
            return (
                <div className="container">
                    <div className="shadow-container">
                        <h1 className="heading">Counter</h1>
                        <p className="count">{count}</p>
                        <div>
                            <button className="button">Decrease 🔽</button>
                            <button className="button">Increase 🔼</button>
                        </div>
                    </div>
                </div>
            )
        }
    }
    ```

    _NOTE: [this](https://en.wikipedia.org/wiki/This_(computer_programming)) is a keyword in Object Oriented Programming that refer to the object, class, or other entity of which the currently running code._

8. Now, we need to implement the functionality of the `Increase 🔼` and `Decrease 🔽` buttons, so we need to add the `onClick` event to the buttons.

    ```jsx
    class Counter extends Component {
        state = {
            count: 0
        }
        render() {
            const { count } = this.state
            return (
                <div className="container">
                    <div className="shadow-container">
                        <h1 className="heading">Counter</h1>
                        <p className="count">{count}</p>
                        <div>
                            <button className="button" onClick={this.onDecrement}>Decrease 🔽</button>
                            <button className="button" onClick={this.onIncrement}>Increase 🔼</button>
                        </div>
                    </div>
                </div>
            )
        }
    }
    ```

    _NOTE: `onClick` is a [Event Handler](https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Event_handlers) which is used to handle the click event on the element._

9. Now, we need to implement the `onIncrement()` and `onDecrement()` methods to increase and decrease the `count` value using the `setState()` method which is Inherited from the `Component` class.

    The `setState()` method takes the `prevState` object as an argument and returns the updated `state` object.

    ```jsx
    class Counter extends Component {
        state = {
            count: 0
        }
        onIncrement = () => {
            this.setState(prevState => {
                return { count: prevState.count + 1 }
            })
        }
        onDecrement = () => {
            this.setState(prevState => {
                return { count: prevState.count - 1 }
            })
        }
        render() {
            const { count } = this.state
            return (
                <div className="container">
                    <div className="shadow-container">
                        <h1 className="heading">Counter</h1>
                        <p className="count">{count}</p>
                        <div>
                            <button className="button" onClick={this.onDecrement}>Decrease 🔽</button>
                            <button className="button" onClick={this.onIncrement}>Increase 🔼</button>
                        </div>
                    </div>
                </div>
            )
        }
    }

    export default Counter
    ```

    _NOTE: `setState()` is a method that is used to update the `state` object of the component._

10. Now, we can see the `count` is updating by clicking on the `Increase 🔼` and `Decrease 🔽` buttons. See the output on the browser by following the [Executing on Local Machine 💻](#executing-on-local-machine) section.