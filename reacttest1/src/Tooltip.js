import './Tooltip.css';
export default function Tooltip({
    children,   //to make tooltip trigger dynamic
    tooltipText = "Hey this Tooltip Project using React is made by Me ", //prop: tooltipText 
    position = "bottom", //position prop
}) 
{
    return (
        <div className='tooltip-trigger'>
            {children}
            <div className={`tooltip tooltip-${position}`}>
                {tooltipText}
            </div>
        </div>
    )
}