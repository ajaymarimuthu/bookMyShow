 

const Button = ({title,type}) => {
  return (
  
    <button type={type} className="p-1 mt-[10px] w-full bg-green-400 text-white font-bold">{title}</button>
  )
}

export default Button