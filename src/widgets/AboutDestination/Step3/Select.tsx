import Image from "next/image"

import wa from './img/wa.svg'
import visa from './img/visa.svg'
import mastercard from './img/mc.svg'


interface Props
{
    setMethod: CallableFunction
}


export default (props: Props) => {
    return <>
        <button className="btn bg-blue-50 w-full flex-1" onClick={() => props.setMethod("whatsapp")}>
            <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                    <Image src={wa} alt="crypto" height={24} />
                    <span className="text-lg">
                        Confirm via WhatsApp
                    </span>
                </div>
                <span className="text-accent text-xs">
                    Cash or card · No prepayment required
                </span>
            </div>
        </button>
        {/* <button className="btn bg-blue-50 w-full flex-1">
            <Image src={usdt} alt="crypto" height={24} />&nbsp;
            With USDT (on request)
        </button> */}
        <button className="btn bg-blue-50 w-full flex-1" disabled>
            <Image src={visa} alt="crypto" height={24} />
            <Image src={mastercard} alt="crypto" height={24} />&nbsp;
            Bank / Credit card (Currently unavailable)
            <br />
        </button>
    </>
}