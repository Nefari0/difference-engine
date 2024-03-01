export const baseNumbers = [
    {
        type:'Binary',
        function:(calculation) =>{return Number(calculation).toString(2).substring(0,20)}
    },
    {
        type:'Decimal',
        function:(calculation) => {return Number(parseInt(calculation,2))}
    }
]