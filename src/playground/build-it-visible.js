let visibility = false;
const app = {
  title: 'Visibility Toggle',
  text: 'Hey. These are some details you can now see!'
};

const appRoot = document.getElementById('app');

const toggleVisibility = () => {
  visibility = !visibility;
  render();
};

const render = () => {
  
  const template = (
    <div>
      <h1>{app.title}</h1>
      <button onClick={toggleVisibility}>
        {visibility ? 'Hide details' : 'Show details'}
      </button>
      {visibility && (
        <div>
          <p>{app.text}</p>
        </div>
      )}
    </div>
  );

  ReactDOM.render(template, appRoot);
};

render();