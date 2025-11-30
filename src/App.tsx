import { Excalidraw } from '@excalidraw/excalidraw';
import './App.css'

function App() {
  return (
    <>
      <div id="libertygame-excalidraw-export"><button>리버티게임으로 이미지 내보내기</button></div>
      <div style={{ height: "500px" }}>
        <Excalidraw />
      </div>
    </>
  );
  
}

export default App;
