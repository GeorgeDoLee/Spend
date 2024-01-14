import { useState } from "react";
import Header from "./Header";
import Product from "./Product";
import ProductList from '../db.json';
import Receipt from "./Receipt";

function App() {
  const [totalMoney, setTotalMoney] = useState(4900000000);
  const [receipt, setReceipt] = useState([]);
  console.log(receipt)
  
  return (
    <div className="w-screen h-screen flex flex-col gap-3 items-center bg-slate-200 py-4 overflow-auto">
      {receipt.length > 0 && 
        <Receipt receipt={receipt} totalMoney={totalMoney} />
      }
      <Header totalMoney={totalMoney} />
      <div className="w-[800px] grid grid-cols-3 gap-3">
        {ProductList && ProductList.map((product) => (
          <Product 
            key={product.id} 
            product={product} 
            setTotalMoney={setTotalMoney} 
            receipt={receipt}
            setReceipt={setReceipt}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
