// @ts-ignore
import { Button } from "ui/components";

const App = () => {
  return (
    <div className="flex flex-col h-full justify-center items-center gap-2 bg-slate-50">
      <h1 className="text-slate-900 text-xl">Main</h1>
      <Button>Remote Button</Button>
    </div>
  );
};

export default App;
