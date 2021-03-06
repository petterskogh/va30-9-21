import React from 'react';

type Props = {
  variant: 'primary' | 'warning'
  onClick(): void 
}

const variantStyleMap = {
  primary: 'bg-xlentyellow rounded-lg',
  warning: 'bg-red-400 rounded-sm'
}

const TypeButton: React.FC<Props> = ({variant, onClick, children}) => {
  return(
    <button onClick={onClick} className={`${variantStyleMap[variant]} font-montserrat px-4 py-2`}>
      {children}
    </button>
  );
}

export default TypeButton;