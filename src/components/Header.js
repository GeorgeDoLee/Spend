
const Header = ({totalMoney}) => {
    var numForm = new Intl.NumberFormat();

    return ( 
        <>
            <div className="bg-slate-100 w-[800px] flex flex-col justify-center items-center gap-4 p-5 rounded-md shadow-lg">
                <img 
                    src="images/bidzina.jpg" 
                    alt="image not found" 
                    className='w-[150px] rounded-3xl' 
                />
                <h1 className='text-2xl font-bold text-slate-600'>Spend Bidzina Ivanishvili's Money</h1>
            </div>
            <div className='bg-green-400 w-[800px] flex justify-center items-center gap-4 p-5 rounded-md shadow-lg'>
                <h1 className='text-3xl font-bold text-slate-50'>${numForm.format(totalMoney)}</h1>
            </div>
        </>
    );
}
 
export default Header;