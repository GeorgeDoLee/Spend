

const Receipt = ({receipt, totalMoney}) => {
    return (  
        <div  
          className="bg-slate-100 rounded-md p-3 fixed left-10 top-10 flex flex-col justify-center items-center gap-3 
          font-bold shadow-lg max-h-[600px] "
        >
          <h1 className="text-2xl">Your Receipt</h1>
          
          <div className="overflow-auto scroll-m-10">
            {receipt.map((product) => (
              <div 
                key={product.id} 
                className="grid grid-cols-[max(150px)_50px_50px] gap-2 "
              >
                <p>{product.name}</p>
                <p>x{product.amount}</p>
                <p className="justify-self-end text-green-500">${product.total}</p>
              </div>
            ))}
          </div>
          
        
          <div className="w-full flex justify-between border-t-2 border-black">
            <p className="text-xl">Total</p>
            <p className="text-xl text-green-500">${4900000000 - totalMoney}</p>
          </div>
        </div>
    );
}
 
export default Receipt;