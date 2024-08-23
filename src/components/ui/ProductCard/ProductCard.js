



export default function ProductCard(props){

    const {img, title, category, price} = props

    return(
        <div className="flex flex-col gap-[10px]">
            <img src={img} alt={title} className="w-[150px] h-[150px] rounded-[12px] object-cover"/>
            <div className="flex flex-col gap-[4px]">
                <p className="text-[12px] font-bold">{title}</p>
                <p className="text-[10px] text-[#12121D]">{category}</p>
                <p className="text-[14px] text-[#FDDB16]">{price} сом</p>
            </div>
        </div>
    )
}