import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import './App.css';
import "@grapecity/activereports/styles/ar-js-ui.css";
import "@grapecity/activereports/styles/ar-js-viewer.css";
import "@grapecity/activereports/styles/ar-js-designer.css";
import { Viewer } from "@grapecity/activereports-react";
import "@grapecity/activereports/pdfexport";
import "@grapecity/activereports/htmlexport";
import "@grapecity/activereports/xlsxexport";
import "@grapecity/activereports-localization";

function App() {
  return (
      <BrowserRouter>
          <ul>
              <li><Link to='/'>プレビュー</Link></li>
              <li><Link to='/edit'>編集</Link></li>
              <li><Link to='/print'>印刷</Link></li>
          </ul>
          <Routes>
              <Route path='/' element={
                  <div id="viewer-host">
                      <Viewer report={{ Uri: "reports/新規レポート.rdlx-json" }} language="ja" />
                  </div>
              } />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
