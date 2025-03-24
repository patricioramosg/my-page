import React from 'react';

function Snippet() {
  return (
      <div className="bg-[#1e1e1e] rounded-lg shadow-xl max-w-3xl mx-auto">
        {/* Barra de título */}
        <div className="flex items-center justify-between px-4 py-2 bg-[#323233] rounded-t-lg">
          <span className="text-[#cccccc]">Snippet.tsx</span>
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
            <div className="w-3 h-3 rounded-full bg-[#febc2e]"></div>
            <div className="w-3 h-3 rounded-full bg-[#28c840]"></div>
          </div>
        </div>
        
        {/* Área del código */}
        <div className="p-6 text-[#d4d4d4]">
          <div className="flex">
            {/* Números de línea */}
            <div className="text-[#858585] mr-4 select-none text-right">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
                <div key={num}>{num}</div>
              ))}
            </div>
            
            {/* Código con colores de sintaxis */}
            <div className="flex-1">
              <div><span className="text-[#c586c0]">import</span> <span className="text-[#9cdcfe]">React</span> <span className="text-[#c586c0]">from</span> <span className="text-[#ce9178]">'react'</span></div>
              <div>&nbsp;</div>
              <div><span className="text-[#569cd6]">function</span> <span className="text-[#dcdcaa]">Snippet</span>() {'{'}</div>
              <div>&nbsp;&nbsp;<span className="text-[#c586c0]">return</span> (</div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-[#4ec9b0]">section</span> <span className="text-[#9cdcfe]">className</span>=<span className="text-[#ce9178]">'flex h-screen bg-teal-100'</span> <span className="text-[#9cdcfe]">id</span>=<span className="text-[#ce9178]">'home'</span>&gt;</div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-[#4ec9b0]">p</span>&gt;home&lt;/<span className="text-[#4ec9b0]">p</span>&gt;</div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className="text-[#4ec9b0]">section</span>&gt;</div>
              <div>&nbsp;&nbsp;)</div>
              <div>{'}'}</div>
              <div>&nbsp;</div>
              <div><span className="text-[#c586c0]">export default</span> <span className="text-[#9cdcfe]">Snippet</span></div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Snippet;