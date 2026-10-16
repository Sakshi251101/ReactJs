// const heading = React.createElement('h1', {id: 'heading'}, 'Hello, World!'); // the empty object {} is for attributes, and the string 'Hello, World!' is the content of the h1 element


const heading = React.createElement('div', {id: 'parent'}, [
    React.createElement('div', {id: 'child'}, 
    [React.createElement('h1', {id: 'heading'}, 'Hello, World!'), React.createElement('h1', {id: 'heading'}, 'Hello, World!')] ),
    React.createElement('div', {id: 'child'}, 
    React.createElement('h1', {id: 'heading'}, 'Hello, World!'))
]);

//it converts the JSX code into React.createElement calls which is converted into objects that represent the DOM elements. React then uses these objects to update the actual DOM efficiently while rendering.
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(heading);