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
import axios from "axios";
import {useState} from "react";

function App() {
  const [data, setData] = useState("");
    const handleGet = () => {
        axios
            .get('http://127.0.0.1:8080/active-record')
            .then(res => setData(res.data.taxExemptLocation))
    }
    const handleSubmit = () => {
        axios
            .post('http://127.0.0.1:8080/active-record', {taxExemptLocation: data})
    }
  const printDocument = (documentId) => {
    const doc = document.getElementById(documentId);

    //Wait until PDF is ready to print
    if (typeof doc.print === 'undefined') {
      setTimeout(function(){printDocument(documentId);}, 1000);
    } else {
      doc.print();
    }
  }
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
              <Route path='/edit' element={
                  <div>
                      <button onClick={handleGet}>取得</button>
                      <form onSubmit={() => null}>
                          <label>
                              taxExemptLocation
                              <input type="text" value={data} onChange={e => setData(e.target.value)}/>
                          </label>
                          <button type="button" onClick={handleSubmit}>保存</button>
                      </form>
                  </div>
              } />
              <Route path='/print' element={
                <div>
                  <embed
                    type="application/pdf"
                    src="reports/test.pdf"
                    id="aaa"
                    width="100%"
                    height="100%" />
                  <button onClick={printDocument("aaa")}>印刷</button>
                </div>
              } />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
