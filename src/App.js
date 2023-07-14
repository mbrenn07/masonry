import Button from './components/Button';
import resume from "./resume.json";
import resumeToLatex from './latexHandler';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Button onClick={() => resumeToLatex(resume)}>
        Generate LaTeX Resume
      </Button>
      <form action="https://www.overleaf.com/docs" method="post" target="_blank" id="latexForm">
        <input type="hidden" name="snip_uri" id="latexValue"
          value="data:application/zip;base64,UEsDBAoAAAAAAGAI7lYPL19wOAEAADgBAAAJAAAASGVsbG8udGV4XGRvY3VtZW50Y2xhc3N7YXJ0aWNsZX0KXHVzZXBhY2thZ2V7c3ViZmlsZXN9Clx0aXRsZXtJIGFtIGEgWmlwIGZpbGV9ClxhdXRob3J7T3ZlcmxlYWZ9ClxkYXRle0p1bmUgMjAyM30KXGJlZ2lue2RvY3VtZW50fQpcbWFrZXRpdGxlClxzZWN0aW9ue0ludHJvZHVjdGlvbn0KXHN1YnNlY3Rpb257SG93IHRvIGFkZCBDaXRhdGlvbnMgYW5kIGEgUmVmZXJlbmNlcyBMaXN0fQpcQ2l0YXRpb24gZXhhbXBsZTogXGNpdGV7Z3JlZW53YWRlOTN9ClxiaWJsaW9ncmFwaHlzdHlsZXthbHBoYX0KXGJpYmxpb2dyYXBoeXtzYW1wbGV9ClxlbmR7ZG9jdW1lbnR9UEsBAhQACgAAAAAAYAjuVg8vX3A4AQAAOAEAAAkAAAAAAAAAAAAAAAAAAAAAAEhlbGxvLnRleFBLBQYAAAAAAQABADcAAABfAQAAAAA=" />
      </form>
    </div>
  );
}

export default App;
