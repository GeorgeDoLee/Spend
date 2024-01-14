import { useEffect, useState } from 'react';

const Product = ({product, setTotalMoney, receipt, setReceipt}) => {
    var numForm = new Intl.NumberFormat();
    const [amount, setAmount] = useState(0);
    const [itemTotal, setItemTotal] = useState(0);

    useEffect(() => {
      if(amount > 0){
        setReceipt(currentReceipt => {
          const itemIndex = currentReceipt.findIndex((item) => item.id === product.id);

          if(itemIndex == -1){
            return [
              ...currentReceipt,
              { id: product.id, name: product.name, total: itemTotal, amount: amount },
            ]
          } else {
            return currentReceipt.map((item) =>
              item.id === product.id ? { ...item, total: itemTotal, amount: amount } : item
            );
          }
        })
      } else {
        setReceipt(currentReceipt => {
          return currentReceipt.filter(item => item.id !== product.id);
        })
      }
    }, [amount])

    const handleTotal = (op) => {
      const newItemTotal = (op === '+') ?  itemTotal + product.price : itemTotal - product.price;
      setItemTotal(newItemTotal);
      (op === '+') ? setAmount((prev) => prev + 1) : setAmount((prev) => prev - 1);
      (op === '+') ? setTotalMoney((prev) => prev - product.price) : setTotalMoney((prev) => prev + product.price);
    }

    return (  
        <div className="bg-slate-100 rounded-md flex flex-col justify-center items-center gap-2 p-8 shadow-lg">
          <img 
              src={product.imageKey}
              alt="image not found" 
              className=" h-[120px] rounded-lg"
          />

          <div className="flex flex-col justify-center items-center">
            <p className="text-xl font-bold text-center">{product.name}</p>
            <p className="text-lg font-bold text-green-500 text-center">${numForm.format(product.price)}</p>
          </div>

          <div className="flex gap-4">
            <button 
                className={`${amount > 0 ? "bg-red-500" : "bg-slate-400"}  rounded-md p-2 text-slate-100 font-bold w-[50px]`}
                onClick={() => (amount > 0) ? handleTotal('-') : {}}
            >Sell</button>
            <input 
              type="text" 
              value={amount}
              className="border-2 border-slate-500 rounded-md p-2 w-[80px] text-center"
            />
            <button 
                className="bg-green-500 rounded-md p-2 text-slate-100 font-bold w-[50px]"
                onClick={() => handleTotal('+')}
            >Buy</button>
          </div>
        </div>
    );
}
 
export default Product;