//import React from 'react';

const BecerilerItem = () => {
    const skillsData = [
        {
          column: 1,
          items: [
            { name: "VS CODE", image: "/resimler/vscode.svg"},
            { name: "FIGMA", image: "/resimler/figma.svg" },
            { name: "NODE", image: "/resimler/node-js.svg" },
          ],
        },
        {
          column: 2,
          items: [
            { name: "REACT", image: "/resimler/react-2.svg" },
            { name: "REDUX", image: "/resimler/redux.svg" },
            { name: "JAVASCRIPT", image: "/resimler/javascript.svg" },
          ],
        },
      ];
  return (
    <div className="flex gap-5 sm:gap-20 pt-12 sm:pt-0">
          {skillsData.map((column) => (
            <div
              key={column.column}
              className="flex flex-col gap-12"
            >
              {column.items.map((item) => (
                <div key={item.name} className="flex items-center gap-12">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-32 h-32"
                  />
                  <p className="mt-2 text-sm font-semibold font-inter dark:text-white">{item.name}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
  )
}

export default BecerilerItem